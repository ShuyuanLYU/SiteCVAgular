import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Mail } from '../model/app.mail';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {

  mailForm: FormGroup;
  private EMAIL_REGEXP = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';
  ERROR_MAIL = 'Votre addresse mail n\'est pas correct, veuillez vous le corriger.';
  ERROR_OBJET = 'Votre objet n\'est pas correct, veuillez vous le corriger.';
  ERROR_MESSAGE = 'Votre contenu de mail n\'est pas correct, veuillez vous le corriger. (Le numbre de caractère devrait entre 10 et 1000)';


  text = '';
  error = '';
  isSend = false;


  constructor(private fb: FormBuilder, private mailService: MailService) {
    this.mailForm = fb.group({
      mail: ['', [Validators.required, Validators.minLength(5), Validators.pattern(this.EMAIL_REGEXP)]],
      objet: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if (this.mailForm.valid) {
      console.log('this.mailForm.valid');
      this.error = '';
      this.mailService.sendMail(this.mailForm.value)
      .subscribe(
        ret => {
          console.log('111111111111');
          this.isSend = true;
        }, err => {
          console.log('2222222222222');
          alert('Ops ! Votre message n\'est pas résussit à envoyer, ressyez plus tard s\'il vous plaît ! Merci !');
          console.log(err);
        }
      );

    }else {
      if (!this.mailForm.get('mail').valid){
        this.error = this.ERROR_MAIL;
      } else if (!this.mailForm.get('objet').valid){
        this.error = this.ERROR_OBJET;
      }else {
        this.error = this.ERROR_MESSAGE;
      }
    }
  }


}
