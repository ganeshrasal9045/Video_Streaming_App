import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {

  const [searchQuery, setSearchQuery,] = useState("");
  // console.log(searchQuery);

  const [Suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store)=>store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // API CALL
    // console.log(searchQuery);
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery])
      } else {
        getSearchSuggestion()
      }
    },200);

    return()=>{
      clearTimeout(timer)
    };
    
  }, [searchQuery]);

  const getSearchSuggestion = async() => {
    // console.log("API CALL - ",searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json()
    // console.log(json[1]);
    setSuggestion(json[1]);

    // Update Cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg sticky top-0 bg-cyan-50">
      {/* left-section --> Hamburger-icon,logo */}
      <div className="flex col-span-1 justify-start">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-10 mx-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="youtube-logo"
          />
        </a>
      </div>
      {/* middle-section --> search-input */}
      <div className="col-span-10 text-center">
        <div>
        <input
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          className="w-1/2 border border-gray-400 py-1.5 px-4 rounded-l-full"
          type="text"
          value={searchQuery}
          placeholder="Search"
          name="search"
        />
        <button
          className="border border-gray-400 py-1.5 px-4 rounded-r-full bg-gray-100"
          type="submit"
        >
          <i className="fa fa-search"></i>
        </button>
        </div>
        {
          showSuggestion ?  (<div className="bg-cyan-50 w-[26.7rem] border border-gray-200 ml-48 px-2 py-2 text-left rounded-lg mt-1 fixed shadow-lg">
          <ul>
            {
              Suggestion.map((s) => (<li key={s} className="px-3 py-1 cursor-pointer hover:bg-cyan-200">🔎 {s}</li>))
            }
          </ul>
        </div>):null
        }
      </div>
      {/* right-section --> create, notification, user-icon  */}
      <div className="flex col-span-1 justify-end">
        <img
          className="h-10 mx-10"
          src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
          alt="notification-icon"
        />
        <img
          className="h-10"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
