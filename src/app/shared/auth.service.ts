import { Injectable, NgZone } from '@angular/core';
import { User } from '../shared/user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) { 
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.userData = user;
        localStorage.setItem('user',JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      }else{
        localStorage.setItem('user',null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  SignIn(email,password){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password)
    .then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  SetUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`user/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData,{
      merge: true
    })
  }

  SignOut(){
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

  get isLoggedIn():boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true: false;
  }
}
