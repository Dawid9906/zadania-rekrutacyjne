const loop = document.getElementById("loop");
const form = document.getElementById("form");
loop.onclick = () => {
  loop.classList.add("d-none");
  form.classList.remove("d-none");
  form.classList.add("d-flex");
  form.classList.add("form-animation");
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

var elem = document.querySelector(".grid");
var msnry = new Masonry(elem, {
  itemSelector: ".grid-item",
  columnWidth: 450,
  gutter: 10,
});

var msnry = new Masonry(".grid", {});

const button = document.getElementById("btn");
button.addEventListener("click", () => {
  const roleta = document.getElementById("roleta");
  const none = document.querySelectorAll("div.grid-item.d-none");
  roleta.classList.add("animation");

  setInterval(() => {
    roleta.classList.add("d-none");
  }, 1000);
});

const projects = document.querySelectorAll("#projekty-grid .grid-item ");
const gallery = document.getElementById("galeria");
const closeIcon = document.getElementById("close");
const img = document.querySelector(".zdjecie img");
const actualImg = document.querySelector(".aktualne");

window.onload = () => {
  for (let i = 0; i < projects.length; i++) {
    let index = i;
    let imageIndex;
    projects[i].onclick = () => {
      actualImg.textContent = index + 1;
      imageIndex = index;
      function preview() {
        actualImg.textContent = index + 1;
        const link = projects[index].querySelector("img").src;
        img.src = link;
        if (index < projects.length - 1) {
          nextBtn.style.display = "block";
        } else {
          nextBtn.style.display = "none";
        }
        if (index > 0) {
          prevBtn.style.display = "block";
        } else {
          prevBtn.style.display = "none";
        }
      }
      gallery.classList.remove("d-none");

      const prevBtn = document.querySelector(".poprzedni");
      const nextBtn = document.querySelector(".nastepny");
      console.log(prevBtn, nextBtn);
      prevBtn.onclick = () => {
        index--;
        if (index === 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
        }
      };
      nextBtn.onclick = () => {
        index++;
        if (index >= projects.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
        }
      };
      preview();

      closeIcon.onclick = () => {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        gallery.classList.add("d-none");
      };
    };
  }
};
