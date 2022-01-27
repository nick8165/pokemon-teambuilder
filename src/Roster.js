import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap"

function Roster() {

    const [pokeroster, setPokeroster] = useState("")
    const [slotOne, setSlotOne] = useState("")
    const [slotTwo, setSlotTwo] = useState("")
    const [slotThree, setSlotThree] = useState("")
    const [slotFour, setSlotFour] = useState("")
    const [slotFive, setSlotFive] = useState("")
    const [slotSix, setSlotSix] = useState("")

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
                        <Card.Img src="https://www.seekpng.com/png/detail/13-137344_pokeball-pokeball-png.png" alt="Pokeball - Pokeball Png@seekpng.com" width="250" height="200"/>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Move 1</td>
                                    <td>Move 2</td>
                                    <td>Move 3</td>
                                    <td>Move 4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            )
        } else {
            return (<div>
                        <Card.Img src={slot[0].img} width="250" height="200" />
                        <table>
                            <tbody>
                                <tr>
                                {slot[0].moveset.map((move) => {
                                    return (<td key={move}>{move}</td>)
                                })}
                                </tr>
                            </tbody>
                        </table>
                    </div>    
                        )
            }
    }

    return (
        <Container >
            <Card>
                <select id="slot1" onChange={handleChange}>add pokemon to team
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
            <Card>
                <select id="slot2" onChange={handleChange}>add pokemon to team
                    <option value="">add pokemon to team</option>
                    {handleRoster()}
                </select>
                <Card.Body>
                    <Card.Title>
                        SLOT 2
                    </Card.Title>
                </Card.Body>
                {handleSlot(slotTwo)}
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
                </Card.Body>
                {handleSlot(slotThree)}
            </Card>
            <Card>
                <select id="slot4" onChange={handleChange}>add pokemon to team
                    <option value="">add pokemon to team</option>
                    {handleRoster()}
                </select>
                <Card.Body>
                    <Card.Title>
                        SLOT 4
                    </Card.Title>
                </Card.Body>
                {handleSlot(slotFour)}
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
                </Card.Body>
                {handleSlot(slotFive)}
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
                </Card.Body>
                {handleSlot(slotSix)}
            </Card>
        </Container>
    )
}

export default Roster;