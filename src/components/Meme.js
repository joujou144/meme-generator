import React from "react"


export default function Meme() {  
  
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ihzfe.jpg"
  })
  
  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  })

  function getMemeImage() {    
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: url
      }
    })
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  
  return (
    <main>
      <div className="container form-container">

        <input 
        text="text"
        placeholder="top text"
        className="form-input"
        name="topText"
        value={meme.topText}
        onChange={handleChange}
        />

        <input 
        text="text"
        placeholder="bottom text"
        className="form-input"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
        />

        <button onClick={getMemeImage}
        className="form-btn">Get a new meme image 🖼</button>         
        
      </div>

      <div className="meme">
          <img src={meme.randomImage} className="meme-image" alt="random meme"/>
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>  
      
    </main>
  )
}