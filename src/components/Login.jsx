import { useState } from "react"


function Login() {
    const [name, setName] = useState("")
    const writeName = event => {setName(event.target.value) ,setNewName(false) }

    const [newName, setNewName] = useState(false)
    const nameClack = () => setNewName(true)



    const [onMouse, setOnMuose] = useState(false)
    const changeOn = () => setOnMuose(true)
    const changeOut = () => setOnMuose(false)

  return (
    <div>
    
        <h1>Hello {newName && name}</h1>
    
        <input
         type='text'
          placeholder='What is your name?'
          value={name}
          onChange={writeName}
           />
        <button
        onClick={nameClack}
        onMouseOver={changeOn} 
        onMouseOut={changeOut}
        style={{backgroundColor: onMouse ? 'black': 'white' , color: "red"}}
        >Submit
        </button>
        
    </div>
  )
}

export default Login