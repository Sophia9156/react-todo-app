import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({authService}) {
  const navigate = useNavigate();
  const goToMain = (user) => {
    navigate(
      '/todoapp',
      {state: {id: user.uid, userName: user.displayName}}
    );
  }

  const onLogin = (e) => {
    authService
    .login(e.currentTarget.textContent)
    .then(user => {
      goToMain(user);
    })
  }

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMain(user.uid);
    })
  })

  return (
    <section className="login">
      <h2>Login</h2>
      <ul>
        <li>
          <button onClick={onLogin}>Google</button>
        </li>
      </ul>
    </section>
  )
}