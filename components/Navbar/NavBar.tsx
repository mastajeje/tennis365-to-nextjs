'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SearchBar from "../SearchBar/SearchBar";
import {
    faBars,
    faShoppingCart,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Navbar.module.scss"
export default function NavBar(){
    const [isSideBarShowing, setIsSideBarShowing] = useState(false);

    const toggleSideBar = () => {
        setIsSideBarShowing(!isSideBarShowing);
    }
    return (
        <>
        <div className={styles["nav-container"]}>
        <nav className={styles["bottom-nav"]}>
          <ul className={styles["bottom-nav__ul"]}>
            <li className={styles["fa-icon fa-bars"]}>
              <FontAwesomeIcon icon={faBars} onClick={toggleSideBar} />
            </li>
            <SearchBar />
            { (
              <>
                <li className={styles["fa-cart"]}>
                  <Link href="/cart">
                    <div className={styles["fa-icon"]}>
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                  </Link>
                </li>
                <li>
                  <div onClick={()=>{}} className={styles["user-icon"]}>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                </li>
              </>
            )}
            {/* {!authState.isAdmin && (
              <>
                <li className="fa-cart">
                  <Link to="/cart">
                    <div className="fa-icon">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                  </Link>
                </li>
                <li>
                  <div onClick={toMyPage} className="user-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                </li>
              </>
            )} */}
          </ul>
        </nav>
      </div>
        <Sidebar isShowing={isSideBarShowing}/>
        </>
    )
    }