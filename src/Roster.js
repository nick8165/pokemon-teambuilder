import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, CardGroup } from "react-bootstrap"

function Roster() {

    const [pokeroster, setPokeroster] = useState("")
    const [slotOne, setSlotOne] = useState("")
    const [slotTwo, setSlotTwo] = useState("")
    const [slotThree, setSlotThree] = useState("")
    const [slotFour, setSlotFour] = useState("")
    const [slotFive, setSlotFive] = useState("")
    const [slotSix, setSlotSix] = useState("")
    const [teamName, setTeamName] = useState("")

    useEffect(() => {
        fetch(`http://localhost:8000/pokemon`)
        .then(res => res.json())
        .then(json => setPokeroster(json))
    }, [])

    function handleRoster() {
        if (pokeroster === "") {
            return null
        } else {
            let num = 50
            let newRoster = [...pokeroster]
            return newRoster.map((ros) => {return (<option key={num++} value={ros.buildName}>{ros.buildName}</option>)})
        }
    }

    function handleChange(e) {
        let newSlot = [...pokeroster]
        let filter = newSlot.filter((fil) => fil.buildName === e.target.value)
        switch(e.target.id) {
            case("slot1"):
                setSlotOne(filter)
                break;
            case("slot2"):
                setSlotTwo(filter)
                break;
            case("slot3"):
                setSlotThree(filter)
                break;
            case("slot4"):
                setSlotFour(filter)
                break;
            case("slot5"):
                setSlotFive(filter)
                break;
            case("slot6"):
                setSlotSix(filter)
                break;
            default:
                console.log(null)    
        }
    }

    function handleSlot(slot) {
        if (slot === "") {
            return (<div>
                        <Card.Img src="https://www.seekpng.com/png/detail/13-137344_pokeball-pokeball-png.png" alt="Pokeball - Pokeball Png@seekpng.com"/>        
                    </div>
            )
        } else {
            return (<div>
                        <Card.Img src={slot[0].img}/>
                        <Row><h4>Moves</h4></Row>
                        <Row>
                            {slot[0].moveset.map((move) => {
                                    return (<Col>{move}</Col>)
                                })}          
                        </Row>
                        <Row><h4>Nature and Item</h4></Row>
                        <Row>
                            <Col>Nature: {slot[0].nature}</Col>
                            <Col>Held Item: {slot[0].heldItem}</Col>    
                        </Row>
                        <Row><h4>Stats</h4></Row>
                        <Row>
                            <Col>hp</Col>
                            <Col>atk</Col>
                            <Col>def</Col>
                            <Col>spe-atk</Col>
                            <Col>spe-def</Col>
                            <Col>spd</Col>
                        </Row>
                        <Row>
                            {slot[0].totalStats.map((stat) => {
                                return (<Col>{stat}</Col>)
                            })}
                        </Row>        
                    </div>    
                        )
            }
    }

    function handleTeamName(e) {
        setTeamName(e.target.value)
    }

    function handleTeam(e) {
        e.preventDefault()
        let teamData = {
            name: teamName,
            slots: [{
          slot1: [slotOne[0].buildName, slotOne[0].img],
          slot2: [slotTwo[0].buildName, slotTwo[0].img],
          slot3: [slotThree[0].buildName, slotThree[0].img],
          slot4: [slotFour[0].buildName, slotFour[0].img],
          slot5: [slotFive[0].buildName, slotFive[0].img],
          slot6: [slotSix[0].buildName, slotSix[0].img]}]
        }
        fetch("http://localhost:8000/team", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(teamData),
            }) 
            .then(res => {
                console.log(res)
            })
    }

    return (
        <Container fluid="lg">
            <div>
                <form id="teamForm">
                    <input type="text" placeholder="Team Name" onChange={handleTeamName}/>
                    <button type="submit" onClick={handleTeam}>Save Team</button>
                </form>
            </div>
            <CardGroup>
                <Card>
                    <select id="slot1" onChange={handleChange}>add pokemon to team
                        <option value="">add pokemon to team</option>
                        {handleRoster()}
                    </select>
                    <Card.Body>
                        <Card.Title>
                            SLOT 1
                        </Card.Title>
                        {handleSlot(slotOne)}
                    </Card.Body>
                </Card>
                <Card>
                    <select id="slot2" onChange={handleChange}>add pokemon to team
                        <option value="">add pokemon to team</option>
                        {handleRoster()}
                    </select>
                    <Card.Body>
                        <Card.Title>
                            SLOT 2
                        </Card.Title>
                        {handleSlot(slotTwo)}
                    </Card.Body>
                </Card>
                <Card>
                    <select id="slot3" onChange={handleChange}>add pokemon to team
                        <option value="">add pokemon to team</option>
                        {handleRoster()}
                    </select>
                    <Card.Body>
                        <Card.Title>
                            SLOT 3
                        </Card.Title>
                        {handleSlot(slotThree)}
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <select id="slot4" onChange={handleChange}>add pokemon to team
                        <option value="">add pokemon to team</option>
                        {handleRoster()}
                    </select>
                    <Card.Body>
                        <Card.Title>
                            SLOT 4
                        </Card.Title>
                        {handleSlot(slotFour)}
                    </Card.Body>
                </Card>
                <Card>
                    <select id="slot5" onChange={handleChange}>add pokemon to team
                        <option value="">add pokemon to team</option>
                        {handleRoster()}
                    </select>
                    <Card.Body>
                        <Card.Title>
                            SLOT 5
                        </Card.Title>
                        {handleSlot(slotFive)}
                    </Card.Body>
                </Card>
                <Card>
                    <select id="slot6" onChange={handleChange}>add pokemon to team
                        <option value="">add pokemon to team</option>
                        {handleRoster()}
                    </select>
                    <Card.Body>
                        <Card.Title>
                            SLOT 6
                        </Card.Title>
                        {handleSlot(slotSix)}
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    )
}

export default Roster;