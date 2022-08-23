import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "./../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7bc2784ed966a0",
    pass: "f3178813d61d58"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'João Moura <joaovictors.mouraa@gmail.com>',
      subject, 
      html: body
    })
  }
}
