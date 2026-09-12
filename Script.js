const studentList = document.getElementById("studentList");
const student = [
    "Anna", //0
    "Bryan", //1
    "Catterine", //2
    "Delan", //3
];
const students = [
    { name: "Anna", goal: "Go to working abroad", level: "Start from 0", },
    { name: "Bryan", goal: "Success own business", level: "Start from 0", },
    { name: "Catterine", goal: "Being Professional Developer", level: "Start from 0", },
    { name: "Delan", goal: "Building Business", level: "Start from 0", },
];


students.forEach(function (student) {
     console.log(`student name is ${student}`);
     // สร้างกล่อง <article></article> ขึ้นมา
     const studentCard = document.createElement("article");

     // ใส่คลาส <article class ="student-card"></article>
     studentCard.classList.add("student-card");
     // studentCard.classList.add("student-card-extra");

     // ใส่ h2 ใน article
     // <article class ="student-card">
     //     <h2>student Anna</h2>
     // </article>

     studentCard.innerHTML = ` 
        <h2>${student.name}</h2> 
        <p><strong>เป้าหมาย:</strong> ${student.goal}</p> 
        <p><strong>ระดับ:</strong> ${student.level}</p> 
        <span class="badge">Bootcamp Student</span> 
        `;
     // ใส่ <article></article> ใน studentList <div id="studentList" class="student-list">
     studentList.appendChild(studentCard);
});