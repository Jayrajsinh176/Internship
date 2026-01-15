
let students = JSON.parse(localStorage.getItem("students"));

if (!students) {
    students = [
        { rollno: 45, name: "Rahul", marks: 85 },
        { rollno: 5, name: "Anita", marks: 35 },
        { rollno: 35, name: "Darshil", marks: 50 },
        { rollno: 25, name: "Ruchit", marks: 40 },
        { rollno: 15, name: "Dhruv", marks: 11 }
    ];
    localStorage.setItem("students", JSON.stringify(students));
}
let count = 1;


function checkResult(marks) { 
    if (marks > 100 || marks < 0) {
        return "Invalid Marks";
    }
    else if (marks <= 40) {
        return "Fail";
    }
    else {
        return "Pass";
    }
}

function loadStudents() {
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    students.forEach(student => {
        let res = checkResult(student.marks);
        showStudent(student.rollno, student.name, student.marks, res);
    });
}

loadStudents(); 


function showStudent(rollno, name, marks, result) {
    let tableBody = document.getElementById("tableBody");
    let row = document.createElement("tr");
    let resultColor = result === "Pass" ? "text-success fw-bold" : "text-danger fw-bold";

    row.innerHTML = `
        <td>${rollno}</td>
        <td>${name}</td>
        <td>${marks}</td>
        <td class="${resultColor}">${result}</td>    
    `;

    tableBody.appendChild(row);
    count++;
}

function addStudent() {
    let rollno = document.getElementById("rollno").value;
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    if (rollno === "" || name === "" || marks === "" ) {
        alert("Please fill all the fields correctly.");
        return;
    }
    students.push({ rollno, name, marks });
    localStorage.setItem("students", JSON.stringify(students));
    loadStudents();

    document.getElementById("rollno").value = "";
    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";

   

}









