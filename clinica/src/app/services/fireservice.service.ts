import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: "root",
})
export class FireserviceService {
  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) { }
  loginWithEmail(data: any) {
    return this.auth.signInWithEmailAndPassword(data.email, data.senha);
  }

  signup(data: any) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.senha);
  }

  saveDetails(data: any) {
    return this.firestore.collection("usuarios").doc(data.uid).set(data);
  }
  getDetails(data: any) {
    return this.firestore.collection("usuarios").doc(data.uid).valueChanges();
  }
}