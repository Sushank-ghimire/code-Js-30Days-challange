// Promises in Javascript
(function () {
  const newPromise = new Promise((resolve, reject) => {
    let number = 88;
    // setTimeout(() => {
    //     resolve("Hello Promises In Javascript")
    // }, 3000);

    if (number % 2 === 0) {
      setTimeout(() => {
        resolve("The number is positive");
      }, 2000);
    } else {
      setTimeout(() => {
        reject("The number is Negative");
      }, 2000);
    }
  });
  newPromise
    .then((value) => {
      document.querySelector("section").innerHTML = value;
    })
    .catch((err) => console.error(err));

  function myDisplayer(some) {
    document.getElementById("section").innerHTML = some;
  }

  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.onload = function () {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    };
    req.open("GET", "inde.html");
    req.send();
    console.log(req);
  }

  //   getFile(myDisplayer);

  // Data Fetching From Url Contineously and logging it
  function fetchDataContinuously(url, interval, callback) {
    function fetchAndLog() {
      fetch(url)
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw new Error(
              `Network response was not ok: ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((data) => {
          callback(data);
          setTimeout(fetchAndLog, interval);
        })
        .catch((error) => {
          console.error("Fetching error:", error);
          setTimeout(fetchAndLog, interval);
        });
    }

    fetchAndLog();
  }

  // Example usage
  const url = "https://api.example.com/";
  const interval = 5000; // 5000 milliseconds (5 seconds)
  const callback = (data) => {
    console.log("Fetched data:", data);
  };

  // Fetching Data Unlimitedely and contineously logging it
  //   fetchDataContinuously(url, interval, callback);

  // Fetching Asyncically Data
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error occured : ", error);
    }
  };
  // fetchData(url);

  const fetchApi = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
      if (res.ok) {
        const result = await res.json();
        return result;
      } else {
        console.error("fectching data unsuccessfull");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const fetchedData = fetchApi().then((data) => console.log(data));
  console.log(fetchedData);
})();
