var Realuser = prompt("Which bus will you choice?").toUpperCase();
var MuniL = true;
var MuniR = true;
var Train = true;

switch(Realuser){
    case 'MuniL':
       if(MuniL && MuniR ){
           return = true;
      }else{
          return = false;
      }
       console.log("Long duration, but less stop");
        break;
    case 'MuniR':
        if(MuniR || Train){
            return true;
        }else {
            return false;
        }
        console.log("Short duration, but more stop ");
        break;
    case 'Train':
        if(!(Train && MuniR)){
            return false;
        }else{
            return true;
        }
        console.log("long duration, more stop");
        break;
    default:
      console.log("Take whatever you want.");
      
}