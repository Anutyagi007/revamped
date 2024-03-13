import React from "react";
const commentData = [
  {
    name: "Anubhav Tyagi",
    text: "This is a nice Video",
    replies: [
      {
        name: "Anubhav Tyagi",
        text: "This is a nice Video",
        replies: [
          {
            name: "Anubhav Tyagi",
            text: "This is a nice Video",
            replies: [
              {
                name: "Anubhav Tyagi",
                text: "This is a nice Video",
                replies: [
                  {
                    name: "Anubhav Tyagi",
                    text: "This is a nice Video",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Anubhav Tyagi",
            text: "This is a nice Video",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Anubhav Tyagi",
    text: "This is a nice Video",
    replies: [],
  },
  {
    name: "Anubhav Tyagi",
    text: "This is a nice Video",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-200 p-2 rounded-lg my-2">
      <img
        src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
        alt="user"
        className="w-12 h-12"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentList=({comments})=>{
    return comments.map((comment,index)=>(
    <div>
        <Comment key={index} data={comment}/>
        <div className="pl-5 border border-l-black ml-5">
            <CommentList comments={comment.replies}/>
        </div>
    </div>
    ))
}
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">
        Comments:
      </h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
