import React, { useState, useEffect } from "react";
import PokeCard from "./PokeCard"

function Pokemon() {

    const [data, setData] = useState("")
    const [selected, setSelected] = useState("bulbasaur")

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
            .then(res => res.json())
            .then(json => setData(json))
    },[])
    
    function option() {
        let array = []
        if (data === "") {
            return (<div>Loading...</div>)
        } else {
        for (let i = 0; i < data.results.length; i++) {
            array.push(data.results[i].name)
        }
        return array.map((poke) => {return (<option value={poke} key={poke}>{poke}</option>)})}
    }

    function handleChange(e) {
        setSelected(e.target.value)
    }

    return (
        <div>
            <select name="select" id="select" onChange={handleChange}>
                <option value="blank">Choose your Pokemon</option>
                {option(data)}
            </select>
            <PokeCard selected={selected} />
        </div>
    )
}

export default Pokemon;