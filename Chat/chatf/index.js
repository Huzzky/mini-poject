'use strict'

const request = new Request("http://192.168.1.69:8000/let/u/?format=json");

fetch("http://192.168.1.69:8000/let/m/?format=json")
    .then(respone => respone.json())
    .then(data => {
      data.data.messages.map((user, value) => {
        const testData = data.data['users'];

        const menu = document.getElementById('menu');
        let li = document.createElement('li');
        
        li.textContent = testData[user['from_user_id']-1]['name_user'];
        

        let liMessage = document.createElement('li');
        liMessage.textContent = user['message_user']

        let liEntry = document.createElement("li");
        liEntry.textContent = "";
        menu.appendChild(li);
        menu.appendChild(liMessage);
        menu.appendChild(liEntry);
       })
    })

function checkTxtArea() {
  console.log(document.getElementById("textarea-message").value)
}

function submitMessage() {
  
  const txtarea = document.getElementById('textarea-message');
  txtarea.textContent = "Ололололол";
}