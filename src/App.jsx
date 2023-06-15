import './App.css'
import Footer from './common/footer/Footer'
import Header from './components/header/Header'
import Navbar from './common/navbar/Navbar'
import Rating from './components/rating/Rating'
import CardList from './components/Card/CardList'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <CardList />
      <Rating />
      <Footer />
    </>
  )
}

export default App
