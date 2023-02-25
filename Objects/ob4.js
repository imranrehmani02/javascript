// Updating, creating and deleteing object property

console.log(" ********* Updating or creating property *********** ");

let student = {
    name: "Aman",
    class: "11th",
    section: "D"
}

console.log("student:- ",student);

// Add property
student.school = "IPS";
console.log("student:- ",student);


// Update property
student.section = "B";
console.log("student:- ",student);


// Delete property
delete student.section
console.log("student:- ",student);