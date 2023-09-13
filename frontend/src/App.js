import './App.css';

import Nav from './component/navbar/Navbar';

import Body from './component/home/Home';

import ADD from './component/addArtical/AddArtical';

import Login from './component/login/Login';

import Signup from './component/signup/Signup';

import { Routes, Route,BrowserRouter} from 'react-router-dom';

import { useState} from 'react';

import PrivateComponent from "./component/private/PrivateComp";

import Searched from './component/search/Search'


function App() {

  const [data, setData] = useState([]);

  //gating search element from nav fetching
  const getData = (data , key ) => {
    setData(data);
  }


  return (
    <div className="App">
        <BrowserRouter>
            <Nav onchange={getData} />
         <Routes>
             <Route element={<PrivateComponent/>}>
                 <Route path='/search' element={<Searched data={data} />} />
                 <Route path='/' element={ <Body />} />
                 <Route path='/add' element={<ADD />} />
             </Route>
             <Route path='/sign-up' element={<Signup />} />
             <Route path='/log-in' element={ <Login />} />
         </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
