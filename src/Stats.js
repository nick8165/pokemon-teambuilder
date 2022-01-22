import React, { useState } from "react"

function Stats({ stats }) {

    const [totalEV, setTotalEV] = useState(510)

    const [IVHp, setIVHp] = useState(0)
    const [IVAtk, setIVAtk] = useState(0)
    const [IVDef, setIVDef] = useState(0)
    const [IVSpAtk, setIVSpAtk] = useState(0)
    const [IVSpDef, setIVSpDef] = useState(0)
    const [IVSpd, setIVSpd] = useState(0)

    const [EVHp, setEVHp] = useState(0)
    const [EVAtk, setEVAtk] = useState(0)
    const [EVDef, setEVDef] = useState(0)
    const [EVSpAtk, setEVSpAtk] = useState(0)
    const [EVSpDef, setEVSpDef] = useState(0)
    const [EVSpd, setEVSpd] = useState(0)

    function handleIVAddChange(e) {
        let tr = e.target.closest("tr")
        
        switch(tr.id) {
            case("IV-hp"):
                if (IVHp < 31) {
                    setIVHp(IVHp + 1);
                } else {
                    return(null)
                }
                break;
            case("IV-attack"):
                if (IVAtk < 31) {
                    setIVAtk(IVAtk + 1);
                } else {
                    return(null)
                }
                break;
            case("IV-defense"):
                if (IVDef < 31) {
                    setIVDef(IVDef + 1);
                } else {
                    return(null)
                }
                break;
            case("IV-special-attack"):
                if (IVSpAtk < 31) {
                    setIVSpAtk(IVSpAtk + 1);
                } else {
                    return(null)
                }
                break;
            case("IV-special-defense"):
                if (IVSpDef < 31) {
                    setIVSpDef(IVSpDef + 1);
                } else {
                    return(null)
                }
                break;
            case("IV-speed"):
                if (IVSpd < 31) {
                    setIVSpd(IVSpd + 1);
                } else {
                    return(null)
                }
                break;
            default:
                console.log("default");
                break; 
        }
    }

    function handleIVSubChange(e) {
        let tr = e.target.closest("tr")
        
        switch(tr.id) {
            case("IV-hp"):
                if (IVHp > 0) {
                    setIVHp(IVHp - 1);
                } else {
                    return(null)
                }
                break;
            case("IV-attack"):
                if (IVAtk > 0) {
                    setIVAtk(IVAtk - 1);
                } else {
                    return(null)
                }
                break;
            case("IV-defense"):
                if (IVDef > 0) {
                    setIVDef(IVDef - 1);
                } else {
                    return(null)
                }
                break;
            case("IV-special-attack"):
                if (IVSpAtk > 0) {
                    setIVSpAtk(IVSpAtk - 1);
                } else {
                    return(null)
                }
                break;
            case("IV-special-defense"):
                if (IVSpDef > 0) {
                    setIVSpDef(IVSpDef - 1);
                } else {
                    return(null)
                }
                break;
            case("IV-speed"):
                if (IVSpd > 0) {
                    setIVSpd(IVSpd - 1);
                } else {
                    return(null)
                }
                break;
            default:
                console.log("default");
                break; 
        }
    }

    function handleEVAddChange() {

    }

    function handleEVSubChange() {

    }

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
                        <td>{IVHp}</td>
                        <td>
                            <button className="minus" onClick={handleIVSubChange}>-</button>
                            <button className="add" onClick={handleIVAddChange}>+</button>
                        </td>
                    </tr>
                    <tr id="IV-attack">
                        <td>attack</td>
                        <td>{IVAtk}</td>
                        <td>
                            <button className="minus" onClick={handleIVSubChange}>-</button>
                            <button className="add" onClick={handleIVAddChange}>+</button>
                        </td>
                    </tr>
                    <tr id="IV-defense">
                        <td>defense</td>
                        <td>{IVDef}</td>
                        <td>
                            <button className="minus" onClick={handleIVSubChange}>-</button>
                            <button className="add" onClick={handleIVAddChange}>+</button>
                        </td>
                    </tr>
                    <tr id="IV-special-attack">
                        <td>special-attack</td>
                        <td>{IVSpAtk}</td>
                        <td>
                            <button className="minus" onClick={handleIVSubChange}>-</button>
                            <button className="add" onClick={handleIVAddChange}>+</button>
                        </td>
                    </tr>
                    <tr id="IV-special-defense">
                        <td>special-defense</td>
                        <td>{IVSpDef}</td>
                        <td>
                            <button className="minus" onClick={handleIVSubChange}>-</button>
                            <button className="add" onClick={handleIVAddChange}>+</button>
                        </td>
                    </tr>
                    <tr id="IV-speed">
                        <td>speed</td>
                        <td>{IVSpd}</td>
                        <td>
                            <button className="minus" onClick={handleIVSubChange}>-</button>
                            <button className="add" onClick={handleIVAddChange}>+</button>
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
                        <td>0</td>
                        <td>
                            <button className="minus" onClick={handleEVSubChange}>-</button>
                            <button className="add" onClick={handleEVAddChange}>+</button>
                        </td>
                    </tr>
                    <tr id="EV-attack">
                        <td>attack</td>
                        <td>0</td>
                        <td>
                            <button className="minus" onClick={handleEVSubChange}>-</button>
                            <button className="add" onClick={handleEVAddChange}>+</button>
                        </td>
                    </tr>
                    <tr id="EV-defense">
                        <td>defense</td>
                        <td>0</td>
                        <td>
                            <button className="minus" onClick={handleEVSubChange}>-</button>
                            <button className="add" onClick={handleEVAddChange}>+</button>
                        </td>
                    </tr>
                    <tr id="EV-special-attack">
                        <td>special-attack</td>
                        <td>0</td>
                        <td>
                            <button className="minus" onClick={handleEVSubChange}>-</button>
                            <button className="add" onClick={handleEVAddChange}>+</button>
                        </td>
                    </tr>
                    <tr id="EV-special-defense">
                        <td>special-defense</td>
                        <td>0</td>
                        <td>
                            <button className="minus" onClick={handleEVSubChange}>-</button>
                            <button className="add" onClick={handleEVAddChange}>+</button>
                        </td>
                    </tr>
                    <tr id="EV-speed">
                        <td>speed</td>
                        <td>0</td>
                        <td>
                            <button className="minus" onClick={handleEVSubChange}>-</button>
                            <button className="add" onClick={handleEVAddChange}>+</button>
                        </td>
                    </tr>
                    <tr id="total-EV">
                        <td>EVs Availiable</td>
                        <td>{totalEV}</td>
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
                        <td>0</td>
                    </tr>
                    <tr id="total-attack">
                        <td>attack</td>
                        <td>0</td>
                    </tr>
                    <tr id="total-defense">
                        <td>defense</td>
                        <td>0</td>
                    </tr>
                    <tr id="total-special-attack">
                        <td>special-attack</td>
                        <td>0</td>
                    </tr>
                    <tr id="total-special-defense">
                        <td>special-defense</td>
                        <td>0</td>
                    </tr>
                    <tr id="total-speed">
                        <td>speed</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Stats