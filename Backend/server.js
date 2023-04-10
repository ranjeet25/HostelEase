const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

// ******* MONGOOSED || MONGODB ***********
// ******* DO NOT CHANGE MONGOURL ***********

const mongourl =
  "mongodb+srv://ranjeet:admin@cluster0.qnesp8x.mongodb.net/HostelEase?retryWrites=true&w=majority";

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error");
  });

app.get("/", (req, res) => {
  res.send("hello");
});

// ******* REGISTER ROUTE ***********
const userSchema = new mongoose.Schema({
  Firstname: String,
  Lastname: String,
  role: String,
  email: String,
  adhaar: String,
  username: String,
  password: String,
  address: String,
});

const User = mongoose.model("registrations", userSchema);

app.post("/register", (req, res) => {
  User.create({
    Firstname: req.body.firstname,
    Lastname: req.body.lastname,
    role: req.body.role,
    email: req.body.email,
    adhaar: req.body.hostelId,
    username: req.body.username,
    password: req.body.pass,
    address: req.body.address,
  })
    .then((data) => {
      console.log(data);
      res.send("ok");
    })
    .catch((err) => console.log(err));

  // console.log("sucess");
});

// ******* LOGIN ROUTE ***********

var studentEmail;
app.post("/login", (req, res) => {
  var email = req.body.email;
  var password = req.body.pass;

  // console.log(email + password);

  User.findOne({ email: email })
    .then((data) => {
      // console.log(data);
      if (data == null) {
        if (email == "admin@gmail.com" && password == "Nilesh@123") {
          res.sendStatus(201);
        } else if (email == "secretary@gmail.com" && password == "Nilesh@20") {
          res.sendStatus(202);
        } else res.sendStatus(300);
      } else if (data.password === password) {
        studentEmail = data.email;
        // console.log(data.email);
        res.send("okk");
      } else {
        res.sendStatus(300);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/usrData", (Req, res) => {
  User.find({ email: studentEmail })
    .then((data) => {
      // console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
});

// *******  ROOM DATA ROUTE ***********

const roomData = new mongoose.Schema({
  room_number: String,
  status: String,
});

const hostelRoomData = mongoose.model("hostelRoomData", roomData);

app.post("/roomData", (req, res) => {
  const room_num = req.body.roomNum;
  const status = req.body.roomStatus;

  hostelRoomData
    .create({
      room_number: room_num,
      status: status,
    })
    .catch((err) => console.log(err));
});

app.get("/roomData", (Req, res) => {
  hostelRoomData
    .find()
    .then((data) => {
      var roomData = data;
      // console.log(roomData);
      res.send(roomData);
    })
    .catch((err) => console.log(err));
});

// *******  ROOM DETAILS ENDS ***********

// ******* ADDStudent ROUTE ***********

const addStudentSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  room_type: String,
  email: String,
  hostelId: String,
  collegeId: String,
  year_of_study: String,
  room_number: String,
});

const StudentDetails = mongoose.model("studentsData", addStudentSchema);

app.post("/addStudent", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const room_type = req.body.room_type;
  const email = req.body.email;
  const hostelId = req.body.hostelId;
  const collegeId = req.body.collegeId;
  const year_of_study = req.body.year_of_study;
  const room_number = req.body.room_number;

  hostelRoomData
    .findOneAndUpdate(
      { room_number: room_number },
      { status: "occupied" },
      { new: true }
    )
    .catch((err) => console.log(err));

  StudentDetails.create({
    firstname: firstname,
    lastname: lastname,
    room_type: room_type,
    email: email,
    hostelId: hostelId,
    collegeId: collegeId,
    year_of_study: year_of_study,
    room_number: room_number,
  }).catch((err) => console.log(err));

  // console.log("sucess");
});

app.get("/studentData", (Req, res) => {
  StudentDetails.find()
    .then((data) => {
      studentData = data.reverse();

      res.send(studentData);
    })
    .catch((err) => console.log(err));
});

app.delete("/studentData", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  // console.log(hostelId);
  StudentDetails.deleteMany({ email: email })
    .then((data) => {
      // res.send("Student Removed");
      // console.log(data);
    })
    .catch((err) => console.log(err));
});

// app.get("/login", (req, res) => {
//   console.log(userdata);
//   res.send(userdata);
// });

app.get("/studentDataByEmail", (Req, res) => {
  StudentDetails.findOne({ email: studentEmail })
    .then((data) => {
      studentData = data;
      // console.log(studentData);
      res.send(studentData);
    })
    .catch((err) => console.log(err));
});

app.put("/login", (req, res) => {
  var email = req.body.email;
  var oldpassword = req.body.oldPass;
  var newpassword = req.body.newPass;

  User.findOneAndUpdate(
    { email: email },
    { password: newpassword },
    { new: true }
  ).catch((err) => console.log(err));
});

// ******* Grievance ROUTE ***********

const grievanceSchema = new mongoose.Schema({
  email: String,
  department: String,
  complaint: String,
});

const grievance = mongoose.model("grievance", grievanceSchema);

app.post("/addGrievance", (req, res) => {
  var email = req.body.email;
  var oldpassword = req.body.oldPass;
  var newpassword = req.body.newPass;
  // console.log(oldpassword);

  grievance
    .create({
      email: email,
      department: oldpassword,
      complaint: newpassword,
    })
    .then((res) => {
      // console.log(res);
    })
    .catch((err) => console.log(err));
});

app.get("/grievanceData", (req, res) => {
  grievance
    .find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log("server started");
});
