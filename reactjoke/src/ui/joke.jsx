import { useState } from 'react'

export default function Joke(Props){

    const [shown, setShown] = useState(false)

    function ToggleShown(){
        setShown(prevShown => !prevShown)
    }

    return (
        <div>
            {Props.setup && <h1>{Props.setup}</h1>}
            {Props.punchline && shown && <p>{Props.punchline}</p>}
            {Props.punchline && <button onClick={ToggleShown}>{ shown ? 'Hide' : 'Show'} Punchline</button>}
            <hr/>
        </div>
    )
}