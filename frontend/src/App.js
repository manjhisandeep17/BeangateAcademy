import './App.css';
import { BrowserRouter, Routes, Route, useLocation, useParams } from "react-router-dom";
import Header from './Header';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import OnlineTraining from './Pages/OnlineTraining';
import Internship from './Pages/Internship';
import DigiotalNotes from './Pages/DigiotalNotes';
import InterviewQuestion from './Pages/InterviewQuestion';
import About from './Pages/About';
import TermsOfServices from './TermsOfServices';
import PrivacyAndPolicy from './PrivacyAndPolicy';
import Java from './Pages/Java';
import Python from './Pages/Python';
import Angular from './Pages/Angular';
import Android from './Pages/Android';
import CPlusplus from './Pages/CPlusplus';
import MachineLearning from './Pages/MachineLearning';
import Mysql from './Pages/Mysql';
import Linux from './Pages/Linux';
import ReactJS from './Pages/ReactJS';
import Ethical from './Pages/Ethical';
import DigitalMarketing from './Pages/DigitalMarketing';
import DataScience from './Pages/DataScience';
import NodeJS from './Pages/NodeJS';
import Wordpress from './Pages/Wordpress';
import MearnStack from './Pages/MearnStack';
import AndroidDevelopment from './Pages/AndroidDevelopment';
import Csharp from './Pages/Csharp';
import JavaScript from './Pages/JavaScript';
import Bootstrap from './Pages/Bootstrap';
import CSSContent from './Pages/CSSContent';
import PHP from './Pages/PHP';
import Dotnet from './Pages/Dotnet';
import HTMLpage from './Pages/HTMLpage';
import Fullstack from './Pages/Fullstack';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PythonFullstack from './Pages/PythonFullstack';
import MernFullstack from './Pages/MernFullstack';
import Clasess from './Pages/Clasess';
import Profile from './Pages/Profile';
import LiveClasess from './LiveClasess';
import Payment from './Pages/Payment';



// Create the function
export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}



function App() {

  let location = window.location.href;

  if (location==="https://academy.beangates.com/Login" || location==="http://localhost:3000/Login" ) {
    
    return(
      <BrowserRouter>
      <Routes>
      <Route path="Login" element={<Login />}></Route>
      {/* <Route path="Register" element={<Register/>}></Route> */}
      </Routes>
    </BrowserRouter>
    )
  }
  else{
    return (
   
      <>
        
        
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="Courses" element={<Courses />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="OnlineTraining" element={<OnlineTraining />}></Route>
            <Route path="Internship" element={<Internship />}></Route>
            <Route path="DigitalNotes" element={<DigiotalNotes />}></Route>
            <Route path="interviewQuestion" element={<InterviewQuestion />}></Route>
            <Route path="About" element={<About />}></Route>
            <Route path="TermsOfServices" element={<TermsOfServices />}></Route>
            <Route path="PrivacyAndPolicy" element={<PrivacyAndPolicy />}></Route>
            <Route path="java" element={<Java />}></Route>
            <Route path="Python" element={<Python />}></Route>
            <Route path="Angular" element={<Angular />}></Route>
            <Route path="Android" element={<Android />}></Route>
            <Route path="CPlusplus" element={<CPlusplus />}></Route>
            <Route path="MachineLearning" element={<MachineLearning />}></Route>
            <Route path="Mysql" element={<Mysql />}></Route>
            <Route path="Linux" element={<Linux />}></Route>
            <Route path="ReactJS" element={<ReactJS />}></Route>
            <Route path="Ethical" element={<Ethical />}></Route>
            <Route path="DigitalMarketing" element={<DigitalMarketing />}></Route>
            <Route path="DataScience" element={<DataScience />}></Route>
            <Route path="NodeJS" element={<NodeJS />}></Route>
            <Route path="Wordpress" element={<Wordpress />}></Route>
            <Route path="MearnStack" element={<MearnStack />}></Route>
            <Route path="AndroidDevelopment" element={<AndroidDevelopment />}></Route>
            <Route path="Csharp" element={<Csharp />}></Route>
            <Route path="JavaScript" element={<JavaScript />}></Route>
            <Route path="Bootstrap" element={<Bootstrap />}></Route>
            <Route path="CSSContent" element={<CSSContent />}></Route>
            <Route path="PHP" element={<PHP />}></Route>
            <Route path="Dotnet" element={<Dotnet />}></Route>
            <Route path="HTMLpage" element={<HTMLpage />}></Route>
            <Route path="Fullstack" element={<Fullstack />}></Route>
            <Route path="PythonFullstack" element={<PythonFullstack/>}></Route>
            <Route path="MernFullstack" element={<MernFullstack/>}></Route>
            <Route path="Register" element={<Register/>}></Route>
            <Route path="Clasess" element={<Clasess/>}></Route>
            <Route path="Profile" element={<Profile/>}></Route>
            <Route path="LiveClasess" element={<LiveClasess/>}></Route>
            <Route path="Payment" element={<Payment/>}></Route>
      
          </Routes>
           
      
      
          <Footer/>
      
        </BrowserRouter>
            
      
      
        {AddLibrary(
            'assets/js/main.js'
            )
            }
      
          {AddLibrary(
            'assets/js/custom.js'
            )
            }
      
      
      
      </>
        );
  }

}

export default App;
