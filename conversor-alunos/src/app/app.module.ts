import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Page401Component } from './page401/page401.component';
import { CadastroComponent } from './cadastro/cadastro.component';
// import { initializeApp } from "firebase/app";

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Page401Component,
    CadastroComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC4NRyLyjGm4uxlo9-AFxB9ayCD9WNmMp8",
      authDomain: "conversor-henrique.firebaseapp.com",
      projectId: "conversor-henrique",
      storageBucket: "conversor-henrique.appspot.com",
      messagingSenderId: "840262055799",
      appId: "1:840262055799:web:8cb2fc4f760b49bde99372"
    })

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
