fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((data) => showData(data));

function showData(userData) {
  document.getElementById("table-body").innerHTML = "";
  let i = 1;
  userData.forEach((user) => {
    document.getElementById("table-body").innerHTML += `
    <tr>
      <td>${i}</td>
      <td>${user.login}</td>
      <td><img src="${user.avatar_url}" alt="" width="70"></td>
    </tr>`;
    i++;
  });
}
