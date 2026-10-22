$(document).ready(function(){
    /*get current date*/
    const date=new Date();
    const hour= date.getHours();
    let message="";
    if(hour<=12){
        message="\"Good Morning\"";
    }
     if(hour>12){
        message="\"Good Afternoon\"";
    }
     if(hour>17){
        message="\"Good Evening\"";
    }
  
    $("#heading-text, #heading-text2").empty().append(message+ " From Jiya Gaming");
});
