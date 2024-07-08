
import './App.css'; 
import Card from './card';
import AfterCard from './AfterCard';
import SecondCard from './SecondCard';
import SearchBox from './SearchBox';
import AfterCard2 from './AfterCard2';
import ThirdCard from './ThirdCard';
import FourthPart from './FourthPart'; 
import FifthPart from './FifthPart';
import SixthPart from './SixthPart';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Navbar"


function App() {
  return (
    <div className="App">
      <Navbar />
     
      <SearchBox/>

      <Card/>
      <AfterCard/>
      <SecondCard/>
      <AfterCard2/>
      <ThirdCard/>
      <FourthPart /> 
      <FifthPart/>
      <SixthPart/>
      <Footer/> 
    </div>
  );
}

export default App;
