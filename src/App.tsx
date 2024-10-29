import { Outlet } from 'react-router-dom'
import './App.module.css'
import classes from "./App.module.css"
import ImgCity from './assets/purpleCity.jpg'

function App() {
  

  return (
    <div className={classes.app}>
      <h1>
        <img src={ImgCity} className={classes.img}/>
        GitHub Finder
      </h1>

      <Outlet />
       
    </div>
  )
}

export default App
