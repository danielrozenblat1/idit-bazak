import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import WhoAmI from './components/me/Me';
import AboutIdit from './components/me/Me';
import ClinicManagementSyllabus from './components/sillabus/Sillabus';
import Works from './components/recommends/Works';
import TestimonialsCarousel from './components/carousel/Carousel';
import ThirdScreen from './screens/ThirdScreen';
import EligibilitySection from './components/whoFits/WhoFits';
import ForthScreen from './screens/ForthScreen';
import ByMe from './components/ByMe/ByMe';
import MyServices from './components/treatments/Treatments';
import FifthScreen from './screens/FifthScreen';
import Sixthscreen from './screens/SixthScreen';

function App() {
  
  return <>
  <FirstScreen/>
  <SecondScreen/>
 <AboutIdit/>
  <ThirdScreen/>
  <ForthScreen/>
<FifthScreen/>
<Sixthscreen/>
  <ByMe/>
  </>
}

export default App;
