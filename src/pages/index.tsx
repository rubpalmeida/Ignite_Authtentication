import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import styles from '../../styles/Home.module.scss';
import { withSSRGuest } from '../utils/withSSRGuest';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <main className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit" >Entrar</button>
        </form>
      </div>
    </main>

  )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {}
  }
});
