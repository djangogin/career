import React from "react";
import OrganizationalChart from "./components/orgChart";
import Button from "./components/button";
import employees from "./data_2";

const App = () => {
  return (
    <>
        <Button onClick={() => { console.log('!!!!'); }}>Нажми меня</Button>
      <h1 className="title">Приемники ГК Росатом</h1>
      <OrganizationalChart data={employees} />



    </>
  );
};

export default App;
