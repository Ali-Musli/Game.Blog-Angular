import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRouthing } from './user-routhing.module';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserRouthing,
    FormsModule
    
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class UserModule { }
