var mongoose = require('mongoose');


var genreSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }

});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

module.exports.getGenres = (callback, limit) => {
    Genre.find(callback).limit(limit);

}

module.exports.addGenre = (genre, callback) => {
    Genre.create(genre, callback);

}

module.exports.updateGenre = (id, genre, options, callback) => {
    var query = { _id: id };
    var update = {
        name: genre.name
    };

    Genre.findOneAndUpdate(query, update, options, callback);


}

module.exports.deleteGenre = (id, callback) => {
    var query = { _id: id };
    Genre.remove(query, callback);

}