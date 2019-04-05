import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const deleteCommentForm = document.getElementsByClassName("jsDeleteComment");

const setNumber = mod => {
  let newNumber = 0;
  if (mod === "plus") newNumber = parseInt(commentNumber.innerHTML, 10) + 1;
  else newNumber = parseInt(commentNumber.innerHTML, 10) - 1;

  commentNumber.innerHTML = newNumber;
};

const addComment = (comment, commentId, creatorName, avatar) => {
  const li = document.createElement("li");
  const span_name = document.createElement("span");
  const span_comment = document.createElement("span");
  const button = document.createElement("button");
  const image = document.createElement("img");
  button.innerHTML = "Delete";
  button.id = commentId;
  button.className = "jsDeleteComment";
  span_name.className = "username";
  span_comment.className = "comment";
  span_name.innerHTML = creatorName;
  span_comment.innerHTML = comment;
  image.className = "avatar";
  image.src = avatar;

  li.appendChild(image);
  li.appendChild(span_name);
  li.appendChild(span_comment);
  li.appendChild(button);
  commentList.prepend(li);
  setNumber("plus");
  init();
};

const delComment = commentId => {
  const li = document.getElementById(commentId).parentNode;
  commentList.removeChild(li);
  setNumber("minus");
};

const sendComment = async comment => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    const {
      data: { id, name, avatar }
    } = response;
    addComment(comment, id, name, avatar);
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

const handleDelete = async event => {
  const {
    target: { id: commentId }
  } = event;

  const response = await axios({
    url: `/api/${commentId}/delete-comment`,
    method: "POST"
  });

  if (response.status === 200) {
    delComment(commentId);
  }
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
  //deleteComment.addEventListener("click", handleDelete);
  for (let i = 0; i < deleteCommentForm.length; i++) {
    deleteCommentForm[i].addEventListener("click", handleDelete);
  }
}

if (addCommentForm) {
  init();
}
