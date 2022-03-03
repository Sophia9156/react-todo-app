import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoApp from './routes/TodoApp';
import Login from './routes/Login';

function App({authService}) {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login authService={authService} />} />
        <Route path='/todoapp' element={<TodoApp authService={authService} />} />
      </Routes>
    </Router>
  );
}

export default App;
