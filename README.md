NestJS Email Service

This project provides an email service using NestJS, designed to handle both individual and bulk email requests. It integrates with external email services and allows configuration through environment variables.

Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Usage](#usage)
   - [Endpoints](#endpoints)
   - [Request Body](#request-body)
7. [Testing](#testing)
8. [Troubleshooting](#troubleshooting)
9. [Contributing](#contributing)
10. [License](#license)

Project Overview

This NestJS application provides endpoints to send emails using a configurable email service. It supports sending both single and bulk emails. 
The email service is designed to be flexible and can be adapted to various email providers such as Nodemailer, Mailgun, and Postmark.

Features

- Single Email Sending: Send individual emails with customizable options.
- Bulk Email Sending: Send emails to multiple recipients with a single request.
- Configurable: Use environment variables to configure the email service.
- Logging: Includes logging for debugging and error reporting.

Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Version 14 or higher.
- NestJS CLI: Install the NestJS CLI globally using npm:
  npm install -g @nestjs/cli

- Email Service: Access to an email service provider and necessary API keys.

## Installation

1. Clone the Repository:
   
   git clone https://github.com/wondwosen-bewketu/Service.git
   
2. Navigate to the Project Directory**:
 
   cd Service


3. Install Dependencies**:

   npm install

4. Set Up Environment Variables**: Create a `.env` file in the root directory and add your email service configuration:
   ```env
   EMAIL_PROVIDER=nodemailer
   SMTP_HOST=mail.example.com
   SMTP_PORT=587
   SMTP_USER=user@example.com
   SMTP_PASS=yourpassword
   FROM_EMAIL=from@example.com
   MAILGUN_API_KEY=your-mailgun-api-key
   MAILGUN_DOMAIN=your-mailgun-domain
   POSTMARK_API_KEY=your-postmark-api-key
   ```

Configuration

Configuration is handled through the `email.config.ts` file and environment variables. The `EmailService` is initialized with the settings from these files.
Example `email.config.ts`

```typescript
import { ConfigService } from '@nestjs/config';

export class EmailConfig {
  static getEmailConfig(configService: ConfigService) {
    return {
      provider: configService.get<string>('EMAIL_PROVIDER'),
      smtpHost: configService.get<string>('SMTP_HOST'),
      smtpPort: configService.get<number>('SMTP_PORT'),
      smtpUser: configService.get<string>('SMTP_USER'),
      smtpPass: configService.get<string>('SMTP_PASS'),
      fromEmail: configService.get<string>('FROM_EMAIL'),
      mailgunApiKey: configService.get<string>('MAILGUN_API_KEY'),
      mailgunDomain: configService.get<string>('MAILGUN_DOMAIN'),
      postmarkApiKey: configService.get<string>('POSTMARK_API_KEY'),
    };
  }
}
```

Usage

Endpoints

Send Email

- URL: `/emails/send-email`
- Method: POST
- Description: Sends a single email.
- Request Body:
  ```json
  {
    "to": "recipient@example.com",
    "subject": "Your Subject Here",
    "context": { "key1": "value1" },
    "text": "Plain text content",
    "customTemplatePath": "path/to/template.hbs"
  }
  ```

Send Bulk Email

- URL: `/emails/send-bulk-email`
- Method: POST
- Description: Sends emails to multiple recipients.
- Request Body:
  ```json
  {
    "to": ["recipient1@example.com", "recipient2@example.com"],
    "subject": "Your Subject Here",
    "context": { "key1": "value1" },
    "text": "Plain text content",
    "customTemplatePath": "path/to/template.hbs"
  }
  ```
Starting the Server

To start the server, use the following command:

npm run start


