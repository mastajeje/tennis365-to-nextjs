'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar(){
    const [keyword, setKeyword] = useState("");
    // const [result, setResult] = useState([]);
    // let history = useHistory();
  
    const handleKeyword = (e) => {
      setKeyword(e.target.value);
    };
  
    // const search = (e) => {
    //   e.preventDefault();
    //   axios
    //     .get("https://tennis365-api.herokuapp.com/search", {
    //       params: { keyword },
    //     })
    //     .then((res) => {
    //       if (res.data.errorMessage) {
    //         alert(res.data.errorMessage);
    //       }
  
    //       history.push(`/search`, { searchResult: res.data });
    //       // setResult(res.data);
    //     });
    //   setKeyword("");
    // };

    return (
        <li className="search-box">
        <form className="searchBar" onSubmit={()=>{}}>
          <input
            type="text"
            name="keyword"
            onChange={handleKeyword}
            value={keyword}
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </li>
    )
    }