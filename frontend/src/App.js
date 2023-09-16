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
import Read from "./component/Read/Read";



function App() {

  const [data, setData] = useState([]);
  const [Id,setId]=useState("")

  //gating search element from nav fetching
  const getData = (data ) => {
    setData(data);
  }
let getId=(id)=>{
    setId(id)
    // console.log(id)
}

  return (
    <div className="App">
        <BrowserRouter>

         <Routes>
             <Route element={<PrivateComponent/>}>
                 <Route path='/search' element={<><Nav onkeydown={getData} /><Searched data={data} oncall={getId} /></> } />
                 <Route path='/' element={<><Nav onkeydown={getData} /><Body onclick={getId} /></> } />
                 <Route path='/add' element={<><Nav onkeydown={getData} /><ADD /></> } />
                 <Route path='/read' element={<><Nav onkeydown={getData} /><Read read={Id} /></> } />
             </Route>
             <Route path='/sign-up' element={<Signup />} />
             <Route path='/log-in' element={ <Login />} />
         </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
