// ملف JavaScript للتعامل مع وظائف الصفحة
let isAdmin = false;
const adminPassword = "alredfani";

// تحميل بيانات الطلاب عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log(`تم تحميل بيانات ${studentsData.length} طالب`);
    
    // إزالة الصف الأول الذي يحتوي على أسماء الأعمدة
    studentsData = studentsData.filter(student => student.student_id !== 'رقم الطالب');
    
    // إعداد نماذج إدخال المواد
    setupSubjectInputs();
    
    // إعداد أحداث النقر على الأزرار
    setupEventListeners();
});

// إعداد أحداث النقر على الأزرار
function setupEventListeners() {
    // زر البحث
    document.getElementById('searchBtn').addEventListener('click', searchStudents);
    
    // زر تسجيل دخول المسؤول
    document.getElementById('adminLoginBtn').addEventListener('click', function() {
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
    });
    
    // زر تسجيل الدخول في النافذة المنبثقة
    document.getElementById('loginBtn').addEventListener('click', function() {
        const password = document.getElementById('password').value;
        if (password === adminPassword) {
            isAdmin = true;
            document.getElementById('adminSection').style.display = 'block';
            bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
            loadAdminStudentsList();
            alert('تم تسجيل الدخول بنجاح');
        } else {
            alert('كلمة المرور غير صحيحة');
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
}

// البحث عن الطلاب
function searchStudents() {
    const searchType = document.getElementById('searchType').value;
    const searchQuery = document.getElementById('searchQuery').value.trim();
    
    if (!searchQuery) {
        alert('الرجاء إدخال قيمة للبحث');
        return;
    }
    
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
function saveStudentChanges() {
    if (!isAdmin) {
        alert('يجب تسجيل الدخول كمسؤول لحفظ التغييرات');
        return;
    }
    
    const index = parseInt(document.getElementById('editStudentIndex').value);
    const student = studentsData[index];
    
    // تحديث بيانات الطالب
    student.student_id = document.getElementById('editStudentId').value;
    student.student_name = document.getElementById('editStudentName').value;
    student.class = document.getElementById('editStudentClass').value;
    student.nationality = document.getElementById('editStudentNationality').value;
    
    // تحديث درجات المواد
    if (!student.subjects) {
        student.subjects = {};
    }
    
    document.querySelectorAll('.edit-subject').forEach(input => {
        const subject = input.dataset.subject;
        const score = input.value ? parseFloat(input.value) : '';
        
        if (score !== '') {
            student.subjects[subject] = score;
        } else {
            delete student.subjects[subject];
        }
    });
    
    // تحديث المجموع والنسبة والترتيب
    const total = document.getElementById('editStudentTotal').value;
    const percentage = document.getElementById('editStudentPercentage').value;
    const rank = document.getElementById('editStudentRank').value;
    
    student.total = total ? parseFloat(total) : '';
    student.percentage = percentage ? parseFloat(percentage) : '';
    student.rank = rank ? parseFloat(rank) : '';
    
    // تحديث قائمة الطلاب في لوحة المسؤول
    loadAdminStudentsList();
    
    // إغلاق النافذة المنبثقة
    bootstrap.Modal.getInstance(document.getElementById('editStudentModal')).hide();
    
    // حفظ البيانات
    saveStudentsData();
    
    alert('تم حفظ التغييرات بنجاح');
}

// حذف طالب
function deleteStudent(index) {
    if (!isAdmin) {
        alert('يجب تسجيل الدخول كمسؤول لحذف الطالب');
        return;
    }
    
    if (confirm('هل أنت متأكد من حذف هذا الطالب؟')) {
        studentsData.splice(index, 1);
        loadAdminStudentsList();
        saveStudentsData();
        alert('تم حذف الطالب بنجاح');
    }
}

// إضافة طالب جديد
function addNewStudent() {
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
    
    // إضافة الطالب إلى قائمة الطلاب
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
}

// إعداد نماذج إدخال المواد
function setupSubjectInputs() {
    const subjectsInputs = document.getElementById('subjectsInputs');
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

// حفظ بيانات الطلاب
function saveStudentsData() {
    if (!isAdmin) {
        alert('يجب تسجيل الدخول كمسؤول لحفظ البيانات');
        return;
    }
    
    // في بيئة حقيقية، هنا سيتم إرسال البيانات إلى الخادم
    // في هذا المثال، سنقوم بتخزين البيانات في localStorage
    localStorage.setItem('studentsData', JSON.stringify(studentsData));
    console.log('تم حفظ بيانات الطلاب');
}
