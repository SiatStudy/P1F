import {isEventObjBack} from "../validation/isEventObjBack";

export const objFromBack = (event) => {
    const getObj = isEventObjBack(event);

    return {
        id : getObj.id,
        title : getObj.title,
        extendedProps : {
            eventContent : getObj.content
        },
        start : getObj.startDate.split("T")[0],
        end : getObj.endDate.split("T")[0],
        constraint : {
            startTime : getObj.startDate.split("T")[1],
            endTime : getObj.endDate.split("T")[1]
        },
        state : getObj.status === 1
    }
}