import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import { useEffect, useState } from 'react';

export default function TodoApp({authService, database}) {
  const locationState = useLocation().state;
  const [userId, setUserId] = useState(locationState && locationState.id);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setUserName(locationState && locationState.userName);
  },[locationState]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if(user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    })
  },[authService, userId, navigate]);

  return (
    <>
      <Header authService={authService} userId={userId} userName={userName} database={database} />
      <Main userId={userId} database={database} />
      <Footer />
    </>
  )
}