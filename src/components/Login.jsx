import { useState } from "react";

function Login() {
  const [fName, setFName] = useState("");
  const writeFName = (event) => {
    setFName(event.target.value);
  };

  const [lName, setLName] = useState("");
  const writeLName = (event) => {
    setLName(event.target.value);
  };
  const nameClack = (event) => { event.preventDefault();
  };

  const [onMouse, setOnMuose] = useState(false);
  const changeOn = () => setOnMuose(true);
  const changeOut = () => setOnMuose(false);

  return (
    <div>
      <h1>Hello { fName } { lName } </h1>
      <form onSubmit={nameClack}>
        <input
          type="text"
          placeholder="First name"
          value={fName}
          onChange={writeFName}
        />

        <input
          type="text"
          placeholder="Last name"
          value={lName}
          onChange={writeLName}
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
