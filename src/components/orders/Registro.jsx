import { useState } from "react";
import { v4 } from "uuid";
import {
  TextField,
  Select,
  SelectChangeEvent,
  MenuItem,
  InputLabel
} from "@mui/material";
//import Tallas from "../childs-componets/Tallas";
import tallas from "../../data/tallas.json";

const Registro = () => {
  ///console.log(v4());
  const { ropa } = tallas[0];
  const [serie, setSerie] = useState();
  const GenerateSerie = () => {
    return v4();
  };

  return (
    <>
      <ul>
        <li>Data CLient </li>
        <li>Numero de Orden </li>
        <li>Data CLient </li>
      </ul>

      <button onClick={() => setSerie(GenerateSerie())}>Crear Pedido</button>
      {serie ? <h1>{serie} </h1> : <h1>No existe la serie</h1>}

      <p>TALLAS</p>
      <div>
        {/* <Tallas /> */}
        <InputLabel id="select-tall">Talla</InputLabel>
        <Select
          labelId="select-tall"
          id="demo-simple-select-autowidth"
          // value={age}
          // onChange={handleChange}
          autoWidth
          label="TallAs"
        >
          <MenuItem value={0} defaultChecked="true">
            {" "}
            Seleccione
          </MenuItem>
          {ropa.map((tall) => (
            <MenuItem value={tall.id} key={tall.id}>
              {tall.slug}
            </MenuItem>
          ))}
        </Select>
      </div>
      <TextField
        id="outlined-basic"
        label="Cantidad"
        variant="outlined"
        type="number"
      />
    </>
  );
};

export default Registro;
