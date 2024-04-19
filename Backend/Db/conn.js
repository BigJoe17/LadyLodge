const mongoose = require("mongoose");

const ConnectTodb = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Connection to MongoDB is successful");



    } catch (err) {
        console.log(err);
        console.log("Connection to MongoDB is unsuccessful");
        process.exit(1);
    }
}
modyule.exports = ConnectTodb;