import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SearchedVideoCard = (props) => {
  const { info } = props;
  const { snippet } = info;
  const { channelTitle, title, thumbnails,description } = snippet;
  return (
    <div className="p-2 m-5 h-60 w-full flex flex-row hover:scale-105">
      <div>
        <img
          className="rounded-lg w-80 h-60"
          src={thumbnails.high.url}
          alt="thumbnail"
        />
      </div>
      <div>
        <ul>
          <li className="font-bold px-5 py-2 text-base">{title}</li>
          <li className="px-5 py-2  text-sm my-1"><AccountCircleIcon fontSize="large"/>{channelTitle}</li>
          <li className="px-5 py-2  text-sm my-1">{description}</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchedVideoCard;
