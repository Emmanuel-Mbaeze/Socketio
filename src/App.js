import React from "react";

import { io } from "socket.io-client";
import BestMemories from "./component/BestMemories";

io("http://localhost:1966");

const App = () => {
  return (
    <div>
      <h1>sockets.io</h1>
      <BestMemories />
    </div>
  );
};
export default App;
