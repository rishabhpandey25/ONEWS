import { Button} from "antd";
import React from "react";
import { useHistory } from "react-router";
import "./Header.css";

const Header = (props) => {
    const history = useHistory();
    const root = () =>{
      history.push("/");
    }
    const business = () =>{
      history.push("/business");
    }
    const technology = () =>{
      history.push("/tech");
    }
    const sports = () =>{
      history.push("/sports");
    }
    return (
        <div className="header">
        <div className="header-title" onClick={root}>
          <img src="Onews_logo.png" alt="QKart-icon"></img>
        </div>
        <div className="header-action">
          <Button type="primary" size="large" className="switch-button" onClick={business}>Business</Button>
          <Button type="primary" size="large" className="switch-button" onClick={technology}>Technology</Button>
          <Button type="primary" size="large" className="switch-button" onClick={sports}>Sports</Button>
        </div>
      </div>
    );
}

export default Header;