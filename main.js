function bookAppointment()
{
    console.log("Appointment Booked");
}

function login()
{
    console.log("You Loged in");
}
function clicked()
{
    var topbtns=document.getElementById("side-bar");
    if(topbtns.classList.contains("side-bar")){
        topbtns.classList.remove("side-bar");
        topbtns.classList.add("side-bar-visible");
    }else{
        topbtns.classList.remove("side-bar-visible");
        topbtns.classList.add("side-bar");
    }
    
    
}
function maniMenuSlider()
{
    console.log("clicked maniMenuSlider()");
    var mainmenuSlider=document.getElementById("mainmenu");
    if(mainmenuSlider.classList.contains("main-slider-menu")){
        mainmenuSlider.classList.remove("main-slider-menu");
        mainmenuSlider.classList.add("main-slider-menu-non-visible");
    }else{
        mainmenuSlider.classList.remove("main-slider-menu-non-visible");
        mainmenuSlider.classList.add("main-slider-menu");
    }    
}
function submitContact()
{
    var customername=document.getElementById("customername").value;
    var customeremail=document.getElementById("customeremail").value;
    var customerphnnum=document.getElementById("customerphn").value;
    var querymsg=document.getElementById("querytxt").value;
    console.log("Submitted1");
    var user={
        cname:customername,
        cemail:customeremail,
        cpnum:customerphnnum,
        cqmsg:querymsg
    }
    console.log(user); 
    console.log("Submitted2");
}