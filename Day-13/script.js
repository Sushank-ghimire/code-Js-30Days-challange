import { addition, subtract, multiply, divide, myDetails } from "./module.js";
import axios from "axios";

(function () {
  console.log(addition(2, 4));
  console.log(subtract(2, 4));
  console.log(multiply(2, 4));
  console.log(divide(2, 4));
  console.log(myDetails);
  console.log(myDetails.getDetails());
  // Make a request for a user with a given ID
  axios
    .get("/user?ID=12345")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  // Optionally the request above could also be done as
  axios
    .get("/user", {
      params: {
        ID: 12345,
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  // Want to use async/await? Add the `async` keyword to your outer function/method.
  async function getUser() {
    try {
      const response = await axios.get("/user?ID=12345");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
})();
