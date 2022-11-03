// Libraries
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

import { Router } from '@angular/router';
import { VentaService } from '../services/VentaService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ventaService: VentaService,
    private router: Router,
    private toastr: ToastrService) {
}

    // Form controller
    loginForm = new FormGroup({
      username: new FormControl(''), // user name 
      password: new FormControl(''), // password
  });


  ngOnInit(): void {
  }

      /**
       * loginForm submit function
       */
       loginFormSubmit() {
        let submitPayload = {
            ...this.loginForm.value
        }
        this.ventaService.loginUser(submitPayload).subscribe((response) => {
            if(response?.accessToken){
                localStorage.setItem('token',response?.accessToken);
                this.router.navigate(['/dashboard']);
                this.toastr.success('Success!', 'User logged in');
            }     
        },
       error=>this.toastr.error('Error!', 'Invalid login')        
        )
    }

}
