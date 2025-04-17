// Pass multiple value using querystrong

var express=require("express");
var app=express();
const PORT=5566;
app.get("/student",(req,res)=>{
    var rno=req.query.rno;
    var name=req.query.sname;
    var marks=req.query.marks;
    console.log("Data Recived from client"+rno+" "+name+" "+marks);

    res.send("Data Sent to server");
    res.end();
})
app.listen((PORT),()=>{
    console.log("Server is running on PORT"+PORT);
})

// Run program form terminal >node index.js
// then open browser and type bellow address
// http://localhost:5566/student/?rno=101&name=amit&marks=450`