import { useDispatch, useSelector } from "react-redux";
import { setCurrentYear } from "../store/selectedYear";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import momentPlugin from '@fullcalendar/moment';
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

import { findWidthObject } from "../util/dataUtils/findWidthObject";

export const Calendar = ({ width, mode }) => {
    const currentYear = useSelector(state => state.selectedYear);
    const dispatch = useDispatch();

    const dateSetFunc = dateInfo => {
        const calendarDate = dateInfo.view.calendar.getDate();

        if(currentYear !== calendarDate.getFullYear()) {
            dispatch(setCurrentYear(calendarDate.getFullYear()));
            //TODO: 년도 바뀔 때 indexedDB 검색 없을 경우 Backend 요청
        }
    };

    const AddButton = {
        text : "+",
        click : function () {
            //TODO: 이벤트 추가 팝업 이벤트
        }
    };

    const widthObject = {
        390 : {
            headerToolbar : {
                start : "title",
                center : "",
                end : "prev next AddEvent"
            },
            dayHeaderFormat : {
                year : "numeric",
                month : "numeric"
            },
            titleFormat : "YYYY.MM"
        },
        1020 : {
            headerToolbar: {
                start : "prev next",
                center : "title",
                end : "today AddEvent"
            },
            dayHeaderFormat : {
                year : "numeric",
                month : "2-digit"
            },
            titleFormat : "YYYY.MM"
        },
        1680 : {
            headerToolbar : {
                start : "today AddEvent",
                center : "title",
                end : "dayGridMonth dayGridWeek prev next"
            },
            dayHeaderFormat : {
                year : "numeric",
                month : "2-digit"
            },
            titleFormat : "YYYY-MM"
        }
    };

    return (
        <>
            {mode === "calendar" ?
                <FullCalendar
                    plugins={[dayGridPlugin, momentPlugin, interactionPlugin]}
                    headerToolbar={findWidthObject(width, widthObject).headerToolbar}
                    dayHeaderFormat={findWidthObject(width, widthObject).dayHeaderFormat}
                    titleFormat={findWidthObject(width, widthObject).titleFormat}
                    customButtons={{AddEvent: AddButton}}
                    //event Object
                    datesSet={dataInfo => dateSetFunc(dataInfo)}
                    initialView={"dayGridMonth"}
                />
                : <FullCalendar
                    plugins={[listPlugin, momentPlugin]}
                    headerToolbar={{
                        start : "title",
                        center : "",
                        end : ""
                    }}
                    titleFormat={"YYYY.MM.({DD})"}
                    initialView={"listWeek"}
                />
            }
        </>
    );
}
