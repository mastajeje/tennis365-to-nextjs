'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SearchBar from "../SearchBar/SearchBar";
import {
    faBars,
    faShoppingCart,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function NavBar(){
    return (
        <div className="nav-container">
        <nav className="bottom-nav">
          <ul className="bottom-nav__ul">
            <li className="fa-icon fa-bars">
              <FontAwesomeIcon icon={faBars} onClick={()=>{}} />
            </li>
            <SearchBar />
            { (
              <>
                <li className="fa-cart">
                  <Link href="/cart">
                    <div className="fa-icon">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                  </Link>
                </li>
                <li>
                  <div onClick={()=>{}} className="user-icon">
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
    )
    }