'use strict'
loadMessage();
// document.getElementById("btnSend").disabled = true;

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



function submitMessage() {
  
  let message = {
    message_user: document.getElementById("textarea-message").value,
    date_send_message: Date.now(),
    from_user_id: 1
  }

  fetch("http://192.168.1.69:8000/let/m/?format=json", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: {"message":JSON.stringify(message)}
  })
  .then(
    console.log('"message:"', JSON.stringify(message))
  ); 

}