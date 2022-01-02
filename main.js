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
// function showMore(r1,r2){
//     // console.log(r1,r2);
//     var para1=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, similique quia. Animi
//     porro nulla voluptatem magni a accusamus debitis. Recusandae.   <a href="#customer-words" onclick="showLess()" onsubmit="false">ShowLess</a>`;
//     var para2;
//     var review=document.getElementById(r1.toString());
//     var review1Box=document.getElementById(r2.toString());
//     para2=review.innerHTML
//     review.innerHTML=para1;
//     review1Box.style.height="270px";
//     console.log("Show more");
// }
// function showLess(){
//     var para2=`Lorem ipsum dolor sit amet consectetur adipisicing elit.    <a href="#customer-words" onclick="showMore()" onsubmit="false">Show More</a> `;
//     var review1=document.getElementById("reviewPara1");
//     review1.innerHTML=para2;
//     var review1Box=document.getElementById("firstReview");
//     review1Box.style.height="216px";
//     console.log("Show Less");
// }
// var x=window.matchMedia("(max-width: 992px)");
// function myFunction(x) {
    
// }
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction);