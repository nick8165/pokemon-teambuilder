import React, { useState, useEffect } from "react";
import { Container, Card, CardGroup, Row } from "react-bootstrap"

function Team() {

    const [individual, setIndividual] = useState("")
    const [team, setTeam] = useState("")

    useEffect(() => {
        fetch(`http://localhost:8000/pokemon`)
        .then(res => res.json())
        .then(json => setIndividual(json))
    }, [])
    
    useEffect(() => {
        fetch(`http://localhost:8000/team`)
        .then(res => res.json())
        .then(json => setTeam(json))
    }, [])

    function buildTeam(t) {
      return ( <Card>
                    <b>{t[0]}</b>
                    <Card.Img src={t[1]} />
                </Card>)
    }

    function displayTeams() {
        if (team === "") {
            return <h1>Loading...</h1>
        } else {
            return (<Container>
                    {team.map((t) => {
                        return (<Container>
                                    <Row><h4 className="teamName">Team: {t.name}</h4></Row>
                                    <CardGroup>
                                            {buildTeam(t.slots[0].slot1)}
                                            {buildTeam(t.slots[0].slot2)}
                                            {buildTeam(t.slots[0].slot3)}
                                            {buildTeam(t.slots[0].slot4)}
                                            {buildTeam(t.slots[0].slot5)}
                                            {buildTeam(t.slots[0].slot6)}
                                    </CardGroup>
                                </Container>)
                    })}
                    </Container>)
        }
    }

    return (
        displayTeams()
    )
}

export default Team;