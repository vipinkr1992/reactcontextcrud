import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserProvider } from './context/UserContext';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
   <UserProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<UserList/>} />
    <Route path="/add" element={<AddUser/>} />
    <Route path="/edit/:id" element={<EditUser/>} />
    </Routes>
    </BrowserRouter>
   </UserProvider>
  );
}

export default App;
