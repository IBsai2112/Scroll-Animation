var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 98%",
    end:"55% 50%",
    scrub:true,
    // markers:true
}}) 
tl.to("#fanta",{
    top:"108%",
    left:"5%"
},'sameTime')

tl.to("#halfOrange",{
    top:"130%",
    left:"20%"
},'sameTime')

tl.to("#twoOrange",{
    top:"155%",
    right:"40%",
    width:"20%"
},'sameTime')

tl.to("#leaf",{
    top:"115%",
    rotate:"6deg",
    left:"70%"
},'sameTime')

// second timeline
var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 98%",
    end:"45% 50%",
    scrub:true,
    // markers:true
}}) 

tl2.from("#lemon",{
    left:"-100",
    top:"-15%"
},'a')

tl2.from("#CocaCola",{
    rotate:"-90deg",
    left:"-100",
    top:"0%"
},'a')

tl2.from("#dew",{
    rotate:"90deg",
    left:"100",
    top:"5%"
},'a')

tl2.to("#fanta",{
    width:"28%",
    left:"36%",
    top:"218%"
},'a')

tl2.to("#halfOrange",{
    width:"26%",
    left:"37%",
    top:"205%"
},'a')

var secondFanta = document.getElementById('secondFanta');
  
  // Add a click event listener to the button
  secondFanta.addEventListener('click', function() {
    // Redirect the user to the buy.html page
    window.location.href = '/buyingPage/buy.html';
  });