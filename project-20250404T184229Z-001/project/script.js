// 1. Using Callbacks

/*
function fetchUserData() {
  const apiUrl = "https://randomuser.me/api/?results=1";
  // Create an XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  xhr.open("GET", apiUrl, true); //true indicates async

  // Callback function for when the request is successful

  xhr.onload = function () {
    if (xhr.status === 200) {
      const userData = JSON.parse(xhr.response);
      displayUserData(userData.results[0]);
    }
  };

  // Callback function for errors
  xhr.onerror = function()
  {
    alert('Error in fetching data')
  }

  //send the request
  xhr.send()


}

function displayUserData(userData)
{
    const displayDiv = document.getElementById('userData');
    displayDiv.innerHTML
    =`
        <h2>User Data</h2>
        <p>Name: ${userData.name.first} ${userData.name.last}</p>
        <p>Email: ${userData.email}</p>
        <p>City: ${userData.location.city}</p>
    `;

}

*/

// Promises

/*
function fetchUserData() {
  const apiUrl = "https://randomuser.me/api/?results=1";

  // Using fetch API which returns a Promise
  fetch(apiUrl)
    .then((response) => response.json())
    .then((userData) => {
      displayUserData(userData.results[0]);
    })
    .catch((error) => {
      console.error("Error", error);
    });
}


function displayUserData(userData) {
  const displayDiv = document.getElementById("userData");
  displayDiv.innerHTML = `
        <h2>User Data</h2>
        <p>Name: ${userData.name.first} ${userData.name.last}</p>
        <p>Email: ${userData.email}</p>
        <p>City: ${userData.location.city}</p>
    `;
}
*/

// 3. Using Async/Await

async function fetchUserData() {
  try {
    const apiUrl = "https://randomuser.me/api/?results=1";
    const response = await fetch(apiUrl);
    const userData = await response.json();
    displayUserData(userData.results[0]);
  } catch (error) {
    console.error("Error ", error);
  }
}

function displayUserData(userData) {
  const displayDiv = document.getElementById("userData");
  displayDiv.innerHTML = `
          <h2>User Data</h2>
          <p>Name: ${userData.name.first} ${userData.name.last}</p>
          <p>Email: ${userData.email}</p>
          <p>City: ${userData.location.city}</p>
      `;
}
