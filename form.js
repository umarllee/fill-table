const btn = getById("addBtn");
const delBtn = document.getElementsByClassName("del-btn");
const table = getById("tableBody");
const getFname = getById("fname");
const getLname = getById("lname");
const getEmail = getById("email");
const getPassword = getById("psw");
const getMsg = getById("form-con");
const getForm = document.querySelector("form");


const removeUser = function () {
    for (let index = 0; index < delBtn.length; index++) {
        delBtn[index].addEventListener("click", function () {
            this.parentNode.parentNode.remove();
        });

    }
}

const fillSpan = document.createElement("div");
fillSpan.setAttribute("class", "col-12");
fillSpan.setAttribute("id", "messageArea");
fillSpan.classList.add("text-danger");
fillSpan.classList.add("py-3");
fillSpan.classList.add("px-5");
fillSpan.classList.add("bg-secondary");
fillSpan.classList.add("errorMessage");


function errorMessages(message) {
    fillSpan.innerHTML = `${message}`;
    getMsg.appendChild(fillSpan);


}

const checkLength = function (input) {
    if (input.length > 3) {
        return true;
    } else {
        return false;
    }
}

const addItem = function () {
    btn.addEventListener("click", () => {
        if (getFname.value.length > 0 && getLname.value.length > 0 && getEmail.value.length > 0 && getPassword.value.length > 0) {

            if (!checkLength(getFname.value)) {
                errorMessages("The name must be at least 3 letters long.")

            } else if (!checkLength(getLname.value)) {

                errorMessages("The lastname must be at least 3 letters long.");

            } else if (!checkLength(getEmail.value)) {

                errorMessages("The email must be at least 3 letters long.");
            } else if (getPassword.value.length < 8) {

                errorMessages("The password must be at least 8 letters long.");

            } else if (!getEmail.value.includes('@')) {

                errorMessages("Email must be contain @");

            } else {

                fillSpan.remove();
                table.innerHTML += `
                    <tr>
                      <td>${getFname.value}</td>
                      <td>${getLname.value}</td>
                      <td>${getEmail.value}</td>
                      <td>${getPassword.value}</td>
                      <td>
                          <button id="deleteBtn" type="submit" class="del-btn btn btn-danger">Delete</button>
                      </td>
                    </tr> `;
                    
            }
            removeUser();
        }

        if (getFname.value.length == 0 || getLname.value.length == 0 || getEmail.value.length == 0 || getPassword.value.length == 0) {
            errorMessages("Nothing can be empty!");

        }
    });


};


addItem();