import Hero from "./components/Hero";
import { useState } from 'react'

function App() {

  let [heroImgs, setHeroImgs] = useState([
    {id: 1, name: 'im1.jpg'}, 
    {id: 2, name: 'im2.jpg'}, 
    {id: 3, name: 'im3.jpg'}, 
  ])

  return (
    <div className="App">
      <Hero heroImgs={heroImgs}/>
    </div>
  );
}


export default App;
