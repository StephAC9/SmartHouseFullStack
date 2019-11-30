const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new Schema({
    address: String,
    imageURL: String,
    ownerId: String,
});

module.exports = mongoose.model('Houses', houseSchema);