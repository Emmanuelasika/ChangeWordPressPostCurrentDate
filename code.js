


document.addEventListener('DOMContentLoaded',() => {
   
var dateObj = new Date();
var month = dateObj.getUTCMonth(); //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
  
  
 
	
  var hours = dateObj.getHours();
  var minutes = dateObj.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;

  

var monthName= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
            
let usefulmonth = monthName[month];

let newdatevar = usefulmonth  + " " + day + ", " + year + " " + strTime;




document.querySelector('ENTER THE SELECTOR HERE').innerHTML = newdatevar;
  
  

  
});





