import { Injectable, inject } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, UserCredential, User } from "@angular/fire/auth";
import { from, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class AuthService{
  firebaseAuth = inject(Auth);

  register(
    name: string,
    email: string,
    tel: string,
    adresse: string,
    password: string
  ): Observable<void> {

    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password,
    ).then((response)=>
    updateProfile(response.user, {displayName: name}),
  );

  return from(promise);
  }

  // Méthode de connexion
  login(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, email, password));
  }

  getCurrentUser(): Observable<User | null> {
    return new Observable((subscriber) => {
      const unsubscribe = this.firebaseAuth.onAuthStateChanged(subscriber);
      return unsubscribe;
    });
  }

  

}
