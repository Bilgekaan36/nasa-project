const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});


// Compare this snippet from server/src/models/planets.mongo.js:
module.exports = mongoose.model("Planet", planetSchema);