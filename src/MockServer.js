
import React from 'react'
import axios from 'axios'

const MockServer = () => {
    const [clicked, setClicked] = React.useState(false);
    const [username, setUserneme] = React.useState("");
    const [error, setError] = React.useState("");

    const fetchUser = async () => {
        axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then((res)=> {
            const {username} = res.data
            setUserneme(username)
            setClicked(true)
        }).catch(()=>{
            setError("Fetching Failed !")
        })
    }
    const buttonText = clicked ? "loaded" : "Start Fetch";


    return (
        <div>
            <button onClick={fetchUser} disabled={clicked}>
                {buttonText}
            </button>
            {username && <h3>{username}</h3>}
            {error && <p data-testid="error">{error}</p>}
        </div>
    )
}

export default MockServer
