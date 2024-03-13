import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggList,setSuggList]=useState([])
  const [showSugg,setShowSugg]=useState(false)
  const navigate=useNavigate();
  const getSearchSuggestions= async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json=await data.json();
    setSuggList(json[1])
    dispatch(cacheResults({
        [searchQuery]:json[1],
    }))
  }
  const searchCache=useSelector(store=>store.search)
//   console.log(searchCache)
  useEffect(() => {
    const timer=setTimeout(()=>{
        if(searchCache[searchQuery])
        {
            setSuggList(searchCache[searchQuery])
        }
        else{
            getSearchSuggestions();
        }
        
    },200)
    return()=>{
        clearTimeout(timer);
    }
  }, [searchQuery]);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const handleSearchResult=()=>{
    // e.preventDefault();
    setShowSugg(false)
    console.log("clicked",searchQuery)
    navigate("/search?q="+searchQuery);
  }
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex items-center col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-12"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            alt="logo"
          />
        </a>
      </div>
      <div className=" col-span-10 px-10">
        <div>
        <input
          className="h-8 w-1/2 border border-gray-400 rounded-l-full p-2"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=>setShowSugg(true)}
          onBlur={()=>setShowSugg(false)}
        />
        <button className=" border border-gray-400 h-8 w-16 rounded-r-full overflow-hidden " onClick={handleSearchResult}>
          Search
        </button>
        </div>
        {
            showSugg && <div className="fixed bg-white py-2 px-2 w-[34rem] shadow-lg rounded-lg border-gray-100">
            <ul>
                {
                    suggList.map((item,index)=>{
                        return <li key={index} className="py-2 px-3 shadow-sm hover:bg-gray-100">{item}</li>
                    })
                }
            </ul>
        </div>
        }
      </div>
      <div className="col-span-1 flex items-center">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
