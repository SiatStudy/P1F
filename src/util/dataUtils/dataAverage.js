import { useDispatch } from "react-redux";
import { getDataByKey } from "../../service/indexedDB/getDataByKey";
import { resetYear, returnYear } from "../../store/selectedYear";

export const dataAverage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    dispatch(resetYear());
    const currentYear = dispatch(returnYear());

    const data = getDataByKey(currentYear);

    let count = 0;

    if(Array.isArray(data)) {
        data.forEach(item => {
            if(item && item.state === true) {
                count++;
            }
        });
    }

    return count / data.length;
}