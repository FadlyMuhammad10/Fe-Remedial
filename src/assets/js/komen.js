const submit = document.querySelector(".comment-submit");
const commentList = document.querySelector(".comments");
const commentInput = document.querySelector(".comment-input");

function template(data) {
  commentList.insertAdjacentHTML(
    "beforeend",
    `
  <div class="comment flex items-start justify-start">
      <div class="">
        <p class="py-3 px-4"><strong>${data.author}</strong> | ${data.comment}</p>
        <br>
      </div>
    </div>
  </div>`
  );
}

function appendComment(event) {
  const data = {
    comment: commentInput.value,
    author: "Nova Sriady",
  };

  event.preventDefault();
  if (commentInput.value.length < 1) return;
  template(data);
  commentInput.value = "";
  localStorage.setItem("commentListing", commentList.innerHTML);
}

submit.addEventListener("click", appendComment, false);
const saved = localStorage.getItem("commentListing");
if (saved) {
  commentList.innerHTML = saved;
}
