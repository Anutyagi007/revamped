import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsCricketOutlinedIcon from "@mui/icons-material/SportsCricketOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CellTowerOutlinedIcon from '@mui/icons-material/CellTowerOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  //p-5 flex flex-col w-80 col-span-2
  return (
    <div className="p-5 flex flex-col w-48 sticky">
      <ul>
        <li className="cursor-pointer hover:bg-gray-200 rounded-lg">
          <Link to={"/"}>
            <HomeOutlinedIcon className="m-1 mr-3" fontSize="medium" />
            Home
          </Link>
        </li>
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <SubscriptionsOutlinedIcon className="m-1 mr-3" fontSize="medium" />
          Subscriptions
        </li>
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <VideocamOutlinedIcon className="m-1 mr-3" fontSize="medium" />
          Videos
        </li>
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <WatchLaterOutlinedIcon className="m-1 mr-3" fontSize="medium" />Watch
          Later
        </li>
      </ul>
      <hr class="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700" />
      <h1 className="font-bold text-xl">Explore</h1>
      <ul className="mt-1">
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <WhatshotOutlinedIcon className="m-1 mr-3" fontSize="medium" />
          Trending
        </li>
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <ShoppingCartOutlinedIcon className="m-1 mr-3" fontSize="medium" />
          Shopping
        </li>
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <CellTowerOutlinedIcon className="m-1 mr-3" fontSize="medium" />
          Live
        </li>
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <MusicNoteOutlinedIcon className="m-1 mr-3" fontSize="medium" />
          Music
        </li>
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <SportsCricketOutlinedIcon className="m-1 mr-3" fontSize="medium" />
          Sports
        </li>
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <SportsEsportsOutlinedIcon className="m-1 mr-3" fontSize="medium" />
          Gaming
        </li>
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <MovieCreationOutlinedIcon className="m-1 mr-3" fontSize="medium" />
          Movies
        </li>
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <NewspaperOutlinedIcon className="m-1 mr-3" fontSize="medium" />
          News
        </li>
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <LightbulbOutlinedIcon className="m-1 mr-3" fontSize="medium" />
          Learning
        </li>
      </ul>
      <hr class="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700" />
      <ul>
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <SettingsOutlinedIcon className="m-1 mr-3" fontSize="medium"/>Settings
        </li>
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <InfoOutlinedIcon className="m-1 mr-3" fontSize="medium"/>Help
        </li>
        <li className="cursor-pointer  hover:bg-gray-200 rounded-lg">
          <FeedbackOutlinedIcon className="m-1 mr-3" fontSize="medium"/>Send Feedback
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
