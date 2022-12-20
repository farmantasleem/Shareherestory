import { Hide, Show } from '@chakra-ui/react';
import { useEffect } from 'react';

import Navbar from './Components/Navbar/Navbar';
import Navbarsmall from './Components/Navbar/Navbarsmall';
import Home from './Pages/Home';
import AllRoutes from './Routes/AllRoutes';
import {useDispatch,useSelector} from "react-redux"

import { Authenticated, GetCommonData, GetStory } from './redux/actions';
import Footer from './Components/Footer/Footer';
function App() {
  const token=localStorage.getItem("JWT_TOKEN");
  const dispatch=useDispatch()
  useEffect(()=>{
      if(token){
        dispatch(Authenticated())
      }
  },[])
  return (
    // eslint-disable-next-line 

    <div className="App">
      <Hide below='md'>
      <Navbar/>
      </Hide>
      <Show below='md'>
    <Navbarsmall/>
      </Show>
      <AllRoutes/>
    <Footer/>
    </div>
   // eslint-disable-next-line 

  );
}

export default App;
