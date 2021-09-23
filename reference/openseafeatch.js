/*
  https://docs.opensea.io/reference/getting-assets
  limit: 20
  collection: boredapeyachtclub
*/

const options = { method: "GET" };

fetch(
  "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=boredapeyachtclub",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
