import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user: Observable<firebase.User>;

  authError:any;
  
  constructor( public firebaseAuth: AngularFireAuth) {
  
  // this.user = firebaseAuth.authState;
  }
   
  loginWithEmail(email:string, senha:string){
  
  let thisService = this;
  
  thisService.authError = null;
  
  
  
  this.firebaseAuth.signInWithEmailAndPassword(email, senha).then(
  
  value => {
  console.log("usuario logado")
  location.href = "http://localhost:4200/home"
  localStorage.setItem(email, "usuário")
  
  }
  
  ).catch( (error)=>{
  
  console.log(error.menssage);
  alert("usuario inexistente")
  localStorage.setItem(senha, "usuario")
  thisService.authError = error;
    }
  )}
}
