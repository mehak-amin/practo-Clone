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

import 'bootstrap/dist/css/bootstrap.min.css';




function Home() {
  return (
    <div className="App">
     
     
      <SearchBox/>

      <Card/>
      <AfterCard/>
      <SecondCard/>
      <AfterCard2/>
      <ThirdCard/>
      <FourthPart /> 
      <FifthPart/>
      <SixthPart/>
      
    </div>
  );
}

export default Home;