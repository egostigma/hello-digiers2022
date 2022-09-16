const input = document.getElementById("form-input");
const image1 = document.querySelector(".child-img1");

const appendEmail = () => {
  alert(`${input.value} has been recorded`);
  input.value = "";
};

// let indicator = true;
// setInterval(() => {
//   if (indicator) {
//     image1.src = "/assets/img_1.png";
//   } else {
//     image1.src = "/assets/img_2.png";
//   }
//   indicator = !indicator;
// }, 3000);
