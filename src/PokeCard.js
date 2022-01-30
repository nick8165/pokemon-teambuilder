import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap"
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
        return (<div>
                    <Card className="text-center" style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={pokemon.sprites.front_default} className="card-img-top" alt="Pokemon" width="200px" height="200px"/>
                        <Card.Body className="card-body">
                            {extractType(pokemon.types)}
                        </Card.Body>
                    </Card>
                    <Row>
                        <Col xs lg="3">
                            <select className="form-select" id="move1" onChange={handleMoveSet}>
                                <option value="blank">Move Slot 1</option>
                                {extractMoves(pokemon.moves)}
                            </select>
                        </Col>
                        <Col xs lg="3">
                            <select className="form-select" id="ability" onChange={handleAbilityChange}>
                                <option value="blank">Ability</option>
                                {extractAbilities()}
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs lg="3">
                            <select className="form-select" id="move2" onChange={handleMoveSet}>
                                <option value="blank">Move Slot 2</option>
                                {extractMoves(pokemon.moves)}
                            </select>
                        </Col>
                        <Col xs lg="3"><select className="form-select" id="item" onChange={handleItemChange}>
                                        <option value="blank">Held Item</option>
                                        {item()}
                                    </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs lg="3">
                            <select className="form-select" id="move3" onChange={handleMoveSet}>
                                <option value="blank">Move Slot 3</option>
                                {extractMoves(pokemon.moves)}
                            </select>
                        </Col>
                        <Col xs lg="3">
                            <select className="form-select" id="nature" onChange={handleNatureChange}>
                            <option value="">Nature</option>
                            {extractNature()}
                        </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs lg="3">
                            <select className="form-select" id="move4" onChange={handleMoveSet}>
                                <option value="blank">Move Slot 4</option>
                                {extractMoves(pokemon.moves)}
                            </select>
                        </Col>
                    </Row>
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