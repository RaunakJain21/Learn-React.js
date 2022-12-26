import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {

let [fullname , changefullname] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: ""
});

const inputfunc = (event) =>{

    const value=event.target.value;
    const name = event.target.name;

changefullname((preValue) => {


    // shortcut using spread operator #imp
    return{
        ...preValue,
        [name] : value
    };

    // #long method
//     if(name === "fname")
//     {
//         return {
//         fname: value,
//         lname: preValue.lname,
//         email: preValue.email,
//         mobile: preValue.mobile
//         };
//     }
//     else if(name ==="lname")
//     {
//         return {
            
//             fname: preValue.fname,
//             lname: value,
//             email: preValue.email,
//             mobile: preValue.mobile
//             };
//     }
//     else if(name ==="email")
//     {
//         return {
            
//             fname: preValue.fname,
//             lname: preValue.lname,
//             email: value,
//             mobile: preValue.mobile
//             };
//     }
//     else
//     {
//         return {
            
//             fname: preValue.fname,
//             lname: preValue.lname,
//             email: preValue.email,
//             mobile: value
//             };
//     }
});
};

const sumbmitfunc = (event) =>{
    event.preventDefault();

};

return(
    <>
    <form onSubmit={sumbmitfunc}>
        <h1>Hello {fullname.fname} {fullname.lname} </h1>
        <p> {fullname.email} </p>
        <p> {fullname.mobile} </p>

        <input type="text"
        placeholder="Enter your first name"
        name="fname"
        value={fullname.fname}
        onChange={inputfunc} />

<input type="text"
        placeholder="Enter your last name"
        name="lname"
        value={fullname.lname}
        onChange={inputfunc} />

         <input type="text"
        placeholder="Enter your email"
        name="email"
        value={fullname.email}
        onChange={inputfunc} />

         <input type="number"
        placeholder="Enter your mobile number"
        name="mobile"
        value={fullname.mobile}
        onChange={inputfunc} />

        <button type="submit">Submit</button>
    </form> 


</>
)
}

export default App;