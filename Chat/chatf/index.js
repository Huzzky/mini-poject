'use strict'
// Загрузка сообщений
loadMessage();


window.onload = function() {
  // document.getElementById("btnSend").disabled = true;
}

function loadMessage() {
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
    .catch(() => {
      const menu = document.getElementById('menu');
        let h1 = document.createElement('h1');
        h1.textContent = "БД не активно";
        menu.appendChild(h1);
    })
}



function checkTextArea() {
  // console.log(object)
  if (document.getElementById('textarea-message').value != "") {
    document.getElementById("btnSend").disabled = false;
  } else if (document.getElementById('textarea-message').value == "") {
    document.getElementById("btnSend").disabled = true;
  }
}


function submitMessage() {
  let dateMessageSend = new Date();
  let message = {
    "message": {
      "message_user": document.getElementById("textarea-message").value,
      "date_send_message": dateMessageSend.toISOString(),
      "from_user_id": 1
    }
    
  }

  fetch("http://192.168.1.69:8000/let/m/?format=json", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(message)
  })

}