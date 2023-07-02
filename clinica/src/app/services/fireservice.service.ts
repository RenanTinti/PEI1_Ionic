import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreCollection, QueryFn } from "@angular/fire/compat/firestore";
import { CookieService } from 'src/app/services/cookie.service';

@Injectable({
  providedIn: "root",
})
export class FireserviceService {
  public dados: any;
  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth,
    private cookieService: CookieService,

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
  simpleQuery(email: any): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      this.firestore.collection('usuarios', ref => ref.where('email', '==', email))
        .get()
        .subscribe(querySnapshot => {
          const documents: any = [];
          querySnapshot.forEach(doc => {
            documents.push(doc.data());
          });
          resolve(documents);
          this.dados = [
            documents[0].name,
            documents[0].estado,
            documents[0].uid,
          ];
          this.cookieService.setCookie("dados", this.dados, 7)
        }, error => {
          reject(error);
        });
    });
  }
}