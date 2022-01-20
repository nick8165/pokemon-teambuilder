import React from "react"

function Stats({ stats }) {

    function extractStats(array) {
        let newArray = []
        for (let i =0; i < array.length; i++) {
            newArray.push(array[i].base_stat)
        }
        return newArray.map((move) => {return (<option key={move}>{move}</option>)})
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
                <div key="IV hp">hp:
                    <button>+</button>
                    <span>0</span>
                    <button>-</button>
                </div>
                <div key="IV attack">attack:
                    <button>+</button>
                    <span>0</span>
                    <button>-</button>
                </div>
                <div key="IV defense">defense:
                    <button>+</button>
                    <span>0</span>
                    <button>-</button>
                </div>
                <div key="IV special-attack">special-attack:
                    <button>+</button>
                    <span>0</span>
                    <button>-</button>
                </div>
                <div key="IV special-defense">special-defense:
                    <button>+</button>
                    <span>0</span>
                    <button>-</button>
                </div>
                <div key="IV speed">speed:
                    <button>+</button>
                    <span>0</span>
                    <button>-</button>
                </div>
            </div>
        </div>
    )
}

export default Stats