import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreCollection, QueryFn } from "@angular/fire/compat/firestore";

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
  simpleQuery(email: any) {
    this.firestore.collection('usuarios', ref => ref.where('email', '==', email))
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id, ' => ', doc.data());
        });
      });
  }
}