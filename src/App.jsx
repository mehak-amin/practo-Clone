import Home from './Pages/Home/Home';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar"
import FindDoctor from './Pages/FindDoctors/FindDoctor';



function App() {
  return (
    <div className="App">
      
     
      {/* <SearchBox/>

      <Card/>
      <AfterCard/>
      <SecondCard/>
      <AfterCard2/>
      <ThirdCard/>
      <FourthPart /> 
      <FifthPart/>
      <SixthPart/> */}
       <Navbar />
      <Routes>
     <Route path='/' element={<Home />}/>
        <Route path='/findDoctors' element={<FindDoctor />}/>
         
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;