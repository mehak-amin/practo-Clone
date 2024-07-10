import Home from './Pages/Home/Home';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
// import Navbar from "./Navbar"
import FindDoctor from './Pages/FindDoctors/FindDoctor';
import Surgeries from './Pages/Surgeries/Surgeries';
import Medicines from './Pages/Medicines/Medicines';




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
       {/* <Navbar /> */}
      <Routes>
     <Route path='/' element={<Home />}/>
        <Route path='/findDoctors' element={<FindDoctor />}/>
        <Route path='/surgeries' element={<Surgeries />}/>
        <Route path='/medicines' element={<Medicines />}/>
       
         
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;