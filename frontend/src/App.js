import { Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import Navbar from './components/Navbar';

function App() {

  const isUserSignedIn=!!localStorage.getItem('token');
  const username=localStorage.getItem('username');
 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        {isUserSignedIn && <Route path={`/account/:username`} element={<Account />} />}

        {/* {isUserSignedIn && <Route path={`/account/${username}`} element={<Account/>}/>} */}
        
      </Routes>
    </div>
  );
}

export default App;
