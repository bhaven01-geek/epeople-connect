const mongoose = require('mongoose');
require('dotenv').config();
const connect = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("Connection Succesfull"))
        .catch((err) => console.log(err));
}

module.exports = connect;







// 6PqrnEhNPkM3yfF
