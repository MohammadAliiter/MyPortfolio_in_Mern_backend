const ContactModel = require("../models/models-contact");

const data = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const {
      username,
      phoneNumber,
      email,
      subject,
      message
    } = req.body;

    // Validate the input data
    if (!username || !phoneNumber || !email || !subject || !message) {
      console.log("Validation Error: All fields are required");
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
    console.log(`Success: Thank you, ${username}! Your message has been sent successfully!`);
    res.status(200).json({ message: `Thank you, ${username}! Your message has been sent successfully!` });
  } catch (error) {
    console.error("Error:", error);

    // Handle specific Mongoose validation error
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      console.log("Validation Error:", errors);
      return res.status(400).json({ error: errors });
    }

    console.log("Internal Server Error");
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { data };
