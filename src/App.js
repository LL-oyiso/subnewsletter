import logo from './logo.svg';
import './App.css';
import {NextUIProvider} from "@nextui-org/react";

import Navigation from './components/Navigation';
// import Maincontent from './components/Maincontent';


function App() {
  return (
   <>
<NextUIProvider>
  <Navigation />
 
  </NextUIProvider>  
 

   </>
  );
}

export default App;
