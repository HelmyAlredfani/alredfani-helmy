// نظام إدارة نتائج الطلاب مع المزامنة عبر الإنترنت
// تم تطويره بواسطة Manus

// متغيرات عامة
const API_BASE_URL = 'http://5000-i2l9rzkr8x237lya37ty0-c48e275b.manus.computer'; // عنوان API الفعلي
let studentsData = [];
let isAdmin = false;
let lastSyncTime = null;
let isOnline = false;
let syncInterval = null;

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تحميل البيانات من الخادم
    initializeApp();
    
    // إعداد أحداث النقر على الأزرار
    setupEventListeners();
    
    // إعداد نماذج إدخال المواد
    setupSubjectInputs();
    
    // مراقبة حالة الاتصال
    monitorConnectionStatus();
    
    // بدء المزامنة التلقائية كل دقيقة
    startAutoSync();
    
    console.log("تم تهيئة التطبيق بنجاح");
});

// بدء المزامنة التلقائية
function startAutoSync() {
    // إيقاف أي مزامنة سابقة
    if (syncInterval) {
        clearInterval(syncInterval);
    }
    
    // بدء المزامنة كل دقيقة
    syncInterval = setInterval(async function() {
        if (isOnline) {
            console.log("جاري المزامنة التلقائية...");
            await syncDataFromServer();
            
            // تحديث واجهة المستخدم إذا كانت لوحة المسؤول مفتوحة
            if (document.getElementById('adminSection').style.display === 'block') {
                loadAdminStudentsList();
            }
        }
    }, 60000); // كل دقيقة
}

// مراقبة حالة الاتصال
function monitorConnectionStatus() {
    // التحقق من حالة الاتصال عند بدء التطبيق
    updateConnectionStatus();
    
    // التحقق من حالة الاتصال كل 30 ثانية
    setInterval(updateConnectionStatus, 30000);
    
    // الاستماع لأحداث الاتصال بالإنترنت
    window.addEventListener('online', function() {
        updateConnectionStatus();
        if (isOnline) {
            syncDataFromServer();
        }
    });
    
    window.addEventListener('offline', function() {
        updateConnectionStatus();
    });
}

// تحديث مؤشر حالة الاتصال
async function updateConnectionStatus() {
    const statusElement = document.getElementById('connectionStatus');
    
    try {
        const status = await checkServerStatus();
        if (status && status.status === 'online') {
            statusElement.textContent = 'متصل';
            statusElement.className = 'connection-status online';
            isOnline = true;
        } else {
            statusElement.textContent = 'غير متصل';
            statusElement.className = 'connection-status offline';
            isOnline = false;
        }
    } catch (error) {
        statusElement.textContent = 'غير متصل';
        statusElement.className = 'connection-status offline';
        isOnline = false;
    }
}

// تهيئة التطبيق
async function initializeApp() {
    try {
        // التحقق من حالة الاتصال بالخادم
        const statusResponse = await checkServerStatus();
        if (statusResponse && statusResponse.status === 'online') {
            console.log("الاتصال بالخادم متاح");
            isOnline = true;
            
            // تحميل البيانات من الخادم
            await syncDataFromServer();
            
            // إذا كانت البيانات فارغة، قم بتهيئة قاعدة البيانات بالبيانات الافتراضية
            if (studentsData.length === 0) {
                await initializeDatabase();
            }
        } else {
            console.log("الاتصال بالخادم غير متاح، سيتم استخدام البيانات المحلية");
            isOnline = false;
            loadStudentsDataFromStorage();
        }
    } catch (error) {
        console.error("خطأ في تهيئة التطبيق:", error);
        // في حالة فشل الاتصال بالخادم، استخدم البيانات المحلية
        isOnline = false;
        loadStudentsDataFromStorage();
    }
}

// تهيئة قاعدة البيانات بالبيانات الافتراضية
async function initializeDatabase() {
    try {
        // إنشاء بيانات الطلاب الافتراضية
        const defaultStudents = [
            {
                student_id: "1056",
                student_name: "جيفارا حلمي محسن صالح",
                class: "اول ثانوي",
                subjects: {
                    "قران كريم": 100,
                    "اسلامية": 100,
                    "لغة عربية": 100,
                    "رياضيات": 100,
                    "فيزياء": 100,
                    "كيمياء": 100,
                    "احياء": 100,
                    "انجليزي": 100,
                    "اجتماعيات": 100
                },
                total: 900,
                percentage: 100,
                rank: 1,
                nationality: "سعودي"
            },
            {
                student_id: "1087",
                student_name: "أحمد محمد علي",
                class: "اول ثانوي",
                subjects: {
                    "قران كريم": 90,
                    "اسلامية": 85,
                    "لغة عربية": 95,
                    "رياضيات": 80,
                    "فيزياء": 75,
                    "كيمياء": 85,
                    "احياء": 90,
                    "انجليزي": 80,
                    "اجتماعيات": 95
                },
                total: 775,
                percentage: 86.1,
                rank: 2,
                nationality: "مصري"
            },
            {
                student_id: "1101",
                student_name: "محمد عبدالله سعيد",
                class: "اول ثانوي",
                subjects: {
                    "قران كريم": 85,
                    "اسلامية": 80,
                    "لغة عربية": 90,
                    "رياضيات": 95,
                    "فيزياء": 85,
                    "كيمياء": 80,
                    "احياء": 75,
                    "انجليزي": 85,
                    "اجتماعيات": 90
                },
                total: 765,
                percentage: 85,
                rank: 3,
                nationality: "باكستاني"
            }
        ];
        
        // إرسال طلب تهيئة قاعدة البيانات
        const response = await fetch(`${API_BASE_URL}/api/initialize`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: 'alredfani',
                students: defaultStudents
            }),
            mode: 'cors'
        });
        
        if (response.ok) {
            const data = await response.json();
            
            if (data.status === 'success') {
                console.log(`تم تهيئة قاعدة البيانات بنجاح مع ${data.count} طالب`);
                
                // تحميل البيانات من الخادم بعد التهيئة
                await syncDataFromServer();
                
                return true;
            } else {
                console.error("خطأ في تهيئة قاعدة البيانات:", data.message);
                return false;
            }
        } else {
            console.error("فشل في تهيئة قاعدة البيانات");
            return false;
        }
    } catch (error) {
        console.error("خطأ في تهيئة قاعدة البيانات:", error);
        return false;
    }
}

// التحقق من حالة الاتصال بالخادم
async function checkServerStatus() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/sync/status`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'no-cache' // منع التخزين المؤقت
        });
        if (response.ok) {
            return await response.json();
        }
        return null;
    } catch (error) {
        console.error("خطأ في التحقق من حالة الخادم:", error);
        return null;
    }
}

// مزامنة البيانات من الخادم
async function syncDataFromServer() {
    try {
        // إعداد بيانات الطلب
        const requestData = {
            action: 'fetch',
            search_type: 'all'
        };
        
        // إذا كان هناك وقت مزامنة سابق، استخدمه لجلب التغييرات فقط
        if (lastSyncTime) {
            requestData.search_type = 'changes';
            requestData.since = lastSyncTime;
        }
        
        // إرسال طلب المزامنة
        const response = await fetch(`${API_BASE_URL}/api/sync/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData),
            mode: 'cors',
            cache: 'no-cache' // منع التخزين المؤقت
        });
        
        if (response.ok) {
            const data = await response.json();
            
            if (data.status === 'success') {
                // تحديث البيانات المحلية
                if (lastSyncTime && requestData.search_type === 'changes' && data.data.length > 0) {
                    // دمج التغييرات مع البيانات الحالية
                    mergeChangesWithLocalData(data.data);
                    console.log(`تم مزامنة ${data.data.length} تغيير من الخادم`);
                } else if (data.data.length > 0) {
                    // استبدال البيانات المحلية بالكامل
                    studentsData = data.data;
                    console.log(`تم مزامنة ${data.data.length} طالب من الخادم`);
                } else {
                    console.log("لا توجد تغييرات جديدة للمزامنة");
                }
                
                // تحديث وقت آخر مزامنة
                lastSyncTime = data.timestamp;
                
                // حفظ البيانات في التخزين المحلي
                saveStudentsData();
                
                return true;
            } else {
                console.error("خطأ في مزامنة البيانات:", data.error);
                return false;
            }
        } else {
            console.error("فشل في مزامنة البيانات من الخادم");
            return false;
        }
    } catch (error) {
        console.error("خطأ في مزامنة البيانات من الخادم:", error);
        return false;
    }
}

// دمج التغييرات مع البيانات المحلية
function mergeChangesWithLocalData(changedStudents) {
    if (!changedStudents || changedStudents.length === 0) return;
    
    changedStudents.forEach(changedStudent => {
        // البحث عن الطالب في البيانات المحلية
        const localIndex = studentsData.findIndex(s => s.student_id === changedStudent.student_id);
        
        if (localIndex !== -1) {
            // تحديث بيانات الطالب الموجود
            studentsData[localIndex] = changedStudent;
        } else {
            // إضافة طالب جديد
            studentsData.push(changedStudent);
        }
    });
}

// إرسال البيانات إلى الخادم
async function sendDataToServer(action, data, password = null) {
    try {
        // إعداد بيانات الطلب
        const requestData = {
            action: action,
            ...data
        };
        
        // إضافة كلمة المرور للعمليات التي تتطلب صلاحيات المسؤول
        if (password) {
            requestData.password = password;
        }
        
        // إرسال الطلب
        const response = await fetch(`${API_BASE_URL}/api/sync/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData),
            mode: 'cors',
            cache: 'no-cache' // منع التخزين المؤقت
        });
        
        if (response.ok) {
            const responseData = await response.json();
            
            if (responseData.status === 'success') {
                // تحديث وقت آخر مزامنة
                lastSyncTime = responseData.timestamp;
                
                return {
                    success: true,
                    data: responseData
                };
            } else {
                return {
                    success: false,
                    error: responseData.error || 'حدث خطأ غير معروف'
                };
            }
        } else {
            return {
                success: false,
                error: 'فشل في الاتصال بالخادم'
            };
        }
    } catch (error) {
        console.error(`خطأ في إرسال البيانات (${action}) إلى الخادم:`, error);
        return {
            success: false,
            error: 'حدث خطأ أثناء الاتصال بالخادم'
        };
    }
}

// تحميل بيانات الطلاب من التخزين المحلي
function loadStudentsDataFromStorage() {
    const savedData = localStorage.getItem('studentsData');
    const savedSyncTime = localStorage.getItem('lastSyncTime');
    
    if (savedData) {
        studentsData = JSON.parse(savedData);
        console.log(`تم تحميل بيانات ${studentsData.length} طالب من التخزين المحلي`);
    } else {
        // تهيئة بيانات الطلاب الافتراضية إذا لم تكن هناك بيانات محفوظة
        initializeDefaultStudentsData();
    }
    
    if (savedSyncTime) {
        lastSyncTime = savedSyncTime;
    }
}

// تهيئة بيانات الطلاب الافتراضية
function initializeDefaultStudentsData() {
    // بيانات عينة للاختبار
    studentsData = [
        {
            student_id: "1056",
            student_name: "جيفارا حلمي محسن صالح",
            class: "اول ثانوي",
            subjects: {
                "قران كريم": 100,
                "اسلامية": 100,
                "لغة عربية": 100,
                "رياضيات": 100,
                "فيزياء": 100,
                "كيمياء": 100,
                "احياء": 100,
                "انجليزي": 100,
                "اجتماعيات": 100
            },
            total: 900,
            percentage: 100,
            rank: 1,
            nationality: "سعودي"
        },
        {
            student_id: "1087",
            student_name: "أحمد محمد علي",
            class: "اول ثانوي",
            subjects: {
                "قران كريم": 90,
                "اسلامية": 85,
                "لغة عربية": 95,
                "رياضيات": 80,
                "فيزياء": 75,
                "كيمياء": 85,
                "احياء": 90,
                "انجليزي": 80,
                "اجتماعيات": 95
            },
            total: 775,
            percentage: 86.1,
            rank: 2,
            nationality: "مصري"
        },
        {
            student_id: "1101",
            student_name: "محمد عبدالله سعيد",
            class: "اول ثانوي",
            subjects: {
                "قران كريم": 85,
                "اسلامية": 80,
                "لغة عربية": 90,
                "رياضيات": 95,
                "فيزياء": 85,
                "كيمياء": 80,
                "احياء": 75,
                "انجليزي": 85,
                "اجتماعيات": 90
            },
            total: 765,
            percentage: 85,
            rank: 3,
            nationality: "باكستاني"
        }
    ];
    
    // حفظ البيانات الافتراضية في التخزين المحلي
    saveStudentsData();
    
    console.log(`تم تهيئة بيانات ${studentsData.length} طالب افتراضية`);
}

// إعداد أحداث النقر على الأزرار
function setupEventListeners() {
    // زر البحث
    document.getElementById('searchBtn').addEventListener('click', function() {
        searchStudents();
    });
    
    // زر تسجيل دخول المسؤول
    document.getElementById('adminLoginBtn').addEventListener('click', function() {
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
    });
    
    // زر تسجيل الدخول في النافذة المنبثقة
    document.getElementById('loginBtn').addEventListener('click', async function() {
        const password = document.getElementById('password').value;
        
        try {
            // التحقق من كلمة المرور عبر الخادم
            const response = await fetch(`${API_BASE_URL}/api/authenticate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password }),
                mode: 'cors'
            });
            
            if (response.ok) {
                const data = await response.json();
                
                if (data.authenticated) {
                    isAdmin = true;
                    document.getElementById('adminSection').style.display = 'block';
                    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
                    loadAdminStudentsList();
                    alert('تم تسجيل الدخول بنجاح');
                } else {
                    alert('كلمة المرور غير صحيحة');
                }
            } else {
                // في حالة فشل الاتصال بالخادم، استخدم التحقق المحلي
                if (password === 'alredfani') {
                    isAdmin = true;
                    document.getElementById('adminSection').style.display = 'block';
                    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
                    loadAdminStudentsList();
                    alert('تم تسجيل الدخول بنجاح (وضع غير متصل)');
                } else {
                    alert('كلمة المرور غير صحيحة');
                }
            }
        } catch (error) {
            console.error("خطأ في التحقق من كلمة المرور:", error);
            
            // في حالة فشل الاتصال بالخادم، استخدم التحقق المحلي
            if (password === 'alredfani') {
                isAdmin = true;
                document.getElementById('adminSection').style.display = 'block';
                bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
                loadAdminStudentsList();
                alert('تم تسجيل الدخول بنجاح (وضع غير متصل)');
            } else {
                alert('كلمة المرور غير صحيحة');
            }
        }
    });
    
    // نموذج إضافة طالب جديد
    document.getElementById('addStudentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (!isAdmin) {
            alert('يجب تسجيل الدخول كمسؤول لإضافة طالب جديد');
            return;
        }
        addNewStudent();
    });
    
    // زر حفظ التغييرات في نافذة تعديل الطالب
    document.getElementById('saveEditBtn').addEventListener('click', function() {
        if (!isAdmin) {
            alert('يجب تسجيل الدخول كمسؤول لتعديل بيانات الطالب');
            return;
        }
        saveStudentChanges();
    });
    
    // البحث في قائمة الطلاب في لوحة المسؤول
    document.getElementById('adminSearchQuery').addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        filterAdminStudentsList(query);
    });
    
    // زر المزامنة
    document.getElementById('syncBtn').addEventListener('click', async function() {
        const result = await syncDataFromServer();
        if (result) {
            alert('تمت المزامنة بنجاح');
            // تحديث واجهة المستخدم
            if (document.getElementById('adminSection').style.display === 'block') {
                loadAdminStudentsList();
            }
        } else {
            alert('فشلت عملية المزامنة، تحقق من اتصالك بالإنترنت');
        }
    });
    
    // إضافة مستمع للبحث عند الضغط على Enter في حقل البحث
    document.getElementById('searchQuery').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchStudents();
        }
    });
    
    console.log("تم إعداد أحداث النقر بنجاح");
}

// البحث عن الطلاب
async function searchStudents() {
    const searchType = document.getElementById('searchType').value;
    const searchQuery = document.getElementById('searchQuery').value.trim();
    
    if (!searchQuery) {
        alert('الرجاء إدخال قيمة للبحث');
        return;
    }
    
    try {
        // محاولة البحث عبر الخادم أولاً
        if (isOnline) {
            const requestData = {
                action: 'fetch',
                search_type: searchType === 'id' ? 'id' : 'name',
                query: searchQuery
            };
            
            const response = await fetch(`${API_BASE_URL}/api/sync/data`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData),
                mode: 'cors',
                cache: 'no-cache' // منع التخزين المؤقت
            });
            
            if (response.ok) {
                const data = await response.json();
                
                if (data.status === 'success') {
                    displaySearchResults(data.data);
                    return;
                }
            }
        }
        
        // في حالة فشل البحث عبر الخادم، استخدم البحث المحلي
        performLocalSearch(searchType, searchQuery);
    } catch (error) {
        console.error("خطأ في البحث عبر الخادم:", error);
        // استخدم البحث المحلي
        performLocalSearch(searchType, searchQuery);
    }
}

// البحث المحلي
function performLocalSearch(searchType, searchQuery) {
    let results = [];
    
    if (searchType === 'id') {
        // البحث برقم الطالب
        results = studentsData.filter(student => 
            student.student_id && student.student_id.toString().includes(searchQuery)
        );
    } else {
        // البحث باسم الطالب
        results = studentsData.filter(student => 
            student.student_name && student.student_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    displaySearchResults(results);
}

// عرض نتائج البحث
function displaySearchResults(results) {
    const resultsCard = document.getElementById('resultsCard');
    const noResults = document.getElementById('noResults');
    const studentsList = document.getElementById('studentsList');
    
    resultsCard.style.display = 'block';
    studentsList.innerHTML = '';
    
    if (results.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    results.forEach((student, index) => {
        const studentDiv = document.createElement('div');
        studentDiv.className = 'card mb-2';
        studentDiv.innerHTML = `
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8">
                        <h5 class="card-title">${student.student_name || 'بدون اسم'}</h5>
                        <p class="card-text">رقم الطالب: ${student.student_id}</p>
                    </div>
                    <div class="col-md-4 text-end">
                        <button class="btn btn-primary btn-sm view-student" data-index="${index}">عرض التفاصيل</button>
                    </div>
                </div>
            </div>
        `;
        
        studentsList.appendChild(studentDiv);
        
        // إضافة حدث النقر على زر عرض التفاصيل
        studentDiv.querySelector('.view-student').addEventListener('click', function() {
            const studentIndex = studentsData.findIndex(s => s.student_id === student.student_id);
            if (studentIndex !== -1) {
                displayStudentDetails(studentsData[studentIndex]);
            }
        });
    });
}

// عرض تفاصيل الطالب
function displayStudentDetails(student) {
    const studentInfo = document.getElementById('studentInfo');
    
    document.getElementById('studentName').textContent = student.student_name || 'بدون اسم';
    document.getElementById('studentId').textContent = student.student_id;
    document.getElementById('studentClass').textContent = student.class || '';
    document.getElementById('studentNationality').textContent = student.nationality || '';
    document.getElementById('studentTotal').textContent = student.total || '';
    document.getElementById('studentPercentage').textContent = student.percentage || '';
    document.getElementById('studentRank').textContent = student.rank || '';
    
    // عرض درجات المواد
    const subjectScores = document.getElementById('subjectScores');
    subjectScores.innerHTML = '';
    
    if (student.subjects) {
        Object.entries(student.subjects).forEach(([subject, score]) => {
            const subjectDiv = document.createElement('div');
            subjectDiv.className = 'subject-score';
            subjectDiv.innerHTML = `
                <span class="subject-name">${subject}</span>
                <span class="subject-score-value">${score}</span>
            `;
            subjectScores.appendChild(subjectDiv);
        });
    }
    
    studentInfo.style.display = 'block';
}

// تحميل قائمة الطلاب في لوحة المسؤول
function loadAdminStudentsList() {
    if (!isAdmin) {
        alert('يجب تسجيل الدخول كمسؤول للوصول إلى هذه الوظيفة');
        return;
    }
    
    const adminStudentsList = document.getElementById('adminStudentsList');
    adminStudentsList.innerHTML = '';
    
    studentsData.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.student_id}</td>
            <td>${student.student_name || ''}</td>
            <td>${student.class || ''}</td>
            <td>${student.total || ''}</td>
            <td>${student.percentage || ''}</td>
            <td>
                <button class="btn btn-primary btn-sm edit-student" data-index="${index}">تعديل</button>
                <button class="btn btn-danger btn-sm delete-student" data-index="${index}">حذف</button>
            </td>
        `;
        
        adminStudentsList.appendChild(row);
        
        // إضافة أحداث النقر على أزرار التعديل والحذف
        row.querySelector('.edit-student').addEventListener('click', function() {
            if (!isAdmin) {
                alert('يجب تسجيل الدخول كمسؤول لتعديل بيانات الطالب');
                return;
            }
            openEditStudentModal(index);
        });
        
        row.querySelector('.delete-student').addEventListener('click', function() {
            if (!isAdmin) {
                alert('يجب تسجيل الدخول كمسؤول لحذف الطالب');
                return;
            }
            deleteStudent(index);
        });
    });
}

// تصفية قائمة الطلاب في لوحة المسؤول
function filterAdminStudentsList(query) {
    const rows = document.getElementById('adminStudentsList').querySelectorAll('tr');
    
    rows.forEach(row => {
        const studentId = row.cells[0].textContent.toLowerCase();
        const studentName = row.cells[1].textContent.toLowerCase();
        
        if (studentId.includes(query) || studentName.includes(query)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// فتح نافذة تعديل بيانات الطالب
function openEditStudentModal(index) {
    if (!isAdmin) {
        alert('يجب تسجيل الدخول كمسؤول لتعديل بيانات الطالب');
        return;
    }
    
    const student = studentsData[index];
    
    document.getElementById('editStudentIndex').value = index;
    document.getElementById('editStudentId').value = student.student_id;
    document.getElementById('editStudentName').value = student.student_name || '';
    document.getElementById('editStudentClass').value = student.class || '';
    document.getElementById('editStudentNationality').value = student.nationality || '';
    
    // إعداد حقول تعديل درجات المواد
    const editSubjectsInputs = document.getElementById('editSubjectsInputs');
    editSubjectsInputs.innerHTML = '';
    
    // إضافة حقول المواد المعروفة
    const subjects = ['قران كريم', 'اسلامية', 'لغة عربية', 'رياضيات', 'فيزياء', 'كيمياء', 'احياء', 'انجليزي', 'اجتماعيات'];
    
    subjects.forEach(subject => {
        const score = student.subjects && student.subjects[subject] ? student.subjects[subject] : '';
        
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';
        col.innerHTML = `
            <label class="form-label">${subject}:</label>
            <input type="number" class="form-control edit-subject" data-subject="${subject}" value="${score}" min="0" max="100">
        `;
        
        editSubjectsInputs.appendChild(col);
    });
    
    // إضافة حقول المجموع والنسبة والترتيب
    const totalCol = document.createElement('div');
    totalCol.className = 'col-md-4 mb-3';
    totalCol.innerHTML = `
        <label class="form-label">المجموع:</label>
        <input type="number" class="form-control" id="editStudentTotal" value="${student.total || ''}">
    `;
    editSubjectsInputs.appendChild(totalCol);
    
    const percentageCol = document.createElement('div');
    percentageCol.className = 'col-md-4 mb-3';
    percentageCol.innerHTML = `
        <label class="form-label">النسبة:</label>
        <input type="number" class="form-control" id="editStudentPercentage" value="${student.percentage || ''}">
    `;
    editSubjectsInputs.appendChild(percentageCol);
    
    const rankCol = document.createElement('div');
    rankCol.className = 'col-md-4 mb-3';
    rankCol.innerHTML = `
        <label class="form-label">الترتيب:</label>
        <input type="number" class="form-control" id="editStudentRank" value="${student.rank || ''}">
    `;
    editSubjectsInputs.appendChild(rankCol);
    
    // عرض النافذة المنبثقة
    const editModal = new bootstrap.Modal(document.getElementById('editStudentModal'));
    editModal.show();
}

// حفظ تغييرات بيانات الطالب
async function saveStudentChanges() {
    if (!isAdmin) {
        alert('يجب تسجيل الدخول كمسؤول لحفظ التغييرات');
        return;
    }
    
    const index = parseInt(document.getElementById('editStudentIndex').value);
    const student = studentsData[index];
    
    // تحديث بيانات الطالب
    const updatedStudent = {
        student_id: document.getElementById('editStudentId').value,
        student_name: document.getElementById('editStudentName').value,
        class: document.getElementById('editStudentClass').value,
        nationality: document.getElementById('editStudentNationality').value,
        subjects: {}
    };
    
    // تحديث درجات المواد
    document.querySelectorAll('.edit-subject').forEach(input => {
        const subject = input.dataset.subject;
        const score = input.value ? parseFloat(input.value) : '';
        
        if (score !== '') {
            updatedStudent.subjects[subject] = score;
        }
    });
    
    // تحديث المجموع والنسبة والترتيب
    const total = document.getElementById('editStudentTotal').value;
    const percentage = document.getElementById('editStudentPercentage').value;
    const rank = document.getElementById('editStudentRank').value;
    
    if (total) updatedStudent.total = parseFloat(total);
    if (percentage) updatedStudent.percentage = parseFloat(percentage);
    if (rank) updatedStudent.rank = parseFloat(rank);
    
    try {
        // محاولة تحديث البيانات على الخادم
        const result = await sendDataToServer('update', { student: updatedStudent }, 'alredfani');
        
        if (result.success) {
            // تحديث البيانات المحلية
            Object.assign(student, updatedStudent);
            
            // تحديث قائمة الطلاب في لوحة المسؤول
            loadAdminStudentsList();
            
            // إغلاق النافذة المنبثقة
            bootstrap.Modal.getInstance(document.getElementById('editStudentModal')).hide();
            
            // حفظ البيانات
            saveStudentsData();
            
            alert('تم حفظ التغييرات بنجاح');
        } else {
            // في حالة فشل التحديث على الخادم، تحديث البيانات محليًا فقط
            console.error("فشل في تحديث البيانات على الخادم:", result.error);
            
            // تحديث البيانات المحلية
            Object.assign(student, updatedStudent);
            
            // تحديث قائمة الطلاب في لوحة المسؤول
            loadAdminStudentsList();
            
            // إغلاق النافذة المنبثقة
            bootstrap.Modal.getInstance(document.getElementById('editStudentModal')).hide();
            
            // حفظ البيانات
            saveStudentsData();
            
            alert('تم حفظ التغييرات محليًا فقط. سيتم مزامنتها مع الخادم عند توفر الاتصال.');
        }
    } catch (error) {
        console.error("خطأ في حفظ التغييرات:", error);
        
        // في حالة فشل الاتصال بالخادم، تحديث البيانات محليًا فقط
        Object.assign(student, updatedStudent);
        
        // تحديث قائمة الطلاب في لوحة المسؤول
        loadAdminStudentsList();
        
        // إغلاق النافذة المنبثقة
        bootstrap.Modal.getInstance(document.getElementById('editStudentModal')).hide();
        
        // حفظ البيانات
        saveStudentsData();
        
        alert('تم حفظ التغييرات محليًا فقط. سيتم مزامنتها مع الخادم عند توفر الاتصال.');
    }
}

// حذف طالب
async function deleteStudent(index) {
    if (!isAdmin) {
        alert('يجب تسجيل الدخول كمسؤول لحذف الطالب');
        return;
    }
    
    if (confirm('هل أنت متأكد من حذف هذا الطالب؟')) {
        const student = studentsData[index];
        
        try {
            // محاولة حذف الطالب من الخادم
            const result = await sendDataToServer('delete', { student_id: student.student_id }, 'alredfani');
            
            if (result.success) {
                // حذف الطالب من البيانات المحلية
                studentsData.splice(index, 1);
                
                // تحديث قائمة الطلاب في لوحة المسؤول
                loadAdminStudentsList();
                
                // حفظ البيانات
                saveStudentsData();
                
                alert('تم حذف الطالب بنجاح');
            } else {
                // في حالة فشل الحذف من الخادم، حذف الطالب محليًا فقط
                console.error("فشل في حذف الطالب من الخادم:", result.error);
                
                // حذف الطالب من البيانات المحلية
                studentsData.splice(index, 1);
                
                // تحديث قائمة الطلاب في لوحة المسؤول
                loadAdminStudentsList();
                
                // حفظ البيانات
                saveStudentsData();
                
                alert('تم حذف الطالب محليًا فقط. سيتم مزامنة التغييرات مع الخادم عند توفر الاتصال.');
            }
        } catch (error) {
            console.error("خطأ في حذف الطالب:", error);
            
            // في حالة فشل الاتصال بالخادم، حذف الطالب محليًا فقط
            studentsData.splice(index, 1);
            
            // تحديث قائمة الطلاب في لوحة المسؤول
            loadAdminStudentsList();
            
            // حفظ البيانات
            saveStudentsData();
            
            alert('تم حذف الطالب محليًا فقط. سيتم مزامنة التغييرات مع الخادم عند توفر الاتصال.');
        }
    }
}

// إضافة طالب جديد
async function addNewStudent() {
    if (!isAdmin) {
        alert('يجب تسجيل الدخول كمسؤول لإضافة طالب جديد');
        return;
    }
    
    const newStudentId = document.getElementById('newStudentId').value;
    const newStudentName = document.getElementById('newStudentName').value;
    const newStudentClass = document.getElementById('newStudentClass').value;
    const newStudentNationality = document.getElementById('newStudentNationality').value;
    
    // التحقق من وجود رقم الطالب واسمه
    if (!newStudentId || !newStudentName) {
        alert('الرجاء إدخال رقم الطالب واسمه');
        return;
    }
    
    // التحقق من عدم تكرار رقم الطالب
    if (studentsData.some(student => student.student_id === newStudentId)) {
        alert('رقم الطالب موجود بالفعل');
        return;
    }
    
    // إنشاء كائن الطالب الجديد
    const newStudent = {
        student_id: newStudentId,
        student_name: newStudentName,
        class: newStudentClass,
        nationality: newStudentNationality,
        subjects: {}
    };
    
    // إضافة درجات المواد
    document.querySelectorAll('.new-subject').forEach(input => {
        const subject = input.dataset.subject;
        const score = input.value ? parseFloat(input.value) : '';
        
        if (score !== '') {
            newStudent.subjects[subject] = score;
        }
    });
    
    // إضافة المجموع والنسبة والترتيب
    const total = document.getElementById('newStudentTotal').value;
    const percentage = document.getElementById('newStudentPercentage').value;
    const rank = document.getElementById('newStudentRank').value;
    
    if (total) newStudent.total = parseFloat(total);
    if (percentage) newStudent.percentage = parseFloat(percentage);
    if (rank) newStudent.rank = parseFloat(rank);
    
    try {
        // محاولة إضافة الطالب إلى الخادم
        const result = await sendDataToServer('add', { student: newStudent }, 'alredfani');
        
        if (result.success) {
            // إضافة الطالب إلى البيانات المحلية
            studentsData.push(newStudent);
            
            // تحديث قائمة الطلاب في لوحة المسؤول
            loadAdminStudentsList();
            
            // إعادة تعيين نموذج إضافة الطالب
            document.getElementById('addStudentForm').reset();
            
            // حفظ البيانات
            saveStudentsData();
            
            // الانتقال إلى تبويب إدارة الطلاب
            document.getElementById('students-tab').click();
            
            alert('تم إضافة الطالب بنجاح');
        } else {
            // في حالة فشل الإضافة إلى الخادم، إضافة الطالب محليًا فقط
            console.error("فشل في إضافة الطالب إلى الخادم:", result.error);
            
            // إضافة الطالب إلى البيانات المحلية
            studentsData.push(newStudent);
            
            // تحديث قائمة الطلاب في لوحة المسؤول
            loadAdminStudentsList();
            
            // إعادة تعيين نموذج إضافة الطالب
            document.getElementById('addStudentForm').reset();
            
            // حفظ البيانات
            saveStudentsData();
            
            // الانتقال إلى تبويب إدارة الطلاب
            document.getElementById('students-tab').click();
            
            alert('تم إضافة الطالب محليًا فقط. سيتم مزامنته مع الخادم عند توفر الاتصال.');
        }
    } catch (error) {
        console.error("خطأ في إضافة الطالب:", error);
        
        // في حالة فشل الاتصال بالخادم، إضافة الطالب محليًا فقط
        studentsData.push(newStudent);
        
        // تحديث قائمة الطلاب في لوحة المسؤول
        loadAdminStudentsList();
        
        // إعادة تعيين نموذج إضافة الطالب
        document.getElementById('addStudentForm').reset();
        
        // حفظ البيانات
        saveStudentsData();
        
        // الانتقال إلى تبويب إدارة الطلاب
        document.getElementById('students-tab').click();
        
        alert('تم إضافة الطالب محليًا فقط. سيتم مزامنته مع الخادم عند توفر الاتصال.');
    }
}

// إعداد نماذج إدخال المواد
function setupSubjectInputs() {
    const subjectsInputs = document.getElementById('subjectsInputs');
    if (!subjectsInputs) return;
    
    subjectsInputs.innerHTML = '';
    
    // إضافة حقول المواد المعروفة
    const subjects = ['قران كريم', 'اسلامية', 'لغة عربية', 'رياضيات', 'فيزياء', 'كيمياء', 'احياء', 'انجليزي', 'اجتماعيات'];
    
    subjects.forEach(subject => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';
        col.innerHTML = `
            <label class="form-label">${subject}:</label>
            <input type="number" class="form-control new-subject" data-subject="${subject}" min="0" max="100">
        `;
        
        subjectsInputs.appendChild(col);
    });
    
    // إضافة حقول المجموع والنسبة والترتيب
    const totalCol = document.createElement('div');
    totalCol.className = 'col-md-4 mb-3';
    totalCol.innerHTML = `
        <label class="form-label">المجموع:</label>
        <input type="number" class="form-control" id="newStudentTotal">
    `;
    subjectsInputs.appendChild(totalCol);
    
    const percentageCol = document.createElement('div');
    percentageCol.className = 'col-md-4 mb-3';
    percentageCol.innerHTML = `
        <label class="form-label">النسبة:</label>
        <input type="number" class="form-control" id="newStudentPercentage">
    `;
    subjectsInputs.appendChild(percentageCol);
    
    const rankCol = document.createElement('div');
    rankCol.className = 'col-md-4 mb-3';
    rankCol.innerHTML = `
        <label class="form-label">الترتيب:</label>
        <input type="number" class="form-control" id="newStudentRank">
    `;
    subjectsInputs.appendChild(rankCol);
}

// حفظ بيانات الطلاب في التخزين المحلي
function saveStudentsData() {
    // حفظ البيانات في التخزين المحلي
    localStorage.setItem('studentsData', JSON.stringify(studentsData));
    
    // حفظ وقت آخر مزامنة
    if (lastSyncTime) {
        localStorage.setItem('lastSyncTime', lastSyncTime);
    }
    
    console.log('تم حفظ بيانات الطلاب في التخزين المحلي');
}
