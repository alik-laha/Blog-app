import './App.css';
import Nav from './component/home/Nav';
import Body from './component/home/Body';
import ADD from './component/home/AddArtical';
// import Login from './component/login/Login';
// import Signup from './component/signup/Signup';
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/add' element={<ADD />} />
      </Routes>
      {/* <Signup /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
