import React from "react";
import Clock from "react-live-clock";
import Reactstrap from "./Reactsrap";

function App() {
  return (
    <>
      <Clock format={"h:mm:ssa"} style={{ fontSize: "1.5em" }} ticking={true} />
      <Reactstrap />
    </>
  );
}

export default App;
