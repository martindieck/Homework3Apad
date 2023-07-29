import './App.css';
import React, {useState} from "react";

const App = () => {
    const [name, setName] = useState("")
    const [lastName, setLast] = useState("")
    const [message, setMessage] = useState("")
    const [data, setData] = useState({})
    const [code, setCode] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/getLastName/"+name)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLast(data.name)
                setMessage(data.error)
                setCode(String(data.code))
                })
            .catch(error => {
                console.error("Error fetching data: ",error);
            });
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
    <div>
        <h1>Enter First Name</h1>
        <form onSubmit={handleSubmit} action="" method="get" class="form-example" >
            <div class="form-example">
                <label for="first-name">Enter your first name: </label>
                <input type="text" name="first-name" id="first-name" onChange={handleChange}></input>
                <button>Submit</button>
             </div>
        </form>
        <h4>Response from the back end: {code} {message}</h4>
        <h4>Last Name: {lastName}</h4>
    </div>
  );
}

export default App;
