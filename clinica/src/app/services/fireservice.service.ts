import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreCollection, QueryFn } from "@angular/fire/compat/firestore";
import { CookieService } from 'src/app/services/cookie.service';
import { CapacitorCookies } from '@capacitor/core';

@Injectable({
  providedIn: "root",
})
export class FireserviceService {
  public dados: any;
  public cookie: any;
  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth,
    private cookieService: CookieService,

  ) { }
  loginWithEmail(data: any) {
    return this.auth['signInWithEmailAndPassword'](data.email, data.senha);
  }

  signup(data: any) {
    return this.auth['createUserWithEmailAndPassword'](data.email, data.senha);
  }

  saveDetails(data: any) {
    return this.firestore.collection("usuarios").doc(data.uid).set(data);
  }

  getDetails(data: any) {
    return this.firestore.collection("usuarios").doc(data.uid).valueChanges();
  }

  simpleQuery(email: any): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      this.firestore.collection('usuarios', ref => ref.where('email', '==', email))
        .get()
        .subscribe(querySnapshot => {
          const documents: any[] = [];
          querySnapshot.forEach((doc: any) => {
            documents.push(doc.data());
          });
          resolve(documents);
          this.dados = [
            documents[0].name,
            documents[0].estado,
            documents[0].uid,
          ]

          this.cookieService.deleteCookie("dados");
          this.cookieService.setCookie("dados", this.dados, 7);
        }, error => {
          reject(error);
        });
    });
  }

  saveScheduling(examType: string, date: string, unidade: string, user_uid: string) {
    const data = {
      examType: examType,
      date: date,
      unidade: unidade,
      user_uid: user_uid,
    };
    this.firestore.collection("schedulings").add(data)
      .then(() => {
        console.log("Scheduling saved successfully");
      })
      .catch((error) => {
        console.error("Error saving scheduling: ", error);
      });
  }

  getSchedulings(user_uid: string): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      this.firestore.collection('schedulings', ref => ref.where('user_uid', '==', user_uid))
        .get()
        .subscribe(querySnapshot => {
          const schedulings: any[] = [];
          querySnapshot.forEach(doc => {
            schedulings.push(doc.data());
          });
          resolve(schedulings);
          console.log(schedulings)
        }, error => {
          reject(error);
        });
    });
  }
}