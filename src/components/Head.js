import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import MicIcon from '@mui/icons-material/Mic';
import MenuIcon from '@mui/icons-material/Menu';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggList, setSuggList] = useState([]);
  const [showSugg, setShowSugg] = useState(false);
  const navigate = useNavigate();
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggList(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggList(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const handleSearchResult = () => {
    // e.preventDefault();
    setShowSugg(false);
    navigate("/search?q=" + searchQuery);
  };
  return (
    <div className="flex justify-between p-2 m-2 shadow-lg">
      <div className="flex items-center ">
        <MenuIcon fontSize="large" onClick={() => toggleMenuHandler()} className="bg-gray-100 cursor-pointer m-2 hover:bg-gray-200 rounded-full p-1"/>
        <a href="/">
          <img
            className="h-12"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            alt="logo"
          />
        </a>
      </div>
      <div className="w-3/4 ml-10 ">
        <div className="flex items-center text-center">
          <input
            className="h-8 w-1/2 border border-gray-400 rounded-l-full p-2"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSugg(true)}
            onBlur={() => setShowSugg(false)}
          />
          <button
            className=" border border-gray-400 h-8 w-16 rounded-r-full overflow-hidden "
            onClick={handleSearchResult}
          >
            <SearchIcon />
          </button>
        <MicIcon fontSize="large" className="bg-gray-100 m-2 hover:bg-gray-200 rounded-full p-1 cursor-pointer" />
        </div>
        {showSugg && (
          <div className="fixed bg-white py-2 px-2 w-[34rem] shadow-lg rounded-lg border-gray-100">
            <ul>
            {suggList && (
						<div className="fixed bg-white py-2 px-2 w-1/3 shadow-lg rounded-xl border border-gray-100">
							<ul>
								{suggList.map((suggestion, index) => (
									<Link to={"/search?q=" + suggestion} key={index}>
										<li
											className="py-2 px-3 rounded-full shadow-sm hover:bg-gray-200 cursor-default"
											onMouseDown={(e) => {
												setSearchQuery(suggestion);
											}}
										>
										  {suggestion}
										</li>{" "}
									</Link>
								))}
							</ul>
						</div>
					)}
            </ul>
          </div>
        )}
      </div>
      <div className=" flex items-center justify-evenly">
        <PodcastsIcon fontSize="large" className="bg-gray-100 cursor-pointer m-2 hover:bg-gray-200 rounded-full p-1"/>
        <NotificationsNoneIcon fontSize="large" className="bg-gray-100 cursor-pointer m-2 hover:bg-gray-200 rounded-full p-1"/>
        <AccountCircleIcon fontSize="large" className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default Head;
