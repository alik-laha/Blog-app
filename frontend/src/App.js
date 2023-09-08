import './App.css';
import Nav from './component/navbar/Navbar';
import Body from './component/home/Home';
import ADD from './component/addArtical/AddArtical';
// import Login from './component/login/Login';
// import Signup from './component/signup/Signup';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
function App() {

  const [data, setData] = useState('')

  //gating serch element from nav fatching
  const getdata = (data) => {

    setData(data)

  }

  return (
    <div className="App">
      <Nav onchange={getdata} />
      <Routes>
        <Route path='/' element={<Body data={data} />} />
        <Route path='/add' element={<ADD />} />
      </Routes>
      {/* <Signup /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
