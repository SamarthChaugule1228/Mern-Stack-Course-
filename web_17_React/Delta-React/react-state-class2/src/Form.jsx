import { use, useState } from "react";

export default function Form() {
    let [formData, setFormdata] = useState({
        fullName: "",
        username: "",
        password:"",
    });
  
    let handleInputChange = (e) => {
        let fieldname = e.target.name;
        let fieldvalue = e.target.value;
        setFormdata(
            (currData)=> {
                currData[fieldname] = fieldvalue;
                return {...currData};
            }
        )
        console.log(fieldname);
        console.log(fieldvalue)
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setFormdata({
            fullName: "",
            username: "",
            password:"",
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name </label>
            <input
                type="text"
                placeholder="Enter Full Name "
                value={formData.fullName}
                id="fullName"
                onChange={handleInputChange}
                name="fullName"
            />
            <br />
            <br />
            <label htmlFor="username">Username </label>
            <input
                type="text"
                placeholder="Enter useraname"
                value={formData.username}
                id="username"
                onChange={handleInputChange}
                name="username"
            />
            <br />
            <br />
            <label htmlFor="password">password </label>
            <input
                type="password"
                placeholder="Enter password"
                value={formData.password}
                id="password"
                onChange={handleInputChange}
                name="password"
            />
            <br />
            <br />
            <button >Submit</button>
        </form>
    );
}
