import { useState } from 'react'
import jokes from "./data/jokes";
import Joke from "./ui/joke"
import './App.css'

function App() {

  const [joke, setJoke] = useState(jokes)

  const jkEl = jokes.map(joke => {
    return (
      <Joke
        key={joke.id}
        setup={joke.setup}
        punchline={joke.punchline}
      />
    )
  })

  return (
    <>
      {jkEl}
    </>
  )
}

export default App
