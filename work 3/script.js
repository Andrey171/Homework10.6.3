const wsUri = "wss://echo-ws-service.herokuapp.com";


const geo = document.querySelector('.geo');
const mess = document.querySelector('.mess');
const input = document.querySelector('.input');
const btnOpen = document.querySelector('.btn-open');


let websocket;

function writeToMess(message) {
  let pre = document.createElement("p");
  pre.classList.add ("mess1");
  pre.innerHTML = message;
  mess.appendChild(pre);
}

function writeToScreen(message) {
  let pre = document.createElement("p");
  pre.classList.add ("mess2");
  pre.innerHTML = message;
  mess.appendChild(pre);
  console.log(mess)
}

websocket = new WebSocket(wsUri);
   
websocket.onmessage = function(evt) {
  writeToScreen(
    '<p>' + evt.data+'</p>'
  );
};
websocket.onerror = function(evt) {
  writeToScreen(
    '<span style="color: red;">ERROR:</span> ' + evt.data
  );
};

btnOpen.addEventListener('click', () => {
  const message = input.value;
  writeToMess(message);
  websocket.send(message);
  
});

const error = () => {
  status.textContent = 'Невозможно получить ваше местоположение';
}

const success = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  status.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
  let link = document.createElement("a");
  link.classList.add ("map-link");
  link.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  link.textContent = 'Гео-локаци';
  mess.appendChild(link);
}

geo.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(success, error);
});
