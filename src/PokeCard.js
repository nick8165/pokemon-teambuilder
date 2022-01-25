import React, { useState, useEffect } from "react";
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
        let abilityArray = []
        let newAbility = {...pokemon}
        for (let i = 0; i < newAbility.abilities.length; i++) {
            abilityArray.push(newAbility.abilities[i].ability.name)
        }
        return abilityArray.map((abi) => {return (<option value={abi} key={abi}>{abi}</option>)})
    }

    function item() {
        let itemArray = []
        let newItem = {...itemList}
        for (let i = 0; i < newItem.items.length; i++) {
            itemArray.push(newItem.items[i].name)
        }
        return itemArray.map((item) => {return (<option value={item} key={item}>{item}</option>)})
    }

    function extractType(array) {
        let newArray = []
        let newType = {...array}
        for (let i =0; i < newType.length; i++) {
            newArray.push(newType[i].type.name)
        }
        return newArray.map((type) => {return (<div key={type} className={type}>{type}</div>)})
    }

    function extractMoves(array) {
        let newArray = []
        let newMove = [...array]
        for (let i =0; i < newMove.length; i++) {
            newArray.push(newMove[i].move.name)
        }
        return newArray.map((move) => {return (<option key={move}>{move}</option>)})
    }

    function extractNature() {
        if (nature === undefined) {
            return ("...Loading")
        } else {
        let natureArray = []
        let newNature = [...nature]
        for (let i =0; i < newNature.length; i++) {
            natureArray.push(newNature[i].name)
        }
        return natureArray.map((nat) => {return (<option value={nat} key={nat}>{nat}</option>)})}
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
        return (<div>
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
               </div>
        )}
    }


    return (
        <div>
            {buildCard()}
        </div>
    )
}

export default PokeCard