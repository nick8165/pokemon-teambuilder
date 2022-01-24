import React, { useState, useEffect } from "react"

function Stats({ stats, natureData }) {

    const [totalEV, setTotalEV] = useState(510)
    const [totalStat, setTotalStat] = useState({hp: stats[0].base_stat, atk: 0, def: 0, spatk: 0, spdef: 0, spd:0})
    const [EV, setEV] = useState({hp: 0, atk: 0, def: 0, spatk: 0, spdef: 0, spd: 0})
    const [IV, setIV] = useState({hp: 0, atk: 0, def: 0, spatk: 0, spdef: 0, spd: 0})

    function handleIVChange(e) {
        let int = parseInt(e.target.value)
        if (e.key === "Enter" && int < 32 && int > -1) {
            let tr = e.target.closest("tr")
        
            switch(tr.id) {
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
            let tr = e.target.closest("tr")

            switch(tr.id) {
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

        setTotalStat(prevState => ({hp:newhp, atk:newatk, def:newdef, spatk:newspatk, spdef:newspdef, spd:newspd}))
    }, [IV, EV, natureData])

    

    return (
        <div>
            <table id="base-stats">
                <thead>
                    <tr>
                        <th>Base Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{stats[0].stat.name}</td>
                        <td>{stats[0].base_stat}</td>
                    </tr>
                    <tr>
                        <td>{stats[1].stat.name}</td>
                        <td>{stats[1].base_stat}</td>
                    </tr>
                    <tr>
                        <td>{stats[2].stat.name}</td>
                        <td>{stats[2].base_stat}</td>
                    </tr>
                    <tr>
                        <td>{stats[3].stat.name}</td>
                        <td>{stats[3].base_stat}</td>
                    </tr>
                    <tr>
                        <td>{stats[4].stat.name}</td>
                        <td>{stats[4].base_stat}</td>
                    </tr>
                    <tr>
                        <td>{stats[5].stat.name}</td>
                        <td>{stats[5].base_stat}</td>
                    </tr>
                </tbody>
            </table>
            <table id="IV-stats">
                <thead>
                    <tr>
                        <th>IV Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="IV-hp">
                        <td>hp</td>
                        <td>{IV.hp}</td>
                        <td>
                        <input type="text" placeholder="IV-hp" className="hp" onKeyDown={handleIVChange} />
                        </td>
                    </tr>
                    <tr id="IV-attack">
                        <td>attack</td>
                        <td>{IV.atk}</td>
                        <td>
                        <input type="text" placeholder="IV-attack" className="atk" onKeyDown={handleIVChange} />
                        </td>
                    </tr>
                    <tr id="IV-defense">
                        <td>defense</td>
                        <td>{IV.def}</td>
                        <td>
                        <input type="text" placeholder="IV-defense" className="def" onKeyDown={handleIVChange} />
                        </td>
                    </tr>
                    <tr id="IV-special-attack">
                        <td>special-attack</td>
                        <td>{IV.spatk}</td>
                        <td>
                        <input type="text" placeholder="IV-special-attack" className="sp-atk" onKeyDown={handleIVChange} />
                        </td>
                    </tr>
                    <tr id="IV-special-defense">
                        <td>special-defense</td>
                        <td>{IV.spdef}</td>
                        <td>
                        <input type="text" placeholder="IV-special-defense" className="sp-def" onKeyDown={handleIVChange} />
                        </td>
                    </tr>
                    <tr id="IV-speed">
                        <td>speed</td>
                        <td>{IV.spd}</td>
                        <td>
                            <input type="text" placeholder="IV-speed" className="spd" onKeyDown={handleIVChange} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table id="EV-stats">
                <thead>
                    <tr>
                        <th>EV Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="EV-hp">
                        <td>hp</td>
                        <td>{EV.hp}</td>
                        <td>
                            <input type="text" placeholder="EV-hp" className="hp" onKeyDown={handleEVChange} />
                        </td>
                    </tr>
                    <tr id="EV-attack">
                        <td>attack</td>
                        <td>{EV.atk}</td>
                        <td>
                            <input type="text" placeholder="EV-attack" className="atk" onKeyDown={handleEVChange} /> 
                        </td>
                    </tr>
                    <tr id="EV-defense">
                        <td>defense</td>
                        <td>{EV.def}</td>
                        <td>
                            <input type="text" placeholder="EV-defense" className="def" onKeyDown={handleEVChange} />
                        </td>
                    </tr>
                    <tr id="EV-special-attack">
                        <td>special-attack</td>
                        <td>{EV.spatk}</td>
                        <td>
                            <input type="text" placeholder="EV-speical-attack" className="sp-atk" onKeyDown={handleEVChange} />
                        </td>
                    </tr>
                    <tr id="EV-special-defense">
                        <td>special-defense</td>
                        <td>{EV.spdef}</td>
                        <td>
                            <input type="text" placeholder="EV-special-defense" className="sp-def" onKeyDown={handleEVChange} />
                        </td>
                    </tr>
                    <tr id="EV-speed">
                        <td>speed</td>
                        <td>{EV.spd}</td>
                        <td>
                            <input type="text" placeholder="EV-speed" className="spd" onKeyDown={handleEVChange} />
                        </td>
                    </tr>
                    <tr id="total-EV">
                        <td>EVs Availiable</td>
                        <td>{totalEV}</td>
                        <td><button id="reset" onClick={handleReset}>Reset</button></td>
                    </tr>
                </tbody>
            </table>
            <table id="total-stats">
                <thead>
                    <tr>
                        <th>Total Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="total-hp">
                        <td>hp</td>
                        <td>{Math.round(totalStat.hp)}</td>
                    </tr>
                    <tr id="total-attack">
                        <td>attack</td>
                        <td>{Math.round(totalStat.atk)}</td>
                    </tr>
                    <tr id="total-defense">
                        <td>defense</td>
                        <td>{Math.round(totalStat.def)}</td>
                    </tr>
                    <tr id="total-special-attack">
                        <td>special-attack</td>
                        <td>{Math.round(totalStat.spatk)}</td>
                    </tr>
                    <tr id="total-special-defense">
                        <td>special-defense</td>
                        <td>{Math.round(totalStat.spdef)}</td>
                    </tr>
                    <tr id="total-speed">
                        <td>speed</td>
                        <td>{Math.round(totalStat.spd)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Stats