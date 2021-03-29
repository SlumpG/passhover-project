async function getUsers() {
    let UsersList = await fetch('https://next.json-generator.com/api/json/get/NJ-UoW2Xq');
    let Users = await UsersList.json();
    let HTML = '';

    for (let user of Users) {
        HTML += `<div id="${user['index']}" class="card "> `
        for (let userKey in user) {
            if (typeof user[userKey] === "object") {
                HTML += `<h4  class="card-title">${userKey} : `
                for (let nameKey in user[userKey]) {
                    HTML += `${user[userKey][nameKey]}`
                }
                HTML += `</h4>`
            } else if (userKey === 'picture') {
                HTML += ` <img class="card-img-top" src="${user[userKey]}" >`
            }
            else if (user[userKey] != user['_id'] && user[userKey] != user['picture'] && user[userKey] != user['index']) {
                HTML += `<h5 class="card-text"> ${userKey} :${user[userKey]}</h5> `
            }
        }
        HTML += `</div>`

    }
    mainDiv.innerHTML += HTML

    infoInTableForm.addEventListener('click', () => {
        HTML = ''
        HTML += `<table class = "card" > `

        for (let user of Users) {
            if (user['index'] < 1) {
                HTML += `<tr>`

                for (let thKey in user) {
                    if (user[thKey] != user['_id'] && user[thKey] != user['index']) {
                        HTML += ` <th> ${thKey}</th>`

                    }
                }
            }

            HTML += `</tr>`


            HTML += `<tr>`
            for (let userKey in user) {
                if (typeof user[userKey] === "object") {
                    HTML += `<td>`
                    for (let nameKey in user[userKey]) {
                        HTML += ` ${user[userKey][nameKey]} `
                    }
                    HTML += `</td>`
                } else if (userKey === 'picture') {
                    HTML += `<td> <img src="${user[userKey]}" ></td>`
                }
                else if (user[userKey] != user['_id'] && user[userKey] != user['picture'] && user[userKey] != user['index']) {
                    HTML += ` <td>${user[userKey]}</td> `
                }
            }
            HTML += `</tr>`

        }
        HTML += `</table>`
        mainDiv.innerHTML = HTML
    });

    register.addEventListener('click', () => {
        HTML = ''
        HTML += `<form id="registerForm" class="card">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" required><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" required><br>
        <label for="email"> email:</label><br>
        <input type="email" id="email" name="email" required><br>
        <label for="email2"> re email:</label><br>
        <input type="email" id="email2" name="email2" required><br>
        <label for="phone"> phone number:</label><br>
        <input type="text" id="phone" name="phone" required><br>
        <label for="age">age:</label><br>
        <input type="text" id="age" name="age" required><br><br>
        <input class="btn btn-secondary" id="submitForm" type="button" value="Submit">
        <p id="errorMsg"><p>
      </form> `


        mainDiv.innerHTML = HTML
        submitForm.addEventListener('click', () => {
            if (email.value === email2.value) {
                HTML += `${fname.value} ${lname.value} register successfully`;
            } else {
                errorMsg.innerHTML += `pls check the from the fill it again`;
                setTimeout(() => {
                    errorMsg.innerHTML = ''
                }, 3000);

            }
            mainDiv.innerHTML = HTML
        });

    });
    for (let user of Users) {
        HTML = ''
        document.getElementById(`${user['index']}`).addEventListener('click', () => {
            HTML += `<div class="card">`
            for (userKKey in user) {
                if (typeof user[userKKey] === "object") {
                    HTML += `<h4 class="card-title">`
                    for (let nameKey in user[userKKey]) {
                        HTML += `${user[userKKey][nameKey]} `
                    }
                    HTML += `<h4/>`
                } else if (userKKey === 'picture') {
                    HTML += ` <img src="${user[userKKey]}" >`
                }
                else if (user[userKKey] != user['_id'] && user[userKKey] != user['picture'] && user[userKKey] != user['index']) {
                    HTML += ` <h5>${user[userKKey]}</h5> `
                }

            }
            HTML += `</div>`
            mainDiv.innerHTML = HTML
        })


    }



}
getUsers();

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }