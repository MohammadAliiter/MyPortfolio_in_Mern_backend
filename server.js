const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/employee')

// MongoDB schema
const contactSchema = new mongoose.Schema({
  username: String,
  phoneNumber: String,
  email: String,
  subject: String,
  message: String,
});

const ContactModel = mongoose.model('Contact', contactSchema);

// API endpoint to handle form submissions
app.post('/api/contact', async (req, res) => {
  const {
    username,
    phoneNumber,
    email,
    subject,
    message
  } = req.body;

  try {
    // Validate the input data (add more validation if needed)
    if (!username || !phoneNumber || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save the contact form data to MongoDB
    const contactData = new ContactModel({
      username,
      phoneNumber,
      email,
      subject,
      message,
    });

    await contactData.save();

    // Respond with success message
    res.status(200).json({ message: `Thank you dear ${username}, Your message has been sent successfully!` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
