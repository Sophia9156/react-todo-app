import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function Login({authService}) {
  const navigate = useNavigate();
  const goToMain = (userId) =>{
    navigate({
      pathname: '/todoapp',
      state: {id: userId}
    });
  }

  const onLogin = (e) => {
    authService
    .login(e.currentTarget.textContent)
    .then(user => {
      goToMain(user.uid);
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