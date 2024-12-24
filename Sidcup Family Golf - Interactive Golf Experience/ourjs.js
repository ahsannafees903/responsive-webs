// cursor code 

document.addEventListener("DOMContentLoaded", function () {
  var crsr = document.querySelector("#cursor");
  var blur = document.querySelector("#cursor-blur");
  
  document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
  });

});

// gsap code

document.addEventListener("DOMContentLoaded", function () {
    gsap.to("#nav", {
      backgroundColor: "#000",
      duration:0.5,
      height:"80px",
    scrollTrigger:{
trigger:"#nav",
scroller:"body",
start:"top -10%",
end:" top -11",
scrub:2,
    }
    });
    gsap.to("#mian", {
        backgroundColor: "#000",
      scrollTrigger:{
  trigger:"#mian",
  scroller:"body",
  start:"top -60%",
  end:" top -100%",
  scrub:2,
      }
      });
  // var h4all=document.querySelectorAll("#nav h4")
  // h4all.forEach(function(elem))
});   
  document.addEventListener("DOMContentLoaded", function () {
  });
  