import React from "react";
import HeadwordRow from "./HeadwordRow";

export default function HeadwordTable() {
    return (
        <ul className="nav">
          <HeadwordRow />
          <HeadwordRow />
          <HeadwordRow />
        </ul>
    );
  }