import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container"
import Stats from "./Stats"

function PokeCard({selected, nature}) {
    
    const [pokemon, setPokemon] = useState("")
    const [ability, setAbility] = useState("")
    const [itemList, setItemList] = useState("")
    const [selectedItem, setSelectedItem] = useState("")
    const [selectedNature, setSelectedNature] = useState("")
    const [natureData, setNatureData] = useState({decStat: "", incStat: ""})
    const [moveSet, setMoveSet] = useState({move1: "", move2: "", move3: "", move4: ""})

    useEffect(() => {
        let mounted = true
        if(mounted) { 
            fetch("https://pokeapi.co/api/v2/item-category/12/")
                .then(res => res.json())
                .then(json => setItemList(json))
            } return () => mounted = false
    },[])
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${selected}`)
        .then(res => res.json())
        .then(json => setPokemon(json))
    },[selected])

    useEffect(() => {
        if (selectedNature !== "") {
        fetch(`https://pokeapi.co/api/v2/nature/${selectedNature}`)
            .then(res => res.json())
            .then(json => { 
                if (selectedNature === "bashful" || selectedNature === "docile" || selectedNature === "hardy" || selectedNature === "quirky" || selectedNature === "serious") {
                    setNatureData({decStat: "", incStat: ""})
                } else {setNatureData({decStat: json.decreased_stat.name, incStat: json.increased_stat.name})}
            })}
        else {console.log(null)}
    }, [selectedNature])

    function extractAbilities() {
        let newAbility = {...pokemon}
        return newAbility.abilities.map((abi) => {return (<option value={abi.ability.name} key={abi.ability.name}>{abi.ability.name}</option>)})
    }

    function item() {
        let newItem = {...itemList}
        return newItem.items.map((item) => {return (<option value={item.name} key={item.name}>{item.name}</option>)})
    }

    function extractType(array) {
        let newType = [...array]
        return newType.map((types) => {return (<div key={types.type.name} className={types.type.name}>{types.type.name}</div>)})
    }

    function extractMoves(array) {
        let newMove = [...array]
        return newMove.map((moves) => {return (<option key={moves.move.name}>{moves.move.name}</option>)})
    }

    function extractNature() {
        if (nature === undefined) {
            return ("...Loading")
        } else {
        let newNature = [...nature]
        return newNature.map((nat) => {return (<option value={nat.name} key={nat.name}>{nat.name}</option>)})}
    }

    function handleNatureChange(e) {
        setSelectedNature(e.target.value)
    }

    function handleItemChange(e) {
        setSelectedItem(e.target.value)
    }

    function handleAbilityChange(e) {
        setAbility(e.target.value)
    }

    function handleMoveSet(e) {
        switch(e.target.id) {
            case('move1'):
                setMoveSet(prevState => ({...prevState, move1: e.target.value}))
                break;
            case('move2'):
                setMoveSet(prevState => ({...prevState, move2: e.target.value}))
                break;
            case('move3'):
                setMoveSet(prevState => ({...prevState, move3: e.target.value}))
                break;
            case('move4'):
                setMoveSet(prevState => ({...prevState, move4: e.target.value}))
                break;
            default:
                console.log(null)
        }
    }

    function buildCard() {
        if (pokemon === "") {
            return (<div>Loading...</div>)
        } else {
        return (<Container>
                    <img src={pokemon.sprites.front_default} alt="Pokemon"/>
                    {extractType(pokemon.types)}
                    <select name="move" id="move1" onChange={handleMoveSet}>
                        <option value="blank">Move Slot 1</option>
                        {extractMoves(pokemon.moves)}
                    </select>
                    <select name="move" id="move2" onChange={handleMoveSet}>
                        <option value="blank">Move Slot 2</option>
                        {extractMoves(pokemon.moves)}
                    </select>
                    <select name="move" id="move3" onChange={handleMoveSet}>
                        <option value="blank">Move Slot 3</option>
                        {extractMoves(pokemon.moves)}
                    </select>
                    <select name="move" id="move4" onChange={handleMoveSet}>
                        <option value="blank">Move Slot 4</option>
                        {extractMoves(pokemon.moves)}
                    </select>
                    <div>
                        <select name="ability" id="ability" onChange={handleAbilityChange}>
                            <option value="blank">Ability</option>
                            {extractAbilities()}
                        </select>
                        <select name="item" id="item" onChange={handleItemChange}>
                            <option value="blank">Held Item</option>
                            {item()}
                        </select>
                        <select name="nature" id="nature" onChange={handleNatureChange}>
                            <option value="">Nature</option>
                            {extractNature()}
                        </select>
                    </div>
                    <Stats stats={pokemon.stats} natureData={natureData} selectedItem={selectedItem} moveSet={moveSet} pokemon={pokemon} selectedNature={selectedNature} ability={ability}/>
               </Container>
        )}
    }


    return (
        <div>
            {buildCard()}
        </div>
    )
}

export default PokeCard