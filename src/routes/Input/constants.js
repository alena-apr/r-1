const selectInitValue = { loading: false, options: [], value: "" };
const selectLoadingValue = { loading: true, options: [], value: "" };
const selectDataPacker = (options) => ({ ...selectInitValue, options });

export { selectInitValue, selectLoadingValue, selectDataPacker };
