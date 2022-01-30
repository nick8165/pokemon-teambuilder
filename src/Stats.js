import React, { useState, useEffect } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"

function Stats({ stats, natureData, selectedItem, moveSet, pokemon, selectedNature, ability }) {

    const [totalEV, setTotalEV] = useState(510)
    const [totalStat, setTotalStat] = useState({hp: stats[0].base_stat, atk: 0, def: 0, spatk: 0, spdef: 0, spd:0})
    const [EV, setEV] = useState({hp: 0, atk: 0, def: 0, spatk: 0, spdef: 0, spd: 0})
    const [IV, setIV] = useState({hp: 0, atk: 0, def: 0, spatk: 0, spdef: 0, spd: 0})
    const [buildName, setBuildName] = useState("")

    function handleIVChange(e) {
        let int = parseInt(e.target.value)
        if (e.key === "Enter" && int < 32 && int > -1) {
            
            switch(e.target.id) {
                case("IV-hp"):
                    setIV(prevState => ({...prevState, hp: int}))
                    break;

                case("IV-attack"):
                    setIV(prevState => ({...prevState, atk: int}))
                    break;

                case("IV-defense"):
                    setIV(prevState => ({...prevState, def: int}))
                    break;

                case("IV-special-attack"):
                    setIV(prevState => ({...prevState, spatk: int}))
                    break;

                case("IV-special-defense"):
                    setIV(prevState => ({...prevState, spdef: int}))
                    break;

                case("IV-speed"):
                    setIV(prevState => ({...prevState, spd: int}))
                    break;

                default:
                    console.log(null);
                    break; 
            }
        } else {return null}
    }

    function handleEVChange(e) {
        let int = parseInt(e.target.value)
        if(e.key === "Enter" && totalEV - int >= 0 && int > -1 && int <= 252) {

            switch(e.target.id) {
                case("EV-hp"):
                    setEV(prevState => ({...prevState, hp: int}))
                    break;

                case("EV-attack"):
                    setEV(prevState => ({...prevState, atk: int}))
                    break;

                case("EV-defense"):
                    setEV(prevState => ({...prevState, def: int}))
                    break;

                case("EV-special-attack"):
                    setEV(prevState => ({...prevState, spatk: int}))
                    break;

                case("EV-special-defense"):
                    setEV(prevState => ({...prevState, spdef: int}))
                    break;

                case("EV-speed"):
                    setEV(prevState => ({...prevState, spd: int}))
                    break;

                default:
                    console.log(null);
                    break; 
            }
            setTotalEV(totalEV => totalEV - e.target.value)
        } else {return null}
    }

    function handleReset() {
        setEV(prevState => ({hp: 0, atk: 0, def: 0, spatk: 0, spdef: 0, spd: 0}))
        setTotalEV(prevState => (510))
    }

    useEffect(() => {
        let newhp = (((2 * stats[0].base_stat + IV.hp + EV.hp/4 + 100) * 50) / 100 + 10)
        let newatk = (((2 * stats[1].base_stat + IV.atk + EV.atk / 4) * 50)  / 100 + 5)
        let newdef = (((2 * stats[2].base_stat + IV.def + EV.def / 4) * 50) / 100 + 5)
        let newspatk = (((2 * stats[3].base_stat + IV.spatk + EV.spatk / 4) * 50) / 100 + 5)
        let newspdef = (((2 * stats[4].base_stat + IV.spdef + EV.spdef / 4) * 50) / 100 + 5)
        let newspd = (((2 * stats[5].base_stat + IV.spd + EV.spd / 4) * 50) / 100 + 5)

        switch(natureData.incStat) {
            case("attack"):
                newatk = newatk + (newatk * .1)
                break;
            case("defense"):
                newdef = newdef + (newdef * .1)
                break;
            case("special-attack"):
                newspatk = newspatk + (newspatk * .1)
                break;
            case("special-defense"):
                newspdef = newspdef + (newspdef * .1)
                break;
            case("speed"):
                newspd = newspd + (newspd * .1)
                break;
            default:
                console.log(null)
        }

        switch(natureData.decStat) {
            case("attack"):
                newatk = newatk - (newatk * .1)
                break;
            case("defense"):
                newdef = newdef - (newdef * .1)
                break;
            case("special-attack"):
                newspatk = newspatk - (newspatk * .1)
                break;
            case("special-defense"):
                newspdef = newspdef - (newspdef * .1)
                break;
            case("speed"):
                newspd = newspd - (newspd * .1)
                break;
            default:
                console.log(null)
        }

        setTotalStat(prevState => ({...prevState, hp: Math.floor(newhp), atk: Math.floor(newatk), def: Math.floor(newdef), spatk: Math.floor(newspatk), spdef: Math.floor(newspdef), spd:Math.floor(newspd)}))
    }, [IV, EV, natureData, pokemon])

    function handleBuildName(e) {
        setBuildName(e.target.value)
    }

    function handleBuild(e) {
        e.preventDefault()
        if (buildName === "") {
            window.alert("Must give a build name")
        } else {
            let data = {
                buildName: buildName,
                img: pokemon.sprites.front_default,
                name: pokemon.name,
                moveset: [moveSet.move1, moveSet.move2, moveSet.move3, moveSet.move4],
                ability: ability,
                heldItem: selectedItem,
                nature: selectedNature,
                IV: [IV.hp, IV.atk, IV.def, IV.spatk, IV.spdef, IV.spd],
                EV: [EV.hp, EV.atk, EV.def, EV.spatk, EV.spdef, EV.spd],
                totalStats: [totalStat.hp, totalStat.atk, totalStat.def, totalStat.spatk, totalStat.spdef, totalStat.spd]
              };
            fetch("http://localhost:8000/pokemon", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            }) 
            .then(res => {
                console.log(res)
            });
        }
    }

    function displayBaseStats() {
        let newStats = [...stats]
        return newStats.map((stat) => {return (<Row key={stat.stat.name}>
                                                    <Col xs lg="2" className={stat.stat.name}>{stat.stat.name}</Col>
                                                    <Col xs lg="2" className="statbox">{stat.base_stat}</Col>
                                                </Row>)})
    }

    

    return (
            <div>
                <Row><h2>Base Stats</h2></Row>
                {displayBaseStats()}

                <Row><h2>IV Stats</h2></Row>
                <Row>
                    <Col xs lg="2" className="hp">hp</Col>
                    <Col xs lg="2" className="statbox">{IV.hp}</Col>
                    <Col xs lg="2"><input id="IV-hp" type="text" placeholder="IV-hp" onKeyDown={handleIVChange} /></Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="attack">attack</Col>
                    <Col xs lg="2" className="statbox">{IV.atk}</Col>
                    <Col xs lg="2"><input id="IV-attack" type="text" placeholder="IV attack" onKeyDown={handleIVChange} /></Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="defense">defense</Col>
                    <Col xs lg="2" className="statbox">{IV.def}</Col>
                    <Col xs lg="2"><input id="IV-defense" type="text" placeholder="IV defense" onKeyDown={handleIVChange} /></Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="special-attack">special-attack</Col>
                    <Col xs lg="2" className="statbox">{IV.spatk}</Col>
                    <Col xs lg="2"><input id="IV-special-attack" type="text" placeholder="IV special-attack" onKeyDown={handleIVChange} /></Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="special-defense">special-defense</Col>
                    <Col xs lg="2" className="statbox">{IV.spdef}</Col>
                    <Col xs lg="2"><input id="IV-special-defense" type="text" placeholder="IV special-defense" onKeyDown={handleIVChange} /></Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="speed">speed</Col>
                    <Col xs lg="2" className="statbox">{IV.spd}</Col>
                    <Col xs lg="2"><input id="IV-speed" type="text" placeholder="IV-speed" onKeyDown={handleIVChange} /></Col>
                </Row>

                <Row><h2>EV Stats</h2></Row>
                <Row>
                    <Col xs lg="2" className="hp">hp</Col>
                    <Col xs lg="2" className="statbox">{EV.hp}</Col>
                    <Col xs lg="2"><input id="EV-hp" type="text" placeholder="EV hp" onKeyDown={handleEVChange} /></Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="attack">attack</Col>
                    <Col xs lg="2" className="statbox">{EV.atk}</Col>
                    <Col xs lg="2"><input id="EV-attack" type="text" placeholder="EV attack" onKeyDown={handleEVChange} /></Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="defense">defense</Col>
                    <Col xs lg="2" className="statbox">{EV.def}</Col>
                    <Col xs lg="2"><input id="EV-defense" type="text" placeholder="EV defense" onKeyDown={handleEVChange} /></Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="special-attack">special-attack</Col>
                    <Col xs lg="2" className="statbox">{EV.spatk}</Col>
                    <Col xs lg="2"><input id="EV-special-attack" type="text" placeholder="EV special-attack" onKeyDown={handleEVChange} /></Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="special-defense">special-defense</Col>
                    <Col xs lg="2" className="statbox">{EV.spdef}</Col>
                    <Col xs lg="2"><input id="EV-special-defense" type="text" placeholder="EV special-defense" onKeyDown={handleEVChange} /></Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="speed">speed</Col>
                    <Col xs lg="2" className="statbox">{EV.spd}</Col>
                    <Col xs lg="2"><input id="EV-speed" type="text" placeholder="EV speed" onKeyDown={handleEVChange} /></Col>
                </Row>
                <Button variant="secondary" size="lg" type="submit" onClick={handleReset}>Reset EVs</Button>

                <Row><h2>Total Stats</h2></Row>
                <Row>
                    <Col xs lg="2" className="hp">hp</Col>
                    <Col xs lg="2" className="statbox">{Math.floor(totalStat.hp)}</Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="attack">attack</Col>
                    <Col xs lg="2" className="statbox">{Math.floor(totalStat.atk)}</Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="defense">defense</Col>
                    <Col xs lg="2" className="statbox">{Math.floor(totalStat.def)}</Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="special-attack">special-attack</Col>
                    <Col xs lg="2" className="statbox">{Math.floor(totalStat.spatk)}</Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="special-defense">special-defense</Col>
                    <Col xs lg="2" className="statbox">{Math.floor(totalStat.spdef)}</Col>
                </Row>
                <Row>
                    <Col xs lg="2" className="speed">speed</Col>
                    <Col xs lg="2" className="statbox">{Math.floor(totalStat.spd)}</Col>
                </Row>
                <Form id="poke-form">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Name of Build" onChange={handleBuildName} />
                        <Button type="submit" onClick={handleBuild}>Save Build</Button>
                    </Form.Group>
                </Form>
            </div>
    )
}

export default Stats