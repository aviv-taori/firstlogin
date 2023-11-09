import { useState } from "react";




function Login() {
  const [fullName, setFName] = useState({
    fName: '',
    lName: ''

  });

  function handleChange(event) { 
    const newValue = event.target.value;
    const newName = event.target.name;

    setFName(prevValue =>
    {
        if (newName === "fName") {
            return{
                fName : newValue,
                lName : prevValue.lName
            }
        }else if (newName === "lName") {
            return{
                fName : prevValue.fName,
                lName : newValue
            }

        }
    }
    )



    if (newName === "fName"){
        setFName({fName : newValue})
    } else if (newName === "lName") {
        setFName({lName : newValue})
    }

    console.log(newValue)
    console.log(newName)
  }

  
  const nameClack = (event) => { event.preventDefault();
  };

  const [onMouse, setOnMuose] = useState(false);
  const changeOn = () => setOnMuose(true);
  const changeOut = () => setOnMuose(false);

  return (
    <div>
      <h1>Hello { fullName.fName } { fullName.lName } </h1>
      <form onSubmit={nameClack}>

        <input
        name="fName"
          type="text"
          placeholder="First name"  
          onChange={handleChange}
          value={fullName.fName}
        />

        <input
        name="lName"
          type="text"
          placeholder="Last name"
          onChange={handleChange}
          value={fullName.lName}
        />

        <button
          type="sumit"
          onMouseOver={changeOn}
          onMouseOut={changeOut}
          style={{ backgroundColor: onMouse ? "black" : "white", color: "red" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
