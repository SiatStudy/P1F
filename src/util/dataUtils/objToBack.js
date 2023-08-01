import { isEventObjFront } from "../validation/isEventObjFront";

export const objToBack = (event) => {
    const sendObj = isEventObjFront(event);

    return {
        id : sendObj.id,
        title : sendObj.title,
        content : sendObj.extendedProps.eventContent,
        startDate : `${sendObj.start}T${sendObj.constraint.startTime}`,
        endDate : `${sendObj.end}T${sendObj.constraint.endTime}`,
        status : sendObj.state ? 1 : 0
    }
}