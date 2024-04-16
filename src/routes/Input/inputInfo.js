async function getCountries() {
  await timeout(1000);

  return [
    { id: 1, name: "Russia" },
    { id: 2, name: "China" },
    { id: 3, name: "India" },
  ];
}

async function getCities(countryId) {
  await timeout(1500);

  const cities = [
    { id: 1, country_id: 1, name: "Moscow" },
    { id: 2, country_id: 2, name: "Pekin" },
    { id: 3, country_id: 3, name: "Deli" },
    { id: 4, country_id: 2, name: "Guandjou" },
    { id: 5, country_id: 1, name: "Sank-Peterburg" },
    { id: 6, country_id: 1, name: "Kazan`" },
  ];

  return cities.filter((city) => city.country_id == countryId);
}

export function dataToSelect(data) {
  return data.map(({id, name}) => ({value: id, text: name}))
}

async function timeout(time) {
  return new Promise(function (resolve) {
    window.setTimeout(resolve, time);
  });
}

export { getCountries, getCities };
