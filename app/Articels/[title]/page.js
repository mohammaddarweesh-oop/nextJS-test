import React from "react";

function Title(props) {
  console.log(props);
  return (
    <div>
      <h1>Title</h1>
      <h2>{props.params.title}</h2> 
    </div>
  );
}

export default Title;
