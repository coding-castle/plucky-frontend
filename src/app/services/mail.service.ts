import { Injectable } from "@angular/core";
import { AngularFireFunctions } from "@angular/fire/functions";
import { AngularFirestore } from "@angular/fire/firestore";
import { nodemailer } from "nodemailer";
import { environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})

export class MailService {

  constructor(
    private afs: AngularFirestore,
    private aff: AngularFireFunctions,
    private transporter,
    private notificationAccountHost,
    private notificationAccountEmail,
    private notificationAccountPass
  ) {
    this.notificationAccountHost = environment.smtp.host;
    this.notificationAccountEmail = environment.smtp.email;
    this.notificationAccountPass = environment.smtp.pass;

    this.transporter = nodemailer.createTransport({
      host: notificationAccountHost,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: notificationAccountEmail,
        pass: notificationAccountPass
      }
    });
  }

  /**
   * Validate the user object and send a notification with the email address of the user
   *
   * @param fromMail - E-Mail Address from system
   * @param user - User object to with email address
   * @param subject - Subject for notification email
   * @param text - Text in notification email
   * @param template - Template of notification email
   */
  async sendNotificationMailToUser(fromMail, user, subject, text, template){

    if(user)  {
      if (user.subscribedToMailingList)  {
        return this.sendNotificationMail(fromMail, user.email, subject, text, template)
      } else {
        return null; // User has not subscribed
      }
    } else {
      return null; // No user object
    }

  };

  /**
   * Send email notification to user
   *
   * @param fromMail - E-Mail Address from system
   * @param toMail - E-Mail Address of user
   * @param subject - Subject for notification email
   * @param text - Text in notification email
   * @param template - Template of notification email
   */
  async sendNotificationMail(fromMail, toMail, subject, text, template) {
    await this.transporter.sendMail({
      from: fromMail, to: toMail, subject: subject, text: text, html: template
    });
    return true;
  }
}
