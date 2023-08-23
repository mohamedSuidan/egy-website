const btn = document.querySelector(".humbrger");
const ul = document.querySelector("nav ul");
const listCountry = document.querySelectorAll(".tours ul li");
const tours = document.querySelectorAll(".tours .col-4");
const describe = document.querySelectorAll(".describe");
btn.addEventListener("click", (e) => {
  ul.classList.toggle("show");
  btn.classList.toggle("change");
});

listCountry.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    listCountry.forEach((li) => {
      li.classList.remove("active");
      e.target.classList.add("active");
    });
    tours.forEach((ele) => {
      if (ele.dataset.country === e.target.dataset.country) {
        ele.classList.add("show");
      } else {
        ele.classList.remove("show");
      }
    });
  });
});
describe.forEach((ele) => {
  ele.innerHTML =
    ele.textContent.slice(0, 200) + "... " + '<a href="#"> شوف اكتر</a>';
});

document.addEventListener("click", (e) => {
  if (ul.className === "show" && btn.className === "humbrger change") {
    if (e.target.dataset.click !== "s") {
      ul.classList.remove("show");
      btn.classList.remove("change");
    }
  }
});
