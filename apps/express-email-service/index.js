const express = require('express');
const bodyParser = require('body-parser');
const { EmailService } = require('@email/service');
const { getEmailConfig } = require('./email.config'); // Import the configuration file

const app = express();
const port = 8080;

// Middleware
app.use(bodyParser.json());

// Simple Logger Class
class SimpleLogger {
  log(message) {
    console.log(message);
  }

  error(message) {
    console.error(message);
  }

  warn(message) {
    console.warn(message);
  }

  debug(message) {
    console.debug(message);
  }
}

// Initialize the email service with your configuration and the simple logger
const emailService = new EmailService(
  getEmailConfig(), // Use the configuration from the file
  new SimpleLogger(),
);

// Route to send a single email
app.post('/send-email', async (req, res) => {
  const emailOptions = req.body;

  try {
    await emailService.sendEmail(emailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(`Failed to send email: ${error.message}`);
    res.status(500).send(`Failed to send email: ${error.message}`);
  }
});

// Route to send bulk emails
app.post('/send-bulk-email', async (req, res) => {
  const { to, ...emailOptions } = req.body;

  try {
    if (!Array.isArray(to) || to.length === 0) {
      throw new Error('Invalid or empty recipient list for bulk email.');
    }

    // Create options for each recipient
    const bulkOptions = to.map((email) => ({
      ...emailOptions,
      to: email,
    }));

    // Send all emails concurrently
    await Promise.all(bulkOptions.map((options) => emailService.sendEmail(options)));
    res.status(200).send('Bulk emails sent successfully');
  } catch (error) {
    console.error(`Failed to send bulk emails: ${error.message}`);
    res.status(500).send(`Failed to send bulk emails: ${error.message}`);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
