let contactData = [
  {
    contactName: "John Doe",
    contactNumber: 529462295,
  },
  {
    contactName: "Mark",
    contactNumber: 664246406,
  },
];

function clearForm() {
  document.getElementById("contactName").value = "";
  document.getElementById("contactNumber").value = "";
}

function clearAllData() {
  clearForm();
  contactData = [];
  showData();
}

function addData() {
  let contactName = document.getElementById("contactName").value;
  let contactNumber = document.getElementById("contactNumber").value;

  if (contactName.length != 0 && contactNumber.length != 0) {
    let newValue = {
      contactName: contactName,
      contactNumber: contactNumber,
    };
    contactData.unshift(newValue);
    clearForm();
    showData();
  }
}

function showData() {
  document.getElementById("table-body").innerHTML = "";

  let i = 0;

  if (contactData.length != 0) {
    contactData.forEach((data) => {
      document.getElementById("table-body").innerHTML += `
      <tr>
        <td>${data.contactName}</td>
        <td>${data.contactNumber}</td>
        <td> <button onclick="deleteData(${i})">Delete</td>
      </tr>
      `;
      i++;
    });
  } else {
    document.getElementById("table-body").innerHTML = `
    <tr>
        <td colspan="2">No history found</td>    
      </tr>
    `;
  }
}

function deleteData(index) {
  contactData.splice(index, 1);
  showData();
}

showData();
