import { error } from "console";

const src = 'https://gist.githubusercontent.com/allbel/ae2f8ead09baf7bb66d281e3a6050261/raw/4c898f101913cd7918ab1dbfce008fa12c6d4838/mock.json';

function Api() {
 
  function fethData() {
   return fetch(src)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }
}

export default Api