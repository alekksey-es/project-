import React from "react";
import MainBlock from "./components/mainblock/MainBlock";
import AboutBlock from "./components/aboutblock/AboutBlock";
import LastBlock from "./components/lastblock/LastBlock";



function App() {
   return(
       <div>
            <MainBlock/>,
            <AboutBlock/>,
            <LastBlock/>
       </div>

   );
}

export default App;
