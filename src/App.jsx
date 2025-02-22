
import './App.css'
import Navbar from './Navbar'

function App() {
  let cardinfo = {
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-lJxr27_ZCz9BR1EipNsY6hrxJz_aBQOqIQ&s",
    firstName: "Angelina",
    lastName: "jolei"
  }

  
  return (
    <>
    <Navbar/>
    <div className="card">
      <img src={cardinfo.image} alt="" />
      <h1>{cardinfo.firstName}</h1>
      <h4>{cardinfo.lastName}</h4>
    </div>
    </>
  )
}

export default App
