(function () {
  
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e){
    e.preventDefault();

    const formData = new FormData(form);
    alert(formData);
    const userData = {
      name: formData.get("name"),
      lastName: formData.get("lastName"),
      age: formData.get("age"),
    };
    console.log(userData);
    alert(userData);
    // form.reset();
  });

  const keyBoardEventHandler = (e) => {
    console.log({
      e, target: e.target, key: e.key
    });
  }
  const inputField = document.querySelector("#keyEvent");
  inputField.addEventListener("keydown", keyBoardEventHandler);
})();

window.addEventListener("blur", () => {
  document.title = "Come Back to Website";
})

window.addEventListener("focus", () => {
  document.title = "Dont leave the site";
})