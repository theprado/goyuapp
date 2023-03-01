import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import  { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';

function App() {
  const session = useSession();  // tokens, when session exists we have a user
  const supabase = useSupabaseClient(); // talk to supabase!
  const { isLoading } = useSessionContext();

  if(isLoading) {
    return <></>
  }

async function googleSignIn() {
  const  { error } =  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      scopes: 'https://www.googleapis.com/auth/calendar'
    }
  });
    if(error) {
      alert("Erro ao conectar o provedor do Google com a Supabase");
      console.log(error);
    }
}

async function signOut() {
  await supabase.auth.signOut();
}

console.log(session);

  return (
    <div className="App">
      <div style={{width: "400px", margin: "30px auto"}}>
        {session ?
        <>
          <h2>Oi {session.user.email}</h2>
          <button onClick={() => signOut()}>Sair</button>
        </>
        :
        <>
          <button onClick={() => googleSignIn()}>Entrar com Google</button>
        </>
        }
      </div>
    </div>
  );
}

export default App;