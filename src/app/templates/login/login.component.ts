import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginUser } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  username = new FormControl()
  password = new FormControl()
  loginUser!: ILoginUser;


  constructor(
    readonly authService: AuthService,
    readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.loginUser = {
      email: this.username.value,
      senha: this.password.value
    }
    console.log(this.loginUser)
    this.authService.login(this.loginUser).subscribe( (res: boolean) => {
      console.log(res)
      if (res == true) {
        alert('Login realizado com sucesso')
        this.router.navigate(['my'])
      } else {
        alert('Usuario ou senha incorretos')
        console.error(res)
      }
    })
  }

}
