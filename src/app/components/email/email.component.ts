import { Component, OnInit } from '@angular/core';
import { EmailService, EmailAccount } from './email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  emailAccount: EmailAccount;
  message: string;

  constructor(private emailService: EmailService) { 
    this.emailAccount = new EmailAccount();
  }

  ngOnInit() {
    this.message = 'Please input your email address, and press "Confirm" to finish checkout'
  }

  sendEmail(){
    this.emailService.sendEmail(this.emailAccount);
  }

  backToHome() {
    this.emailService.backToHome();
  }
}
