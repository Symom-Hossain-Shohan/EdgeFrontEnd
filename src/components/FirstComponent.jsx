import { Button } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
// import VolumeDown from "@mui/icons-material/VolumeDown";
// import VolumeUp from "@mui/icons-material/VolumeUp";
// import SecondComponetn from "./components/SecondComponetn";
import SecondComponetn from "./SecondComponetn";



const name = "Shohan";

function text(){
  return "My name is "; 
}
function FirstComponent(props) {
  // const {name, roll, emoji, fruits, fun, cmp} = props; 

  return(
    <div>
      {/* {{text()}{name}} */}
      {/* {name}
      {roll}
      {emoji}
      {fruits}
      {fun(3, 4)}
      {cmp} */}
      {/* {props.studentInfo.name}
      {props.studentInfo.roll}
      {props.studentInfo.emoji}
      {props.studentInfo.fav_foods.map((fav_food)=>(
        <p>{fav_food}</p>
      ))}
      {props.studentInfo.fav_color} */}

      <Button variant="contained">Button 1st component</Button>


    </div>
  );
}

export default FirstComponent;
