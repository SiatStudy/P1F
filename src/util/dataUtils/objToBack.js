import { isEventObjFront } from "../validation/isEventObjFront";

export const objToBack = (event) => {
    const sendObj = isEventObjFront(event);

    return {
        //TODO: id 추가
        title : sendObj.title,
        content : sendObj.extendedProps.eventContent,
        startDate : `${sendObj.start}T${sendObj.constraint.startTime}`,
        endDate : `${sendObj.end}T${sendObj.constraint.endTime}`,
        status : sendObj.state ? 1 : 0
    }
}