const mongoose = require("mongoose");
const Quiz = require('./tutor');
const questionSchema = new mongoose.Schema({

    // _id: mongoose.Schema.Types.ObjectId,
    quizId: { type: mongoose.Schema.Types.ObjectID, ref: "Quiz" },
    qId: {
        type: String,
        required: true
    },
    // quesType: {
    //     type: String,
    //     required: true
    // },
    question: {
        type: String,
        required: true,
    },
    alternatives: [
        {
            options: {
                type: String,
                required: true,
            },
        },
    ],
    correctAnswer: {
        type: String,
        required: true,
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model("Question", questionSchema);
