import { Fragment, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./input.module.scss";
import { getCities, getCountries, dataToSelect, getHotels } from "./inputInfo";
import Select from "../../components/Input/Select";
import {
  selectDataPacker,
  selectLoadingValue,
  selectInitValue,
} from "./constants";
import useSelectReactions from "../../hooks/useSelectReaction";

function Input() {
  const [countries, setCountries] = useState(selectLoadingValue);
  const [cities, setCities] = useState(selectInitValue);
  const [hotels, setHotels] = useState(selectInitValue);

  useEffect(() => {
    getCountries().then((data) =>
      setCountries(selectDataPacker(dataToSelect(data)))
    );
  }, []);

  useSelectReactions(countries, getCities, setCities);
  useSelectReactions(cities, getHotels, setHotels);

  // useEffect(() => {
  //   (async () => {
  //     if (countries.value == "") {
  //       setCities(selectInitValue);
  //     } else {
  //       setCities(selectLoadingValue);
  //       getCities(countries.value).then((data) =>
  //         setCities(selectDataPacker(dataToSelect(data)))
  //       );
  //     }
  //   })();
  // }, [countries.value]);

  return (
    <Fragment>
      <Layout>
        <main className={styles.main}>
          <Select
            {...countries}
            onChange={(value) => setCountries({ ...countries, value })}
            label="Выбирите страну"
            name="country"
            placeholder="Страна не выбрана"
            disabled={countries.loading}
          />

          <Select
            {...cities}
            onChange={(value) => setCities({ ...cities, value })}
            label="Выбирите город"
            name="city"
            placeholder="Город не выбран"
            disabled={cities.options.lengh == 0}
          />

          <Select
            {...hotels}
            onChange={(value) => setHotels({ ...hotels, value })}
            label="Выбирите отель"
            name="hotel"
            placeholder="Отель не выбран"
            disabled={hotels.options.lengh == 0}
          />

          <div>
            Check: countryId: {countries.value} cityId : {cities.value} hotelId : {hotels.value}
          </div>
        </main>
      </Layout>
    </Fragment>
  );
}

export default Input;
