import React, { useState, useEffect } from "react";
import Stats from "./Stats"

function PokeCard({selected, nature}) {
    
    const [pokemon, setPokemon] = useState("")
    const [itemList, setItemList] = useState("")
    const [selectedNature, setSelectedNature] = useState("")
    const [natureData, setNatureData] = useState({decStat: "", incStat: ""})

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

   

    function item() {
        let itemArray = []
        for (let i = 0; i < itemList.items.length; i++) {
            itemArray.push(itemList.items[i].name)
        }
        return itemArray.map((item) => {return (<option value={item} key={item}>{item}</option>)})
    }

    function extractType(array) {
        let newArray = []
        for (let i =0; i < array.length; i++) {
            newArray.push(array[i].type.name)
        }
        return newArray.map((type) => {return (<div key={type} className={type}>{type}</div>)})
    }

    function extractMoves(array) {
        let newArray = []
        for (let i =0; i < array.length; i++) {
            newArray.push(array[i].move.name)
        }
        return newArray.map((move) => {return (<option key={move}>{move}</option>)})
    }

    function extractNature() {
        if (nature === undefined) {
            return ("...Loading")
        } else {
        let natureArray = []
        for (let i =0; i < nature.length; i++) {
            natureArray.push(nature[i].name)
        }
        return natureArray.map((nat) => {return (<option value={nat} key={nat}>{nat}</option>)})}
    }

    function handleNatureChange(e) {
        setSelectedNature(e.target.value)
    }

    function buildCard() {
        if (pokemon === "") {
            return (<div>Loading...</div>)
        } else {
        return (<div>
                    <img src={pokemon.sprites.front_default} alt="Pokemon"/>
                    {extractType(pokemon.types)}
                    <select name="move" id="move1">
                        <option value="blank">Move Slot 1</option>
                        {extractMoves(pokemon.moves)}
                    </select>
                    <select name="move" id="move2">
                        <option value="blank">Move Slot 2</option>
                        {extractMoves(pokemon.moves)}
                    </select>
                    <select name="move" id="move3">
                        <option value="blank">Move Slot 3</option>
                        {extractMoves(pokemon.moves)}
                    </select>
                    <select name="move" id="move4">
                        <option value="blank">Move Slot 4</option>
                        {extractMoves(pokemon.moves)}
                    </select>
                    <div>
                        <select name="item" id="item">
                            <option value="blank">Held Item</option>
                            {item()}
                        </select>
                        <select name="nature" id="nature" onChange={handleNatureChange}>
                            <option value="">Nature</option>
                            {extractNature()}
                        </select>
                    </div>
                    <Stats stats={pokemon.stats} natureData={natureData}/>
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