import { useState } from "react";

import Header from "./components/header";
import Form from "./components/form";
import Packinglist from "./components/packinglist";
import Stats from "./components/stats";
import { MainContext } from "./context/context";
import "./style/style.css";

function App() {
  //states
  const [number, setNumber] = useState(1);
  const [value, setValue] = useState("");
  const [content, setContent] = useState();
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  //context
  const provideData = {
    number,
    setNumber,
    value,
    setValue,
    data,
    setData,
    content,
    index,
    setIndex,
    setContent,
  };

  return (
    <div className="container">
      <MainContext.Provider value={provideData}>
        <Header />
        <Form />
        <Packinglist />
        <Stats />
      </MainContext.Provider>
    </div>
  );
}

export default App;
