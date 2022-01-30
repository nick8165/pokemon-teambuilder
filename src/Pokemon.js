import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container"
import PokeCard from "./PokeCard"

function Pokemon() {

    const [data, setData] = useState("")
    const [selected, setSelected] = useState("bulbasaur")
    const [nature, setNature] = useState("")

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
        let newData = {...data}
        if (data === "") {
            return (null)
        } else {
        for (let i = 0; i < newData.results.length; i++) {
            array.push(newData.results[i].name)
        }
        return array.map((poke) => {return (<option value={poke} key={poke}>{poke}</option>)})}
    }

    function handleChange(e) {
        setSelected(e.target.value)
    }

    return (
        <Container fluid="sm">
            <select className="form-select" id="select" onChange={handleChange}>
                <option value="blank">Choose your Pokemon</option>
                {option()}
            </select>
            <PokeCard selected={selected} nature={nature.results} />
        </Container>
    )
}

export default Pokemon;