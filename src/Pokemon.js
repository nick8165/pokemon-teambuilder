import React, { useState, useEffect } from "react";
import PokeCard from "./PokeCard"
function Pokemon() {

    const [data, setData] = useState("")
    const [card, setCard] = useState("")
    useEffect(() => {
        fetch("http://localhost:8000/results")
            .then(res => res.json())
            .then(json => setData(json))
    },[])

    function option() {
        let array = []
        for (let i = 0; i < data.length; i++) {
            array.push(data[i].name)
        }
        return array.map((poke) => {return (<option value={poke} key={poke}>{poke}</option>)})
    }

    function handleChange(e) {
        setCard(e.target.value)
    }

    console.log(data)

    return (
        <div>
            <select name="select" id="select" onChange={handleChange}>
                <option value="blank">Choose your Pokemon</option>
                {option()}
            </select>
            <PokeCard card={card} />
        </div>
    )
}

export default Pokemon;