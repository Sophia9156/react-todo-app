import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoApp from './routes/TodoApp';
import Login from './routes/Login';

function App({authService, database}) {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login authService={authService} />} />
        <Route path='/todoapp' element={<TodoApp authService={authService} database={database} />} />
      </Routes>
    </Router>
  );
}

export default App;
