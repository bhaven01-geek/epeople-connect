const CreateQuiz = async (req, res, next) => {

    console.log(req.body);
    const _quiz = new Quiz({

        _id: new mongoose.Types.ObjectId(),
        quizName: req.body.quizName,
        quizDesc: req.body.quizDescription,
        // adminId: req.user.userId,
        // scheduledFor: req.body.scheduledFor,
        quizDate: req.body.quizDate,
        quizStartTime: req.body.quizStartTime,
        quizEndTime: req.body.quizEndTime,
        // quizCode: shortid.generate(),
        // quizRestart: 0,
    })
    _quiz.save().then((result) => {
        res.status(200).json({
            result: result,
            message: "Created Quiz Succesfully"
        });
    }).catch((err) => {
        res.status(400).json({
            message: "some error occurred",
            err: err,
        });
    });
}


const GetQuizzes = async ( req,res,next) => {


}