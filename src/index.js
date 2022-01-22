const express = require('express');
const jwt = require("jsonwebtoken");
const cors = require('cors');
const connectDB = require('./db/conn.js');

const mongoose = require('mongoose');

// const Question = require('./models/question');
const Tutor = require('./models/tutor');


const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = express.Router();
app.use(router);


// router.post('/tutorRole', (req, res, next) => {

//     // await Quiz.findById(req.body.quizId);
//     console.log("add ques");
//     console.log(req.body);
//     new Tutor({
//         // _id: new mongoose.Types.ObjectId(),
//         quizId: req.body.quizId,
//         qId: req.body.qId,
//         question: req.body.question,
//         alternatives: req.body.alternatives,
//         correctAnswer: req.body.correctAnswer,
        
//     }).save()
//         .then((result) => {
//             res.status(201).json({
//                 message: "Profile Created",
//                 QuesData: result,
//             });
//         })
//         .catch((err) => {
//             res.status(400).json({
//                 message: "some error occurred",
//                 err: err,
//             });
//         });
//     // next();
// });

// Get All Questions of particular Quiz
// router.get('/allquestion/:quizId', async (req, res, next) => {

//     await Quiz.findById({ _id: req.params.quizId })
//         .then(async (quiz_Dt) => {
//             console.log(quiz_Dt);
//             if (!quiz_Dt) {
//                 res.json('Quiz Doesnot Exists');
//             }
//             else {
//                 await Question.find({ quizId: mongoose.Types.ObjectId(req.params.quizId) })
//                     //  .populate("quizId")
//                     .then((_questions) => {
//                         console.log(_questions);
//                         if (!_questions) {
//                             res.json({ msg: "Quiz Doesnot have Any Questions" });
//                         }
//                         else {
//                             res.status(200).json({ Questions: _questions });
//                         }
//                     }).catch((errdor) => {
//                         res.status(400).json({ errordorMsg: errdor });
//                     })
//             }
//         }).catch((err) => {
//             res.status(400).json(err)
//         })
// });

// router.patch('/update/:questionId', async (req, res, next) => {

//     const updatedProps = req.body;
//     await Question.updateOne(
//         { _id: req.params.questionId },
//         { $set: updatedProps } // please pass updated data to set
//     )
//         .exec()
//         .then((result) => {
//             res.status(200).json({
//                 message: 'Question Updated Successfully',
//                 result
//             })
//         })
//         .catch((err) => {
//             res.status(200).json({
//                 errMsg: err,
//                 msg: "Something went wrong"
//             })
//         })
// })

// router.delete('/delete/:questionId', async (req, res, next) => {

//     await Question.deleteOne({ _id: req.params.questionId })
//         .exec()
//         .then((result) => {
//             res.status(200).json({
//                 message: "Deleted",
//             });
//         })
//         .catch((err) => {
//             res.status(400).json({
//                 message: "Couldn't Delete ",
//                 errMsg: err
//             });
//         });
// });


router.post('/createTutor', async (req, res, next) => {

    console.log(req.body);
    const _tutor = new Tutor({

        _id: new mongoose.Types.ObjectId(),
        tutorName: req.body.name,
        tutorDesc: req.body.Desc,
        // adminId: req.user.userId,
        // scheduledFor: req.body.scheduledFor,
        Country: req.body.Country,
        TeachStyle: req.body.teachStyle,
        TeachLevel: req.body.teachLevel,
        SpokenLanguage: req.body.spokenLanguage,
        Specialization: req.body.specialization,
        // quizCode: shortid.generate(),
        // quizRestart: 0,
        
    })
    _tutor.save().then((result) => {
        res.status(200).json({
            result: result,
            message: "Profile Created"
        });
    }).catch((err) => {
        res.status(400).json({
            message: "some error occurred",
            err: err,
        });
    });
});

// //Get all Quizzes 
// router.get('/getQuizzes', async (req, res, next) => {

//     // all quizzes created by admin
//     // await Quiz.find({adminId:req.....})

//     await Quiz.find({})
//         .then((quiz_res) => {
//             res.status(200).json({
//                 result: quiz_res,
//                 msg: "quiz return"
//             })
//         }).catch((err) => {
//             res.status(400).json({
//                 msg: "Some errror occured",
//                 error: err
//             });
//         })
// });


// //Get particular Quiz Data

// router.get("/:quizId", async (req, res, next) => {
//     await Quiz.findById(req.params.quizId)
//         // .populate("adminId")
//         .exec()
//         .then((result) => {
//             res.status(200).json({
//                 result,
//             });
//         })
//         .catch((err) => {
//             res.status(400).json({
//                 message: "some error occurred",
//             });
//         });
// });


// //delete all ques also
// router.delete('/deletequiz/:quizid', async (req, res, next) => {

//     await Quiz.findById(req.params.quizid)
//         .then(async () => {
//             await Question.deleteMany({ quizId: req.params.quizid }) // delete all questios first and then delete quiz
//                 .then(async (result1) => {
//                     await Quiz.deleteOne({ _id: req.params.quizid })
//                         .then((result2) => {
//                             res.status(200).json({
//                                 message: "Succesfully Deleted"
//                             })
//                         }).catch((error) => {
//                             res.status(400).json({
//                                 msg: "some error occured",
//                                 error: error
//                             })
//                         })
//                 }).catch((err) => {
//                     res.status(400).json({
//                         msg: "some error occured",
//                         error: err
//                     })
//                 })
//         }).catch((err) => {
//             res.status(400).json({
//                 msg: "some error occured",
//                 error: err
//             })
//         });
// });


router.get('/', (req, res, next) => {
    res.status(200).send('ePeople');
})

app.listen(PORT, () => {
    console.log(`Listening , ${PORT}`);
    connectDB();
})


// {
//     "quizName":"Zapone Web Dev Hiring",
//     "quizDesc":"Hello World",
//     "quizDate": "2018-10-11T22:26:12.111Z",
//     "quizStartTime":"2.00 AM",
//     "quizEndTime":"4.00 AM",
// }

