import "./App.css"
import ButtonComponent from "./components/ButtonComponent"
import ImageComponent from "./components/ImageComponent"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent label="Clicca Qui!" />
        <hr />
        <ImageComponent
          imageSrc="https://cdn.pixabay.com/photo/2019/12/16/10/49/building-4699096_640.jpg"
          altText="Night City"
        />
        <hr />
        <ImageComponent
          imageSrc="https://cdn.pixabay.com/photo/2023/11/30/07/11/river-8420934_1280.jpg"
          altText="Water Bridge"
        />
        <hr />
        <ButtonComponent label="Altro bottone inutile!" />
        <hr />
      </header>
    </div>
  )
}

export default App
