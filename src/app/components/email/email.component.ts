import { Component, OnInit } from '@angular/core';
import { EmailService, EmailAccount } from './email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  emailAccount: EmailAccount;

  constructor(private emailService: EmailService) { 
    this.emailAccount = new EmailAccount();
  }

  ngOnInit() {
    
  }

  sendEmail(){
    this.emailService.sendEmail(this.emailAccount);
  }
}
