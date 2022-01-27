import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap"

function Roster() {

    const [pokeroster, setPokeroster] = useState("")
    const [slotOne, setSlotOne] = useState("")

    useEffect(() => {
        fetch(`http://localhost:8000/pokemon`)
        .then(res => res.json())
        .then(json => setPokeroster(json))
    }, [])

    function handleRoster() {
        if (pokeroster === "") {
            return null
        } else {
            let newRoster = {...pokeroster}
            return newRoster[0].roster.map((ros) => {return (<option value={ros.buildName} key={ros.buildName}>{ros.buildName}</option>)})
        }
    }

    function handleChange(e) {
        let newSlot = {...pokeroster}
        let filter = newSlot[0].roster.filter((fil) => fil.buildName === e.target.value)
        console.log(filter)
        setSlotOne(filter)
    }

    function handleSlot(slot) {
        if (slot === "") {
            return <Card.Img src="https://www.seekpng.com/png/detail/13-137344_pokeball-pokeball-png.png" alt="Pokeball - Pokeball Png@seekpng.com" width="250" height="200"/>
        }
    }

    return (
        <Container >
            <Card>
                <select onChange={handleChange}>add pokemon to team
                    <option value="">add pokemon to team</option>
                    {handleRoster()}
                </select>
                <Card.Body>
                    <Card.Title>
                        SLOT 1
                    </Card.Title>
                </Card.Body>
                {handleSlot(slotOne)}
            </Card>
        </Container>
    )
}

export default Roster;