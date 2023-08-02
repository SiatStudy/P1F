import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import momentPlugin from '@fullcalendar/moment';
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import Modal from "react-modal";

import { getDataByKey } from "../service/indexedDB/getDataByKey";
import { setCurrentYear } from "../store/selectedYear";
import { useSectionReturn } from "../store/userLogin";
import { findWidthObject } from "../util/dataUtils/findWidthObject";
import todoData from "../apis/apis";
import "./Datepicker.scss";
import DatepickerContent from "./DatepickerContent";
import style from './DatepickerModal.module.scss';


/**
 * Todo 데이터 조작 함수
 * @param {Object} options - 함수에 필요한 옵션 객체
 * @param {string} options.width- window의 width 값을 받아옴
 * @param {string} options.mode - 실행 모드 ("list", "calendar")
 * @returns {Promise} Promise 객체를 반환하며, 조회 또는 성공 시 해당 결과를 반환합니다.
 */

export const Calendar = ({ width, mode }) => {
    const currentYear = useSelector(state => state.selectedYear);
    const dispatch = useDispatch();

    const [event, setEvent] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false); // 팝업창 열고 닫기 state

    const dateSetFunc = dateInfo => {
        const calendarDate = dateInfo.view.calendar.getDate();

        if(currentYear !== calendarDate.getFullYear()) {
            dispatch(setCurrentYear(calendarDate.getFullYear()));
            getDataByKey(currentYear.selectedYear).then(res => {
                if(res) {
                    setEvent(res);
                } else {
                    const Data = {
                        ID : dispatch(useSectionReturn),
                        yDate : currentYear
                    };
                    //TODO : todoData(process.env.MAIN_URL + '/todos', Data, "general").then(res => setEvent(res));
                }
            });
        }
    };

    const handlemodal = (data) =>{
        setModalIsOpen(data);
    }

    const AddButton = {
        text : "+",
        click : function () {
            setModalIsOpen(true)
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
                    events={event}
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
            <Modal isOpen={modalIsOpen} className={style.modalCustom}>
                <DatepickerContent onChangeModal={handlemodal} />
            </Modal>
        </>
    );
}
