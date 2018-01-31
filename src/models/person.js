const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: {
        type: String,
        // required: [true, 'Name is required']
    },
    team: {
        type: String,
        // required: [true, 'Team is required']
    },
    daysOff: {
        type: Number,
        default: 0,
        required: false
    },
});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;