// email.config.js

require('dotenv').config();

const getEmailConfig = () => ({
  provider: process.env.EMAIL_PROVIDER,
  smtpHost: process.env.SMTP_HOST,
  smtpPort: parseInt(process.env.SMTP_PORT, 10),
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS,
  fromEmail: process.env.FROM_EMAIL,
  mailgunApiKey: process.env.MAILGUN_API_KEY,
  mailgunDomain: process.env.MAILGUN_DOMAIN,
  postmarkApiKey: process.env.POSTMARK_API_KEY,
});

module.exports = { getEmailConfig };
