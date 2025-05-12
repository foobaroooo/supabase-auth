import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div>
      <h1>Supabase Auth</h1>
      <Signup />
    </div>
  )
}
export default App
