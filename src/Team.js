import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container"

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
      return ( <div>{t[0]}
                <img src={t[1]} />
                </div>)
    }

    function displayTeams() {
        let array = []
        if (team === "") {
            return <h1>Loading...</h1>
        } else {
            return (<Container>
                    {team.map((t) => {
                        return (<div>
                                    {buildTeam(t.slots[0].slot1)}
                                    {buildTeam(t.slots[0].slot2)}
                                    {buildTeam(t.slots[0].slot3)}
                                    {buildTeam(t.slots[0].slot4)}
                                    {buildTeam(t.slots[0].slot5)}
                                    {buildTeam(t.slots[0].slot6)}
                                </div>)
                    })}
                    </Container>)
        }
    }

    return (
        displayTeams()
    )
}

export default Team;