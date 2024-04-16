import pt from "prop-types";
import { Fragment } from "react";
import styles from "./../../routes/Input/input.module.scss";

Select.propTypes = {
  name: pt.string.isRequired,
  options: pt.array.isRequired,
  value: pt.oneOfType([pt.number, pt.string]).isRequired,
  onChange: pt.func.isRequired,
  label: pt.string.isRequired,
  disabled: pt.bool,
  placeholder: pt.string,
  loading: pt.bool,
};

function Select({
  name,
  options,
  value,
  onChange,
  label,
  disabled = false,
  placeholder = undefined,
  loading = false,
}) {
  return (
    <Fragment>
      <div className={styles.label}>
        <label>{label}</label>
        {loading && <span>Loading...</span>}
      </div>
      <select
        name={name}
        id="country"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {placeholder != undefined && (
          <option value="" disabled={disabled}>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </Fragment>
  );
}

export default Select;
