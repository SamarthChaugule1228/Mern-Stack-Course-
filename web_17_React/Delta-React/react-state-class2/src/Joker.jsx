import { useEffect, useState } from "react";
export default function Joker() {
    const URL = "https://official-joke-api.appspot.com/jokes/random";
    let [joke, setJoke] = useState("");
  const getJoke = async () => {
    try {
      let response = await fetch(URL);
      let data = await response.json();
        console.log("Joke Data:", data);
        setJoke({ setup: data.setup, punchline: data.punchline });
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
    };
    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let data = await response.json();
            console.log("Joke Data:", data);
            setJoke({ setup: data.setup, punchline: data.punchline });
        }
        getFirstJoke();
    }, []);
    return (
        <div>
            <h2>Joker Component</h2>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getJoke}>Get a Random Joke</button>
        </div>
    );
}