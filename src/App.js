import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/myNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <MyFooter />
    </div>
  )
}

export default App
