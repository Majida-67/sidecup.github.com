// cursor
var crsr = document.querySelector("#cursor")
var bluur = document.querySelector("#cursorblur")

document.addEventListener("mousemove" , function(dets){
 crsr.style.left =dets.x + "px"
 crsr.style.top =dets.y+"px"

 bluur.style .left = dets.x + - 150 +"px"
 bluur .style .top = dets .y+ - 150 +"px"
})

  //  cursor for round circle shape

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elm){
  elm.addEventListener("mouseenter",function(){
    crsr.style.scale = "3";
    crsr.style.backgroundColor = " transparent" ;
    crsr.style.border = " 0.5px solid white " ;
  })
})


var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elm){
  elm.addEventListener("mouseleave",function(){
    crsr.style.scale = "1";
    crsr.style.backgroundColor = "#95C11E" 
    crsr.style.border = " 0px solid #95C11E" 
  })
})

// nav
gsap.to("#nav" ,{
    backgroundColor:"black",
    color:"white",
    duration:10 ,
    height:"110px",
    scrollTrigger :
    {
trigger :"#nav" ,
scroller :"body",
start :"top -10 %",
end :"top -11%" ,
scrub :1
    }
})

//  main

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "top -60%",
      end: "top -90%",
      scrub: 2,
    },
  });
  
// gsap for about
gsap.from("#about , #aboutpage" ,{
y:50,
opacity:0 ,
duration: 1,
scrollTrigger :{
trigger:"#about",
scroller :"body",
start:"top 60%",
end:"top 55%",
scrub:2 
}
} )


// gsap for cards
gsap.from(".card",{
  scale:0.8,
  opacity:0 ,
  duration: 1,
  scrollTrigger :{
  trigger:".card",
  scroller :"body",
  start:"top 70%",
  end:"top 65%",
  scrub:2
  }
  } )
  
  // GSAP for headings h1 

  gsap.from(".page4 h1" , {
    y:50,
    scrollTrigger:".page4 h1" ,
    scroller :"body",
    start :"top 75%",
     end : "top 70%" ,
     scrub : 1
  })

