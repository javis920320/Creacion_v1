import jsonS from "./items.json";

const loadData = () => {
  console.log(jsonS);

  fetch(jsonS, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

module.exports = {
  loadData
};
