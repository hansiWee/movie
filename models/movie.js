const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    id: Number,
    Year: Number,
    Genre: [String],
    Title: String,
    Director: String,
    Cast: [String],
    Duration: Number,
    Country: String,
    synopsis: String,
});

module.exports = mongoose.model('Movie', MovieSchema);
