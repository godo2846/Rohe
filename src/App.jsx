import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"



function App() {
  const [cartCount, setCartCount] = useState(5)

  return (
    <>
      <NavBar cartCount={cartCount}/>
      <ItemListContainer Greetings="Bienbenido a Rohe Technology"/>
    </>
  )
}

export default App
