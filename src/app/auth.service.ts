import { Injectable, inject } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, UserCredential, User } from "@angular/fire/auth";
import { Firestore, doc, setDoc } from "@angular/fire/firestore";
import { from, Observable, switchMap, map, catchError } from "rxjs";
import { UserInterface } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseAuth = inject(Auth);
  private firestore = inject(Firestore);

  register(user: UserInterface): Observable<void> {
    return from(createUserWithEmailAndPassword(this.firebaseAuth, user.email, user.password)).pipe(
      switchMap((userCredential) =>
        from(updateProfile(userCredential.user, { displayName: user.name })).pipe(
          map(() => userCredential.user)
        )
      ),
      switchMap((firebaseUser) => this.saveUserToFirestore(firebaseUser.uid, user)),
      catchError((error) => {
        console.error('Error in registration process:', error);
        throw error;
      })
    );
  }

  private saveUserToFirestore(uid: string, user: UserInterface): Observable<void> {
    const userDoc = doc(this.firestore, `users/${uid}`);
    const userData = {
      name: user.name,
      email: user.email,
      tel: user.tel,
      adresse: user.adresse,
    };
    return from(setDoc(userDoc, userData)).pipe(
      catchError((error) => {
        console.error('Error saving user to Firestore:', error);
        throw error;
      })
    );
  }

  login(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, email, password)).pipe(
      catchError((error) => {
        console.error('Error during login:', error);
        throw error;
      })
    );
  }

  getCurrentUser(): Observable<User | null> {
    return new Observable((subscriber) => {
      const unsubscribe = this.firebaseAuth.onAuthStateChanged(
        (user) => subscriber.next(user),
        (error) => {
          console.error('Error in auth state change:', error);
          subscriber.error(error);
        }
      );
      return unsubscribe;
    });
  }
}
