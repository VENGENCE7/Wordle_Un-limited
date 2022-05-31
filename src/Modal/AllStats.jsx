import React, { useContext } from "react";
import { ModalContext } from "./Modal";

function AllStats() {
  const { allstats } = useContext(ModalContext);

//   console.log(allstats);
  return (
    <div>
      <span>Hello</span>
    </div>
  );
}

export default AllStats;
