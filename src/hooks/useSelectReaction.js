import { useEffect } from "react";
import { selectDataPacker, selectInitValue, selectLoadingValue } from "../routes/Input/constants";
import { dataToSelect } from "../routes/Input/inputInfo";

function useSelectReactions(selectEmmiter, selectDataFn, selectUpdater) {
    useEffect(() => {
        (async () => {
          if (selectEmmiter.value == "") {
            selectUpdater(selectInitValue);
          } else {
            selectUpdater(selectLoadingValue);
            selectDataFn(selectEmmiter.value).then((data) =>
            selectUpdater(selectDataPacker(dataToSelect(data)))
            );
          }
        })();
      }, [selectEmmiter.value, selectDataFn, selectUpdater]);
}

export default useSelectReactions;