import { signOut } from "firebase/auth";
import { useAuthState, useSignInWithGithub } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

export function useAuth() {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  
  async function handleClick() {
    if ( user ) {
      await signOut(auth);
    } else {
      await signInWithGithub();
    }
  }

  return { loading, error, handleClick, user };
}