// Example request parameters
var express = require('express');
var app = express();
const PORT = 5678;

// ✅ Fixed syntax error in the route definition (missing comma in app.get parameters)
app.get("/", (req, res) => {
    res.send("Welcome This is main Page");
    // No need for res.end() after res.send()
});

// ✅ Fixed incorrect escape character "\" in route path
app.get("/student/:rno/:sname/:marks", (req, res) => {
    console.log("Roll No = " + req.params.rno);
    console.log("Student Name = " + req.params.sname);
    console.log("Marks = " + req.params.marks);

    res.send("Data Submitted");
    // No need for res.end() here either
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});

// Run program form terminal 
// node index3.js
// then open browser and type bellow address
// http://localhost:5678/student/101/amit/450

