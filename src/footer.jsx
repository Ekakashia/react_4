import React from "react";

import photo from "./download.jpg"

class Footer extends React.Component{
    render() {
        return(
            <div className="d">
                 
                <a href="#"> <img src={photo} /></a>
                <a href="#">Ekaterine</a>
                <a href="#">Kashia</a>
               
            </div>
        )
    }
}

export default Footer;