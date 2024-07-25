(function () {
  const urls = [
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.example.com/data3",
  ];

  function fetchAllData(urls) {
    const promises = urls.map((url) =>
      fetch(url).then((response) => response.json())
    );

    console.log("Promises : ", promises);

    // Promise.all(promises)
    //   .then((results) => {
    //     results.forEach((data, index) => {
    //       console.log(`Data from URL ${index + 1}:`, data);
    //     });
    //   })
    //   .catch((error) => {
    //     console.error("One of the promises failed:", error);
    //   });
    Promise.race(promises)
      .then((results) => {
        results.forEach((data, index) => {
          console.log(`Data from URL ${index + 1}:`, data);
        });
      })
      .catch((error) => {
        console.error("One of the promises failed:", error);
      });
  }

  fetchAllData(urls);
})();
