// تحويل بيانات الطلاب من JSON إلى ملف JavaScript
const studentsData = [
  {
    "student_id": "رقم الطالب",
    "student_name": "الاسم",
    "class": "الصف",
    "subjects": {
      "مادة_1": "قران كريم",
      "مادة_2": "اسلامية",
      "مادة_3": "لغة عربية",
      "مادة_4": "رياضيات",
      "مادة_5": "فيزياء",
      "مادة_6": "كيمياء",
      "مادة_7": "احياء",
      "مادة_8": "انجليزي"
    },
    "total": "اجتماعيات",
    "percentage": "المجموع",
    "rank": "النسبة",
    "nationality": "قائمة الجنسيات",
    "profession": "قائمة المهن"
  },
  {
    "student_id": "1056",
    "student_name": "جيفارا حلمي محسن صالح",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_1": 100,
      "مادة_2": 100,
      "مادة_3": 100,
      "مادة_4": 100,
      "مادة_5": 100,
      "مادة_6": 100,
      "مادة_7": 100,
      "مادة_8": 100
    },
    "total": 100,
    "percentage": 900,
    "rank": 1,
    "nationality": "سعودي",
    "profession": "مندوب مبيعات"
  },
  {
    "student_id": "1087",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {},
    "percentage": 0,
    "rank": 0,
    "nationality": "مصري",
    "profession": "مدير قسم"
  },
  {
    "student_id": "1101",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0,
    "nationality": "باكستاني",
    "profession": "معقب"
  },
  {
    "student_id": "1120",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0,
    "nationality": "هندي",
    "profession": "سائق"
  },
  {
    "student_id": "1124",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0,
    "nationality": "فلبيني",
    "profession": "موظف استقبال"
  },
  {
    "student_id": "1128",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0,
    "nationality": "يمنى",
    "profession": "فني صيانه"
  },
  {
    "student_id": "1130",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0,
    "nationality": "سوداني",
    "profession": "حارس"
  },
  {
    "student_id": "1142",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0,
    "nationality": "بنغالي",
    "profession": "المدير العام"
  },
  {
    "student_id": "1161",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0,
    "nationality": "مغربي",
    "profession": "نائب المدير العام"
  },
  {
    "student_id": "1175",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0,
    "profession": "مساعد المدير العام"
  },
  {
    "student_id": "1202",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0,
    "profession": "سكرتير"
  },
  {
    "student_id": "1209",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1210",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1219",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1257",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1324",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1328",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1331",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1349",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1350",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1360",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1377",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1383",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1400",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1461",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1468",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1489",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1524",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1544",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1595",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1598",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1613",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1617",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1644",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1669",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1670",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1719",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1722",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1730",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1731",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1737",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1744",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1808",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1816",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1861",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1863",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1870",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1913",
    "student_name": "",
    "class": "اول ثانوي",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1936",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1937",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1971",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "1995",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2001",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2035",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2054",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2058",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2074",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2083",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2093",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2120",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2138",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2140",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2143",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2163",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2170",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2180",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2191",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2194",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2195",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2202",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2238",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2302",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2326",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2421",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2466",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2471",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2477",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2488",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2493",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2499",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2514",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2529",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2544",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2552",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2565",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2571",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2604",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2666",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2675",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2682",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2693",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2722",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2746",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2747",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2774",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2785",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2846",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2852",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2853",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2883",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2885",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2921",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2924",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2944",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2949",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2976",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2989",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "2990",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3007",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3077",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3102",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3109",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3116",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3127",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3171",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3194",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3195",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3197",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3216",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3226",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3228",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3237",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3250",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3272",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3295",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3345",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3355",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3363",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3372",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3387",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3396",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3420",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3452",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3469",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3524",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3584",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3585",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3604",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3640",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3685",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3691",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3698",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3722",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3740",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3749",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3752",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3756",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3763",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3769",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3780",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3789",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3803",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3812",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3814",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3818",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3829",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3838",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3843",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3865",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3874",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3893",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3896",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3899",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3916",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3923",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3929",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3951",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3983",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "3986",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4007",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4041",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4066",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4067",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4096",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4107",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4174",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4221",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4223",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4267",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4269",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4270",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4332",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4349",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4396",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4416",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4423",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4438",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4446",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4454",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4484",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4498",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4506",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4512",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4518",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4546",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4618",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4637",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4668",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4703",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4748",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4758",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4779",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4796",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4801",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4808",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4841",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4848",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4863",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4911",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4916",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4926",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4927",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4928",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4934",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4952",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4961",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "4982",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5007",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5027",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5034",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5037",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5060",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5101",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5118",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5127",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5140",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5161",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5166",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5182",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5233",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5267",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5299",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5327",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5328",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5330",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5333",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5339",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5367",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5369",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5435",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5436",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5536",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5538",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5547",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5551",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5563",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5579",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5590",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5618",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5619",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5625",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5629",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5653",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5664",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5668",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5683",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5739",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5749",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5777",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5783",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5791",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5822",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5843",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5882",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5895",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5906",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5910",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5920",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5938",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5948",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5965",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5966",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5989",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "5998",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6001",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6011",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6020",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6045",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6053",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6061",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6107",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6119",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6122",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6135",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6159",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6175",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6188",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6202",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6205",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6243",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6277",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6327",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6345",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6358",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6380",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6392",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6435",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6436",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6451",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6464",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6528",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6570",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6583",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6605",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6607",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6616",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6619",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6632",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6648",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6658",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6661",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6696",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6706",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6723",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6749",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6755",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6765",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6768",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6801",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6817",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6819",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6845",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6853",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6876",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6881",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6901",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6924",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6956",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "6959",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7012",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7061",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7067",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7091",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7099",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7106",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7111",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7114",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7142",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7154",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7190",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7196",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7217",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7256",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7262",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7306",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7340",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7342",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7349",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7364",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7365",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7386",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7399",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7411",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7431",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7448",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7475",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7510",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7536",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7549",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7550",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7565",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7601",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7606",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7616",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7623",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7626",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7647",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7650",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7660",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7678",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7720",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7722",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7751",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7769",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7773",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7798",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7801",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7802",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7828",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7912",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7941",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7944",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "7961",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8012",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8042",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8066",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8075",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8079",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8095",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8096",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8121",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8142",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8163",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8166",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8171",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8216",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8243",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8245",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8258",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8270",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8282",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8296",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8368",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8371",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8372",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8390",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8405",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8411",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8419",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8429",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8547",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8568",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8577",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8584",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8595",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8599",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8618",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8620",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8625",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8638",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8684",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8692",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8693",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8717",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8718",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8738",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8750",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8758",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8760",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8766",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8769",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8803",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8831",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8868",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8879",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8880",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8886",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8904",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8909",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8914",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8950",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8956",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8969",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "8989",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9012",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9016",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9019",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9027",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9042",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9047",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9066",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9096",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9136",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9172",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9214",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9263",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9266",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9272",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9291",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9297",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9307",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9326",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9329",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9333",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9358",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9381",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9395",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9415",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9437",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9488",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9494",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9535",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9594",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9598",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9601",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9602",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9664",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9672",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9695",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9706",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9707",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9718",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9720",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9757",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9768",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9769",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9775",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9798",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9826",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9839",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9891",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  },
  {
    "student_id": "9904",
    "student_name": "",
    "class": "",
    "subjects": {
      "مادة_7": 0
    },
    "percentage": 0,
    "rank": 0
  }
];