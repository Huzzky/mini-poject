'use strict'

const request = new Request("http://192.168.1.65:8000/let/u/?format=json");

fetch(request)
  .then(response => response.json())
  .then(data => {
    data.user.map((value, user) => {
      const menu = document.getElementById('menu');
        let li = document.createElement('li');
        let alink = document.createElement('A');
        alink.href = '#'; // 
        alink.textContent = value['name_user']; // здесь можете указывать содержимое
        li.appendChild(alink);
        menu.appendChild(li);
    })
    }
  
    
  );



fetch("http://192.168.1.65:8000/let/m/?format=json")
    .then(respone => respone.json())
    .then(data => {
      console.log(data)
    })