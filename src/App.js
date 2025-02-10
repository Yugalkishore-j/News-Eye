import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import LoadingBar from "react-top-loading-bar";


const App=()=>{
   const [progress, setProgress] = useState(0);
    return (
      <>
        <Router>
          <div>
            <Navbar />
            <LoadingBar color="#f11946" progress={progress} />
            <Routes>
              <Route exact path="/" key="" element={<News setProgress={setProgress} pageSize={10} country="us" category="general" />} />
              <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={10} country="us" category="business"/>}/>
              <Route exact path="/entertainment/" element={<News setProgress={setProgress} key="entertainment" pageSize={10} country="us" category="entertainment"/>}/>
              <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={10} country="us" category="health"/>}/>
              <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={10} country="us" category="general"/>}/>
              <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={10} country="us"category="science"/>}/>
              <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={10} country="us" category="sports"/>}/>
              <Route exact path="/technology" element={<News setProgress={setProgress}key="technology" pageSize={10} country="us" category="technology"/>}/>
            </Routes>
          </div>
        </Router>
      </>
    );
  } 
  
export default App ;
