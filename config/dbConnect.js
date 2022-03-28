const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect(config.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = dbConnect;
