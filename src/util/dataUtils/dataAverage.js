import { useDispatch, useSelector } from "react-redux";
import { getDataByKey } from "../../service/indexedDB/getDataByKey";

export const dataAverage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const currentYear = useSelector((state) => state);
    const dispatch = useDispatch();

    

    const data = getDataByKey()
}