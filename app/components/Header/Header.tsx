// import { useContext } from "react";
// import { AuthContext } from "../../Context";
// import { Link, useHistory } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import styles from "./Header.module.scss";
// import Navbar from "../Navbar/Navbar";

import Link from "next/link";

const Header = () => {
    // const { authState, setAuthState } = useContext(AuthContext);
    // let history = useHistory();
  
    // const logout = () => {
    //   localStorage.removeItem("accessToken");
    //   setAuthState({
    //     username: "",
    //     id: 0,
    //     status: false,
    //   });
    //   history.push("/");
    // };
  
    return (
      <header className={styles["main-header"]}>
        <div className={styles["top-nav"]}>
          <ul>
            <li className={styles["title"]}>
              <Link href="/">
                <img src={"/nav-logo.jpg"} alt="logo" />
                <span>Tennis 365</span>
              </Link>
            </li>
            {/* {authState.isAdmin ? (
              <li className="links-container admin-menu">
                <div>
                  <Link href="/admin/post-item">
                    <span className="header-link">상품등록</span>
                  </Link>
                </div>
                <div>
                  <Link href="/admin/item-list">
                    <span className="header-link">상품목록</span>
                  </Link>
                </div>
                <div>
                  <Link href="/admin/user-list">
                    <span className="header-link">유저목록</span>
                  </Link>
                </div>
                <div>
                  <Link href="/admin/manage-order">
                    <span className="header-link">주문관리</span>
                  </Link>
                </div>
              </li>
            ) : null} */}
            {/* {!authState.status ? (
              <li className="links-container">
                <div>
                  <Link href="/login">
                    <span className="header-link">로그인</span>
                  </Link>
                </div>
                <div>
                  <Link href="/join">
                    <span className="header-link">회원가입</span>
                  </Link>
                </div>
              </li>
            ) : (
              <li className="logout-btn">
                <div className="logout-btn__username">
                  <strong>
                    {!authState.isAdmin
                      ? `${authState.username}님`
                      : `${authState.username}`}
                  </strong>
                </div>
                <button onClick={logout}>
                  <span className="header-link log-out">로그아웃</span>
                </button>
              </li>
            )} */}
          </ul>
        </div>
        {/* {authState.isAdmin ? (
          <div className="admin-menu">
            <div>
              <Link href="/admin/post-item">
                <span className="header-link">상품등록</span>
              </Link>
            </div>
            <div>
              <Link href="/admin/item-list">
                <span className="header-link">상품목록</span>
              </Link>
            </div>
            <div>
              <Link to="/admin/user-list">
                <span className="header-link">유저목록</span>
              </Link>
            </div>
            <div>
              <Link to="/admin/manage-order">
                <span className="header-link">주문관리</span>
              </Link>
            </div>
          </div>
        ) : null} */}
             <div className={styles["admin-menu"]}>
            <div>
              <Link href="/admin/post-item">
                <span className={styles["header-link"]}>상품등록</span>
              </Link>
            </div>
            <div>
              <Link href="/admin/item-list">
                <span className={styles["header-link"]}>상품목록</span>
              </Link>
            </div>
            <div>
              <Link href="/admin/user-list">
                <span className={styles["header-link"]}>유저목록</span>
              </Link>
            </div>
            <div>
              <Link href="/admin/manage-order">
                <span className={styles["header-link"]}>주문관리</span>
              </Link>
            </div>
          </div>
       
      </header>
    );
  };
  
  export default Header;
  