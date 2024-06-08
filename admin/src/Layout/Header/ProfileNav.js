import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { Media } from "reactstrap";
import Cookies from "js-cookie";
import { RiArrowDownSLine, RiQuestionLine, RiUserLine } from "react-icons/ri";
import AccountContext from "../../Helper/AccountContext";
import Avatar from "../../Components/CommonComponent/Avatar";
import Btn from "../../Elements/Buttons/Btn";
import ShowModal from "../../Elements/Alerts&Modals/Modal";
// import I18NextContext from "@/Helper/I18NextContext";
// import { useTranslation } from "@/app/i18n/client";

const ProfileNav = ({ isComponentVisible, setIsComponentVisible }) => {
  // const { i18Lang } = useContext(I18NextContext);
  // const { t } = useTranslation(i18Lang, 'common');
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const { accountData, accountContextData } = useContext(AccountContext)
  const isStateData = accountContextData.image && Object?.keys(accountContextData.image).length > 0 || accountContextData.image == ''
  const handelLogout = () => {
    Cookies.remove("uat");
    Cookies.remove("ue");
    Cookies.remove("account");
    localStorage.removeItem("account")
    localStorage.removeItem("role");
    router.push(`/login`);
  }
  return (
    <>
      <li className="profile-nav onhover-dropdown pe-0 me-0">
        <Media className="profile-media" onClick={() => setIsComponentVisible((prev) => prev !== "account" ? "account" : "")}>
          <Avatar data={isStateData ? accountContextData.image : accountData?.profile_image} name={accountData} customeClass={'rounded-circle'} />
          <Media body className="user-name-hide">
            <span>{accountContextData.name !== "" ? accountContextData.name : accountData?.name}</span>
            <p className="mb-0 font-roboto">
              {accountData ? accountData?.role?.name : "Tài khoản"}
              <RiArrowDownSLine className="middle" />
            </p>
          </Media>
        </Media>
        <ul className={`profile-dropdown onhover-show-div ${isComponentVisible == "account" ? "active" : ""}`}>
          <li >
            <Link href={`/account`}>
              <RiUserLine />
              <span>{"Tài khoản của tôi"}</span>
            </Link>
          </li>
          <li>
            <a onClick={() => setModal(true)}>
              <FiLogOut />
              <span>{"Đăng xuất"}</span>
            </a>
          </li>
        </ul>
      </li>
      <ShowModal open={modal} close={false}
        buttons={
          <>
            <Btn title="Đóng" onClick={() => setModal(false)} className="btn--no btn-md fw-bold" />
            <Btn title="Chấp nhận" onClick={() => handelLogout()} className="btn-theme btn-md fw-bold"></Btn>
          </>
        }>
        <div className="remove-box">
          <RiQuestionLine className="icon-box wo-bg" />
          <h5 className="modal-title">{"Chấp nhận"}</h5>
          <p>{"Bạn có muốn đăng xuất?"} </p>
        </div>
      </ShowModal>
    </>
  );
};

export default ProfileNav;
