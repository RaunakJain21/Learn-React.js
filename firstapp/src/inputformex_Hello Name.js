import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
    let [name , changename] = useState("");
let [fullName , changefullname] = useState("");

const inputfunc = (event) =>{
// let [name , changename] = useState("");
changename(event.target.value);
};
const sumbmitfunc = (event) =>{
    event.preventDefault();
    changefullname(name);
    changename("");

};

return(
    <>
    <form onSubmit={sumbmitfunc}>
        <h1>Hello {fullName} </h1>

        <input type="text"
        placeholder="Enter your name"
        value={name}
        onChange={inputfunc} />
        <button type="submit">Submit</button>
    </form>
</>
)
}

export default App;