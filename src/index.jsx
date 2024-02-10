import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./footer";
import Header from "./header";

import "./assets/style.css";


function App() {
     
    function aler() {

        window.alert("hello world");
   }


    return (
        <React.Fragment>
          
           <Header></Header>

            <button type="button" onClick={aler}>click</button>

            <Footer></Footer>

       </React.Fragment>
    )
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);