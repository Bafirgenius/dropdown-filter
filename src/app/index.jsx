import React, { useState } from "react";

import Dropdown from "./dropdown";
import data from "../data/animals.json";

export default function App() {
  const [value, setValue] = useState(null);
  return (
    <div style={{ width: 200 }}>
      <Dropdown options={data} id="id" label="name" prompt="Select animal..." value={value} onChange={(val) => setValue(val)} />
    </div>
  );
}
