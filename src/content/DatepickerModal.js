import Modal from "react-modal";
import { useState } from "react";
import {ReactComponent as Addfill } from "../svg/Addfill.svg";
import "./Datepicker.css";
import DatepickerContent from "./DatepickerContent";
import style from './DatepickerModal.module.css';

function DatepickerModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false); // 팝업창 열고 닫기 state

    const handlemodal = (data) =>{
        setModalIsOpen(data);
    }

    return(
        <>
            <button onClick={()=>setModalIsOpen(true)}><Addfill className="Addfill-custom" /></button>
            <Modal isOpen={modalIsOpen} className={style.modalCustom}>
                <DatepickerContent onChangeModal={handlemodal} />
            </Modal>
        </>
    )
}

export default DatepickerModal;