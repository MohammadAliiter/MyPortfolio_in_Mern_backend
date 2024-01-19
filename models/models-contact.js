const mongoose = require('mongoose');


// MongoDB schema
const contactSchema = new mongoose.Schema({
    username: String,
    phoneNumber: String,
    email: String,
    subject: String,
    message: String,
  });
  
  const ContactModel = mongoose.model('Contact', contactSchema);

  module.exports = ContactModel;