(function () {
  const section = document.querySelector("section");
  const h2Element = document.querySelector("section h2");
  h2Element.style.textAlign = "center";

  const divItem = document.createElement("div");
  divItem.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet sequi iste nostrum eligendi excepturi rerum, laborum maxime, facilis veniam cumque cupiditate ab distinctio obcaecati soluta in officia quasi possimus.";
  divItem.style.width = "400px";
  divItem.style.margin = "auto";
  divItem.style.textAlign = "justify";

  section.appendChild(divItem);

  const divElement = document.querySelector(".divElement ul");

  const button = document.querySelector(".divElement button");

  button.onclick = () => {
    if (divElement.lastElementChild) {
      divElement.removeChild(divElement.lastElementChild);
    } else {
      alert("No last child Found!");
    }
  };

  const imageUrl = "https://images.unsplash.com/photo-1518799937599-77763326c394?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const image = document.querySelector("#img");

  const imageBtn = document.querySelector("#addImage");

  imageBtn.onclick = () => {
    image.src = imageUrl;
  };

  document.querySelector(".removeImg").onclick = () => {
    image.src = null;
  };

  const borderChangeButton = document.querySelector(".borderChange");

  borderChangeButton.addEventListener('mouseover', () => {
    borderChangeButton.style.border = "2px solid red";
  });

  borderChangeButton.addEventListener("mouseout", () => {
    borderChangeButton.style.border = "2px solid black";
  });

  const clickBtn = document.querySelector(".textChange");

  clickBtn.onclick = function () {
    this.textContent = "Not Click Again";
  };

})();
