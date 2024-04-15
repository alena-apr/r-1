import { Fragment, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./input.module.scss";
import { getCities, getCountries } from "./inputInfo";

function Input() {
  const [countries, setCountries] = useState([]);
  const [countryId, setCountryId] = useState("");
  const countriesLoading = countries.length == 0;

  const [cities, setCities] = useState([]);
  const [cityId, setCityId] = useState("");
  const [citiesLoading, setCitiesLoading] = useState(false);

  useEffect(() => {
    getCountries().then(setCountries);
  }, []);

  useEffect(() => {
    (async () => {
      setCityId("");
      setCitiesLoading(true);
      setCities(countryId ? await getCities(countryId) : []);
      setCitiesLoading(false);
    })();
  }, [countryId]);

  return (
    <Fragment>
      <Layout>
        <main className={styles.main}>
          <div className={styles.label}>
            <label htmlFor="country">Выберите страну:</label>
          {countriesLoading && <span>Loading...</span>}
        </div>
          
          <select
            name="country"
            id="country"
            value={countryId}
            onChange={(e) => {
              setCountryId(e.target.value);
            }}
          >
            <option value="" disabled={countriesLoading}>
              Страна не выбрана
            </option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <div className={styles.label}>
            <label htmlFor="citiy">Выберите город:</label>
          {citiesLoading && <span>Loading...</span>}
          </div>
          <select
            name="citiy"
            id="citiy"
            value={cityId}
            onChange={(e) => {
              setCityId(e.target.value);
            }}
          >
            <option value="" disabled={citiesLoading}>
              Город не выбран
            </option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          <div>
            Check: countryId: {countryId} cityId : {cityId}
          </div>
        </main>
      </Layout>
    </Fragment>
  );
}

export default Input;
