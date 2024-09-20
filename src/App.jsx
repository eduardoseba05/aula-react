App
import React from "react";
import style from "./App.module.css";
import Logo from "../src/logo.png"

const App = () => {

  return (
    <>
      <div className = {style.container}>
          <div className={style.imgWrapper}>
              <img src={Logo} alt="logo"/>
          </div>

          <div className={style.linksNavbar}>
            <a href="">FRUTAS</a>
            <hr />
            <a href="">VERDURAS</a>
            <hr />
            <a href="">LEGUMES</a>
            <hr />
            <a href="">CONTATO</a>
          </div>
      </div>
    </>
  )

}


export default App;