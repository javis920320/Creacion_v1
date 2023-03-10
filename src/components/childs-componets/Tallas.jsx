import tallas from "../../data/tallas.json";
import "./childs.css";
const Tallas = () => {
  const { ropa } = tallas[0];
  return (
    <>
      <div className="tallas-component txtfield">
        <select name="" id="">
          {ropa.map((tall) => (
            <option key={tall.id} value={tall.id}>
              {tall.slug}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Tallas;
