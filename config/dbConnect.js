const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://username:password1@cluster0.if89k.mongodb.net/Inventory?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = dbConnect;
