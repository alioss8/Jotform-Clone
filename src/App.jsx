import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHomePage from './components/Navbar'
import MainBanner from './components/MainBanner'
import AiAgent from './components/Ai_Agent'
import Rating from './components/Rating'
import FeaturesSection from './components/FeaturesSection'
import SignupSectionCard from './components/SignupSectionCard'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
      <NavbarHomePage></NavbarHomePage>
      <MainBanner></MainBanner>
      <AiAgent></AiAgent>
      <Rating></Rating>
      <FeaturesSection></FeaturesSection>
      <SignupSectionCard></SignupSectionCard>
      <Footer></Footer>
    </>
  )
}

export default App
