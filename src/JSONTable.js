
let userName = [];
let userLocation = [];
let userDateOfBirth = [];
let userImage = [];
let userPhone = [];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
$.getJSON("users.json", json => {
    json.results.forEach(element => {
        userName.push(element.name.first + " " + element.name.last);
        userLocation.push(element.location.city + ", " + element.location.country);
        userDateOfBirth.push(element.dob.date);
        userImage.push(element.picture.thumbnail);
    });
    let tableData = $("#tableData");
    for (let i = 0; i < userName.length; i++) {
        let row = $("<tr>");
        row.append($("<td>").text(userName[i]));
        row.append($("<td>").text(userLocation[i]));
        let readableDate = new Date(userDateOfBirth[i]);
        //row.append($("<td>").text(readableDate.toDateString()));
        row.append($("<td>").text(months[readableDate.getMonth()] + " " + readableDate.getDay() + ", " + readableDate.getFullYear()));
        row.append($("<td>").html("<img src='" + userImage[i] + "'>"));
        row.append($("<td>").html("<button class='button is-warning is-light' onclick='deleteRow(event)'>Delete</button>"));
        tableData.append(row);
    }
});
function deleteRow(event) {
    let row = event.target.parentElement.parentElement;
    row.parentNode.removeChild(row);
}
function searchName() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("name");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableData");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function searchLocation() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("location");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableData");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function searchRegistered() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("registered");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableData");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}