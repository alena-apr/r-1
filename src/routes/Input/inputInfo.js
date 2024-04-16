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

export async function getHotels(cityId){
	await timeout(500);

	const hotels = [
		{ id: 1, city_id: 1, name: 'Moscow_Hotel' },
		{ id: 2, city_id: 2, name: 'Pekin_Hotel' },
		{ id: 3, city_id: 3, name: 'Deli_Hotel' },
		{ id: 4, city_id: 4, name: 'Guandjou_Hotel' },
		{ id: 5, city_id: 5, name: 'Sank-Peterburg_Hotel' },
		{ id: 6, city_id: 6, name: 'Kazan_Hotel`' },
		{ id: 7, city_id: 1, name: 'Moscow_Hotel 2' },
		{ id: 8, city_id: 2, name: 'Pekin_Hotel 2' },
		{ id: 9, city_id: 3, name: 'Deli_Hotel 2' },
		{ id: 10, city_id: 4, name: 'Guandjou_Hotel 2' },
		{ id: 11, city_id: 5, name: 'Sank-Peterburg_Hotel 2' },
		{ id: 12, city_id: 6, name: 'Kazan_Hotel 2`' }
	];

	return hotels.filter(hotel => hotel.city_id == cityId);
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
