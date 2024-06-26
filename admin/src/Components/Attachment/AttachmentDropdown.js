import React, { useContext, useState } from "react";
import { RiDeleteBin2Line, RiDeleteBinLine, RiMoreFill } from "react-icons/ri";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import ShowModal from "../../Elements/Alerts&Modals/Modal";
import Btn from "../../Elements/Buttons/Btn";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";

const AttachmentsDropdown = ({ state, dispatch, id }) => {

    const [modal, setModal] = useState(false);
    // const [destroy] = usePermissionCheck(["destroy"]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    let temp = [...state.deleteImage];

    const openModal = (e) => {
        e.preventDefault()
        setModal(true)
    }

    const deleteImage = (id) => {
        temp.splice(temp.indexOf(id), 1);
        dispatch({ type: "DeleteSelectedImage", payload: temp });
        setModal(false)
    }
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} >
            <DropdownToggle><RiMoreFill /></DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
                 <li>
                    <DropdownItem className="dropdown-item d-flex align-items-center" onClick={openModal}>
                        <RiDeleteBin2Line className="me-2" />{"Xóa"}
                    </DropdownItem>
                    <ShowModal open={modal} close={false}
                        buttons={
                            <>
                                <Btn title="Đóng" onClick={() => setModal(false)} className="btn--no btn-md fw-bold" />
                                <Btn title="Chấp nhận" className="btn-theme btn-md fw-bold" onClick={() => {
                                    deleteImage(id)
                                }} />
                            </>
                        }>
                        <div className="remove-box">
                            <RiDeleteBinLine className="ri-delete-bin-line icon-box" />
                            <h2>{"Xóa sản phẩm"}?</h2>
                            <p>{"ThisItemWillBeDeletedPermanently" + " " + "YouCan'tUndoThisAction!!"} </p>
                        </div>
                    </ShowModal>
                </li> 
            </DropdownMenu>
        </Dropdown>
    );
};
export default AttachmentsDropdown;