import React, { useState, useEffect } from "react";
import PokeCard from "./PokeCard"

function Pokemon() {

    const [data, setData] = useState("")
    const [selected, setSelected] = useState("bulbasaur")
    const [nature, setNature] = useState("")
    const [buildName, setBuildName] = useState("")

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
            .then(res => res.json())
            .then(json => setData(json))
    },[])

    useEffect(() => {
        let mounted = true;
        if (mounted) {
        fetch("https://pokeapi.co/api/v2/nature/")
            .then(res => res.json())
            .then(json => setNature(json))
        } return () => mounted = false;
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

    function handleBuildName(e) {
        setBuildName(e.target.value)
    }

    function handleBuild(e) {
        e.preventDefault()
        console.log("works")
    }

    return (
        <div>
            <select name="select" id="select" onChange={handleChange}>
                <option value="blank">Choose your Pokemon</option>
                {option(data)}
            </select>
            <PokeCard selected={selected} nature={nature.results} />
            <form id="poke-form" className="form">
                <input type="text" placeholder="Name of Build" onChange={handleBuildName} />
                <button type="submit" onClick={handleBuild}>Save Build</button>
            </form>
        </div>
    )
}

export default Pokemon;