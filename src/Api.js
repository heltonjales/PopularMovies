import firebase from './FirebaseConnection';

class PopularMovies {
    logout(){
        firebase.auth().signOut();
    }

    addAuthListener(callback){
        firebase.auth().onAuthStateChanged(callback);
    }

    login(email, senha){
      return firebase.auth().signInWithEmailAndPassword(email, senha);

    }

    registerUser(email, senha){
      return  firebase.auth().createUserWithEmailAndPassword(email, senha);    
    }

    salveInfo(table, id){
      return    firebase.database().ref(table).child(id).set({});
    }
}

export default new PopularMovies();