import React from "react";
import OrganizationalChart from "./components/orgChart";
import employees from "./data_2";

const App = () => {
  return (
    <>
      <h1 className="title">Приемники ГК Росатом</h1>
      <OrganizationalChart data={employees} />
    </>
  );
};

export default App;
