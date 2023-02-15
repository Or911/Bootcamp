const posts = [
  { id: 1, name: "or", text: "hello my name is or" },
  { id: 2, name: "ron", text: "hello my name is ron" },
];
let ids = 2;

const render = function () {
  $("div").empty();
  for (let post of posts) {
    $("body").append(
      `<div class="postClicker" id=${post.id}><h2>${post.name}</h2><p>${post.text}</p></div>`
    );
  }
};

$("button").on("click", function () {
  ids++;
  posts.push({
    id: ids,
    name: $("#inputName").val(),
    text: $("#inputText").val(),
  });
  render();
});

$("body").on("click", ".postClicker", function () {
  for (let index in posts) {
    if (posts[index].id == $(this).attr("id")) {
      posts.splice(index, 1);
      render();
    }
  }
});

render();
