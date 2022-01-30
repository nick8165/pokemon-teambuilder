import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import Pokemon from "./Pokemon";
import Team from "./Team";
import Roster from "./Roster";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

    const [page, setPage] = useState("/")

    return (
        <div className="App">
            <NavBar onChangePage={setPage} />
            <Routes>
              <Route exact path="/roster" element={<Roster />}/>  
              <Route exact path="/team" element={<Team />}/>
              <Route exact path="/" element={<Pokemon />}/>
              <Route path="*" element={<h1>404 not found</h1>}/>
            </Routes>
        </div>
    );
}

export default App;
