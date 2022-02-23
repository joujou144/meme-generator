import React from "react"

export default function Header() {
  return (
    <header>
      <div className="container">
        <img src="../images/troll-face.png" alt="troll face logo" className="header-logo"/>
        <h2 className="header-title">Meme Generator</h2>   
        <h4 className="header-text">React Course - Project 4</h4>
      </div>
    </header>
  )
}