import React from 'react'

const SearchedVideoCard = (props) => {
    const { info } = props;
	const { statistics, snippet } = info;
	const { channelTitle, title, thumbnails } = snippet;
	return (
		<div className="p-2 m-2 h-80 w-64 shadow-md">
			<img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
			<ul>
				<li className="font-bold py-2 text-base">{title}</li>
				<li className="font-semibold text-sm my-1">{channelTitle}</li>
				{statistics && (
					<li>{(statistics.viewCount)} views</li>
				)}
			</ul>
		</div>
	);
}

export default SearchedVideoCard