const items = [
  {
    title: "GITHUB",
    link: "https://github.com/Sbain2703"
  },
  {
    title: "SPOTIFY",
    link: "https://open.spotify.com/user/jx4h8cjyug9opuoqgadktym5g?si=mjRO1lSqRWaZPur6uAyHRw"
  },
  {
    title: "LINKEDIN",
    link: "https://linkedin.com/in/sayahakiri"
  }
];

let index = 0;

const title = document.getElementById("carouselTitle");
const link = document.getElementById("carouselLink");

document.querySelector(".arrow.left").addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  update();
});

document.querySelector(".arrow.right").addEventListener("click", () => {
  index = (index + 1) % items.length;
  update();
});

function update() {
  title.textContent = items[index].title;
  link.href = items[index].link;
}

update();