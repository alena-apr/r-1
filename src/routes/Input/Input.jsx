import { Fragment, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./input.module.scss";
import { getCities, getCountries, dataToSelect } from "./inputInfo";
import Select from "../../components/Input/Select";

const selectInitValue = { loading: false, options: [], value: "" };
const selectLoadingValue = { loading: true, options: [], value: "" };
const selectDataPacker = (options) => ({ ...selectInitValue, options });

function Input() {
  const [countries, setCountries] = useState(selectLoadingValue);

  const [cities, setCities] = useState(selectInitValue);

  useEffect(() => {
    getCountries().then((data) =>
      setCountries(selectDataPacker(dataToSelect(data)))
    );
  }, []);

  useEffect(() => {
    (async () => {
      if (countries.value == "") {
        setCities(selectInitValue);
      } else {
        setCities(selectLoadingValue);
        getCities(countries.value).then((data) =>
          setCities(selectDataPacker(dataToSelect(data)))
        );
      }
    })();
  }, [countries.value]);

  return (
    <Fragment>
      <Layout>
        <main className={styles.main}>
          <Select
            {...countries}
            onChange={(value) => setCountries({...countries, value})}
            label="Выбирите страну"
            name="country"
            placeholder="Страна не выбрана"
            disabled={countries.loading}
          />

          <Select
            {...cities}
            onChange={(value) => setCities({...cities, value})}
            label="Выбирите "
            name="city"
            placeholder="Город не выбран"
            disabled={cities.options.lengh == 0}
          />

          <div>
            Check: countryId: {countries.value} cityId : {cities.value}
          </div>
        </main>
      </Layout>
    </Fragment>
  );
}

export default Input;
