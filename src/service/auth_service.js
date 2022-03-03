import { auth, googleProvider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

class AuthService {
  async login(providerName) {
    const authProvider = this.getProvider(providerName);
    const result = await signInWithPopup(auth, authProvider);
    const user = result.user;
    return user;
  }

  logout() {
    auth.signOut();
  }

  onAuthChange(onUserChanged) {
    auth.onAuthStateChanged(user => {
      onUserChanged(user);
    })
  }
  
  getProvider(providerName) {
    switch(providerName) {
      case 'Google': return googleProvider;
      default: throw new Error(`not supported provider: ${providerName}`)
    }
  }
}

export default AuthService;