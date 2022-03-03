import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default function TodoApp({authService}) {
  const navigateState = useLocation().state;
  console.log(navigateState);

  return (
    <>
      <Header authService={authService} />
      <Main />
      <Footer />
    </>
  )
}