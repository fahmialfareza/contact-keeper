const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    default: "personal",
  },
  date: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model("contact", ContactSchema);
