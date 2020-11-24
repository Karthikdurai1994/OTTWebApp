import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/auth";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  login(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return firebase.default.auth().signInWithEmailAndPassword(email, password);
  }

  signUp(email: string, password: string): Promise<any> {
    return firebase.default
      .auth()
      .createUserWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return firebase.default.auth().signOut();
  }
}
