import { MailService } from '@sendgrid/mail';
import { EmailOptions } from '../packages/email-service/src/interfaces/email.interfaces';

export class SendGridProvider {
  constructor(private apiKey: string) {
    MailService.setApiKey(apiKey);
  }

  async sendMail(options: EmailOptions): Promise<void> {
    const mailOptions = {
      to: options.to,
      from: options.from || 'default@example.com',
      subject: options.subject,
      html: options.html,
    };

    try {
      await MailService.send(mailOptions);
    } catch (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }
  }
}
