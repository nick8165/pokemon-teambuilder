import React, { useState } from "react"

function Stats({ stats }) {

    const [totalEv, setTotalEv] = useState(510)

    const [IvHp, setIvHp] = useState(0)
    const [IvAtk, setIvAtk] = useState(0)
    const [IvDef, setIvDef] = useState(0)
    const [IvSpAtk, setIvSpAtk] = useState(0)
    const [IvSpDef, setIvSpDef] = useState(0)
    const [IvSpd, setIvSpd] = useState(0)

    function handleIvAddChange(e) {
        let div = e.target.closest("div")
        
        switch(div.id) {
            case("IV-hp"):
                if (IvHp < 31) {
                    setIvHp(IvHp + 1);
                } else {
                    return(null)
                }
                break;
            case("IV-attack"):
                if (IvAtk < 31) {
                    setIvAtk(IvAtk + 1);
                } else {
                    return(null)
                }
                break;
            case("IV-defense"):
                if (IvDef < 31) {
                    setIvDef(IvDef + 1);
                } else {
                    return(null)
                }
                break;
            case("IV-special-attack"):
                if (IvSpAtk < 31) {
                    setIvSpAtk(IvSpAtk + 1);
                } else {
                    return(null)
                }
                break;
            case("IV-special-defense"):
                if (IvSpDef < 31) {
                    setIvSpDef(IvSpDef + 1);
                } else {
                    return(null)
                }
                break;
            case("IV-speed"):
                if (IvSpd < 31) {
                    setIvSpd(IvSpd + 1);
                } else {
                    return(null)
                }
                break;
            default:
                console.log("default");
                break; 
        }
    }

    function handleIvSubChange(e) {
        let div = e.target.closest("div")
        
        switch(div.id) {
            case("IV-hp"):
                if (IvHp > 0) {
                    setIvHp(IvHp - 1);
                } else {
                    return(null)
                }
                break;
            case("IV-attack"):
                if (IvAtk > 0) {
                    setIvAtk(IvAtk - 1);
                } else {
                    return(null)
                }
                break;
            case("IV-defense"):
                if (IvDef > 0) {
                    setIvDef(IvDef - 1);
                } else {
                    return(null)
                }
                break;
            case("IV-special-attack"):
                if (IvSpAtk > 0) {
                    setIvSpAtk(IvSpAtk - 1);
                } else {
                    return(null)
                }
                break;
            case("IV-special-defense"):
                if (IvSpDef > 0) {
                    setIvSpDef(IvSpDef - 1);
                } else {
                    return(null)
                }
                break;
            case("IV-speed"):
                if (IvSpd > 0) {
                    setIvSpd(IvSpd - 1);
                } else {
                    return(null)
                }
                break;
            default:
                console.log("default");
                break; 
        }
    }

    return (
        <div>
            <div>
                <div key={stats[0].stat.name} className="stats">{stats[0].stat.name}:{stats[0].base_stat}</div>
                <div key={stats[1].stat.name} className="stats">{stats[1].stat.name}:{stats[1].base_stat}</div>
                <div key={stats[2].stat.name} className="stats">{stats[2].stat.name}:{stats[2].base_stat}</div>
                <div key={stats[3].stat.name} className="stats">{stats[3].stat.name}:{stats[3].base_stat}</div>
                <div key={stats[4].stat.name} className="stats">{stats[4].stat.name}:{stats[4].base_stat}</div>
                <div key={stats[5].stat.name} className="stats">{stats[5].stat.name}:{stats[5].base_stat}</div>
            </div>
            <div>
                <h1>IVs</h1>
                <div id="IV-hp">hp:
                    <button className="minus" onClick={handleIvSubChange}>-</button>
                    <span>{IvHp}</span>
                    <button className="add" onClick={handleIvAddChange}>+</button>
                </div>
                <div id="IV-attack">attack:
                    <button className="minus" onClick={handleIvSubChange}>-</button>
                    <span>{IvAtk}</span>
                    <button className="add" onClick={handleIvAddChange}>+</button>
                </div>
                <div id="IV-defense">defense:
                    <button className="minus" onClick={handleIvSubChange}>-</button>
                    <span>{IvDef}</span>
                    <button className="add" onClick={handleIvAddChange}>+</button>
                </div>
                <div id="IV-special-attack">special-attack:
                    <button className="minus" onClick={handleIvSubChange}>-</button>
                    <span>{IvSpAtk}</span>
                    <button className="add" onClick={handleIvAddChange}>+</button>
                </div>
                <div id="IV-special-defense">special-defense:
                    <button className="minus" onClick={handleIvSubChange}>-</button>
                    <span>{IvSpDef}</span>
                    <button className="add" onClick={handleIvAddChange}>+</button>
                </div>
                <div id="IV-speed">speed:
                    <button className="minus" onClick={handleIvSubChange}>-</button>
                    <span>{IvSpd}</span>
                    <button className="add" onClick={handleIvAddChange}>+</button>
                </div>
            </div>
            <div>
                <h1>EVs</h1>
                <div key="EV-hp">hp:
                    <span>0</span>
                    <button className="minus">-</button>
                    <button className="add">+</button>
                </div>
                <div key="EV-attack">attack:
                    <span>0</span>
                    <button className="minus">-</button>
                    <button className="add">+</button>
                </div>
                <div key="EV-defense">defense:
                    <span>0</span>
                    <button className="minus">-</button>
                    <button className="add">+</button>
                </div>
                <div key="EV-special-attack">special-attack:
                    <span>0</span>
                    <button className="minus">-</button>
                    <button className="add">+</button>
                </div>
                <div key="EV-special-defense">special-defense:
                    <span>0</span>
                    <button className="minus">-</button>
                    <button className="add">+</button>
                </div>
                <div key="EV-speed">speed:
                    <span>0</span>
                    <button className="minus">-</button>
                    <button className="add">+</button>
                </div>
                <b>Total EVs Left</b>
                <span>{totalEv}</span>
            </div>
        </div>
    )
}

export default Stats