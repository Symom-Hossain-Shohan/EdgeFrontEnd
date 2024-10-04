import React from "react";
import FirstComponent from "./FirstComponent";

function ThirdComponent(props) {
  return (
    <div>
      {props.studentDetails.map((studentDetail) => (
        <div>{studentDetail.age < 25  ? <FirstComponent></FirstComponent> : <p>Age greater than 25</p>} </div>
      ))}
      {/* Test */}
    </div>
  );
}

export default ThirdComponent;
