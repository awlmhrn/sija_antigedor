import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    iterations:5, //jumlah uji coba 
    vus:2
}

export default function(){
    let res = http.get("http://10.201.1.138:800/eazyn/index.php");
    res = res.submitForm({
    fromSelector: 'form',
    fields: {username:"mutiara", password:"123456"}
});

sleep(3);

}