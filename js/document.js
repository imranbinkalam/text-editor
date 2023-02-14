// Text Area Dom
const textarea = document.getElementById("textarea");
// bold button Dom
document.getElementById("bold-btn").addEventListener("click", function () {
  if (textarea.style.fontWeight === "bold") {
    textarea.style.fontWeight = "normal";
  } else {
    textarea.style.fontWeight = "bold";
  }
});
//  italic button Dom
document.getElementById("italic-btn").addEventListener("click", function () {
  if (textarea.style.fontStyle === "italic") {
    textarea.style.fontStyle = "normal";
  } else {
    textarea.style.fontStyle = "italic";
  }
});
// UnderLine Button Dom
document.getElementById("underline-btn").addEventListener("click", function () {
  if (textarea.style.textDecoration === "underline") {
    textarea.style.textDecoration = "none";
  } else {
    textarea.style.textDecoration = "underline";
  }
});
// Left Button Dom
document.getElementById("left-btn").addEventListener("click", function () {
  textarea.style.textAlign = "left";
});
// Right Button Dom
document.getElementById("right-btn").addEventListener("click", function () {
  textarea.style.textAlign = "right";
});
// Center Button Dom
document.getElementById("center-btn").addEventListener("click", function () {
  textarea.style.textAlign = "center";
});
// Center Button Dom
document
  .getElementById("font-size-input")
  .addEventListener("click", function () {
    textarea.style.fontSize =
      document.getElementById("font-size-input").value + "px";
  });
// Cases Button Dom
document.getElementById("cases-btn").addEventListener("click", function () {
  if (textarea.style.textTransform === "uppercase") {
    textarea.style.textTransform = "none";
  } else {
    textarea.style.textTransform = "uppercase";
  }
});
// color Button Dom

const colorBtn = document.getElementById('color-btn');
colorBtn.addEventListener("click", function () {
     textarea.style.color =  document.getElementById("color-input").value
  });
