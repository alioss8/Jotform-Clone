import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHomePage from './components/Navbar'
import MainBanner from './components/MainBanner'
import AiAgent from './components/Ai_Agent'
import RatingStar from './components/RatingStar'
function App() {
  

  return (
    <>
      <NavbarHomePage></NavbarHomePage>
      <MainBanner></MainBanner>
      <AiAgent></AiAgent>
      <RatingStar></RatingStar>
    </>
  )
}

export default App
