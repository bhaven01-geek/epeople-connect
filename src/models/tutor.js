const mongoose = require('mongoose');

const TutorSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    tutorName: {
        type: String,
        required: true,
    },
    tutorDesc: {
        type: String,
    },
    Country: {
        type: String,
    },
    TeachStyle: {
        type: String,
        
    },
    TeachLevel: {
        type: String,
    },
    SpokenLanguage: {
        type: String,
    },
    Specialization: {
        type: Object,
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },

    // adminId:{
    //     type:mongoose.Schema.Types.ObjectId, ref:"Admin"
    // },
    // usersParticipated: [
	// 	{
	// 		userId: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
	// 		marks: { type: Number },
	// 		responses: [],
	// 		timeEnded: { type: Number },
	// 		timeStarted: { type: Number }
	// 	},
	// ],
	// usersEnrolled: [
	// 	{
	// 		userId: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
	// 	},
	// ],
    
});

module.exports = mongoose.model("tutor", TutorSchema);

// {
//     "qId" : "1",
//     "question":"What is HTML ?",
//     "alternatives":[
//         {
//             "options":"Markup"
//         },
//         {
//             "options":"Object-oriented"
//         },
//         {
//             "options":"Script"
//         },{

//             "options":"Verbal"
//         }
//     ],
//     "correctAnswer":"Markup"
// }