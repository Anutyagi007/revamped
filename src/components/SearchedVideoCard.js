import React from "react";

const SearchedVideoCard = (props) => {
  const { info } = props;
//   console.log(props);
  const { snippet } = info;
  // console.log(statistics)
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 h-48 w-[900px] shadow-md flex flex-row">
      <div>
        <img
          className="rounded-lg w-60 h-40"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
      </div>
      <div>
        <ul>
          <li className="font-bold px-5 py-2 text-base">{title}</li>
          <li className="px-5 py-2  text-sm my-1">{channelTitle}</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchedVideoCard;
