import './App.css'; 
import Card from './card';

import SecondCard from './SecondCard';


import ThirdCard from './ThirdCard';
import FourthPart from './FourthPart'; 
import FifthPart from './FifthPart';
import SixthPart from './SixthPart';
import Navbar from './Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';




function Home() {
  return (
    <div className="App">
      <Navbar/>
     
     
    

      <Card/>
    
      <SecondCard/>
    
      <ThirdCard/>
      <FourthPart /> 
      <FifthPart/>
      <SixthPart/>
      
    </div>
  );
}

export default Home;