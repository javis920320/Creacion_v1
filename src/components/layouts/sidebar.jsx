import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faHome,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { items } from "../../data/items.js";
import "./styles.css";

//import "react-responsive-carousel/lib/styles";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="btn-open">{"<"}</button>
      <div>Logo</div>
      <div>lorem</div>
      <ul>
        <small>
          <strong>General</strong>
        </small>
        {items.map((d) => (
          <div className="items">
            <div className="icon-item">
              <FontAwesomeIcon icon={d.Icon} />
            </div>
            <div>
              <li key={d.id}>{d.Nombre}</li>
            </div>
          </div>
        ))}
        <div className="items-config ">
          <div>
            <button className="btn-primary">
              {" "}
              <i className="ri-arrow-go-back-line"></i>Cerrar Sesion
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
