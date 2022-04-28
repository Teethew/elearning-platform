import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IPostUser, IUser } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public postUser!: IPostUser;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]);
  username = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]);
  checkPassword = new FormControl('', [Validators.required, this.passwordMatches]);


  constructor(readonly authService: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.password.value !== this.checkPassword.value) {
      alert('Senhas não conferem');
      return
    }

    this.postUser = {
      nome: this.username.value,
      email: this.email.value,
      senha: this.password.value,
      ehadmin: false
    }

    console.log(this.postUser)
    this.authService.createUser(this.postUser).subscribe( (res: Observable<any>) => {
      console.log(res)
    })
  }

  passwordMatches(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.password.value == this.checkPassword.value ? { different: { value: control.value } } : null;
    };
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Esse campo é obrigatório';
    }

    return this.email.hasError('email') ? 'Insira um email válido' : '';
  }

  getUsernameErrorMessage() {
    if (this.username.hasError('required')) {
      return 'Esse campo é obrigatório';
    }

    return 'Limite de 100 caracteres';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Esse campo é obrigatório';
    }

    if (this.password.hasError('minlength')) {
      return 'Senha deve conter ao menos 6 dígitos';
    }

    return this.password.hasError('maxlength') ? 'Limite de 100 caracteres' : '';
  }

  getCheckPasswordErrorMessage() {
    if (this.checkPassword.hasError('required')) {
      return 'Esse campo é obrigatório';
    }

    return this.checkPassword.hasError('different') ? 'As senhas devem ser iguais' : '';
  }

}
