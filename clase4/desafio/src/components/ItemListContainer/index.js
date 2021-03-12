import React from "react";
import { ItemCount } from "../ItemCount";

export default function ItemListContainer() {
  return (
    <div className="container ">
      Items List
      <ItemCount stock="5" initial="1" />
    </div>
  );
}
