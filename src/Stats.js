import React, { useState } from "react"

function Stats({ stats }) {

    const [totalEv, setTotalEv] = useState(510)
    const [IvHp, setIvHp] = useState(0)
    const [IvAtk, setIvatk] = useState(0)
    const [IvDef, setIvDef] = useState(0)
    const [IvSpAtk, setIvSpAtk] = useState(0)
    const [IvSpDef, setIvSpDef] = useState(0)
    const [IvSpd, setIvSpd] = useState(0)

    function handleIvChange(e) {

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
                <div key="IV-hp">hp:
                    <button className="minus">-</button>
                    <span>{IvHp}</span>
                    <button className="add">+</button>
                </div>
                <div key="IV-attack">attack:
                    <button className="minus">-</button>
                    <span>{IvAtk}</span>
                    <button className="add">+</button>
                </div>
                <div key="IV-defense">defense:
                    <button className="minus">-</button>
                    <span>{IvDef}</span>
                    <button className="add">+</button>
                </div>
                <div key="IV-special-attack">special-attack:
                    <button className="minus">-</button>
                    <span>{IvSpAtk}</span>
                    <button className="add">+</button>
                </div>
                <div key="IV-special-defense">special-defense:
                    <button className="minus">-</button>
                    <span>{IvSpDef}</span>
                    <button className="add">+</button>
                </div>
                <div key="IV-speed">speed:
                    <button className="minus">-</button>
                    <span>{IvSpd}</span>
                    <button className="add">+</button>
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
                <div>{totalEv}</div>
            </div>
        </div>
    )
}

export default Stats