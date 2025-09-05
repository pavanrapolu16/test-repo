document.getElementById("loadData").addEventListener("click", fetchUsers);

async function fetchUsers() {
  const output = document.getElementById("output");
  output.innerHTML = "<p>Loading...</p>";

  try {
    // Sample API (returns fake users)
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();

    output.innerHTML = "";
    data.slice(0, 5).forEach(user => {
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>City:</b> ${user.address.city}</p>
      `;
      output.appendChild(card);
    });
  } catch (error) {
    output.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}
