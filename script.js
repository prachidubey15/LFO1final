var menu = document.querySelector("#ceni")
var full =  document.querySelector("#navbar")
var flag = 0
menu.addEventListener("click",function(){
    if(flag == 0){
    full.style.bottom = "0%"
    document.querySelector("#nav").style.backgroundColor = "transparent"
    document.querySelector("#nav").style.borderBottom = "1px solid #fff"
    document.querySelector("#nav").style.color = "#fff"
    document.querySelector("#rnav i").style.color = "#fff"
    document.querySelector("#rnav #sign").style.color = "#fff"
    document.querySelector("#rnav #icon").style.borderRight = "1px solid #fff"
    document.querySelector("#rnav #support").style.color = "#000"
    document.querySelector("#rnav #support").style.backgroundColor = "#fff"
    document.querySelector("#ceni i:nth-child(1)").style.opacity = "0"
    document.querySelector("#ceni i:nth-child(2)").style.opacity = "1"
    flag = 1
    }else{
    full.style.bottom = "100vh"
    document.querySelector("#nav").style.backgroundColor = "#fff"
    document.querySelector("#nav").style.borderBottom = "1px solid #000"
    document.querySelector("#nav").style.color = "#000"
    document.querySelector("#rnav i").style.color = "#000"
    document.querySelector("#rnav #sign").style.color = "#000"
    document.querySelector("#rnav #icon").style.borderRight = "1px solid #000"
    document.querySelector("#rnav #support").style.color = "#fff"
    document.querySelector("#rnav #support").style.backgroundColor = "#000"
    document.querySelector("#ceni i:nth-child(1)").style.opacity = "1"
    document.querySelector("#ceni i:nth-child(2)").style.opacity = "0"
    flag = 0
    }
})
function timelineOne(){
var tl = gsap.timeline()
tl.from("#nav",{
   top:"-15%",
   duration:0.1,
   ease : Power1
})
.from("#left1",{
    y:300,
    opacity:0,
    duration:1,
    delay:1,
    ease:Power1
},"a")
.from("#right1",{
    y:300,
    opacity:0,
    duration:1,
    delay:1,
    ease:Power1
},"a")
.to("#right1 #img1",{
    scale:1,
    opacity:1,
    duration:2,
    ease: Power1
},"b")
.to("#load1",{
    width:"31vw",
    duration:4,
    ease:Power1
},"b")
.to("#left1 #txt1 h1",{
    bottom:"2%",
    stagger:0.4,
    delay:0.2,
    duration:1,
    ease : Power1
},"b")
.to("#left1 #txt1 h5",{
    bottom:"32%",
    stagger:0.4,
    duration:1,
    delay:0.2,
    ease : Power1
},"b")
.to("#load1",{
    opacity:0
},"c")
.to("#load1",{
    width:0,
    duration:0.1
},"d")
.to("#right1 #img1",{
    scale:0,
    ease: Power1
},"e")
.to("#l1",{
    opacity:0
},"e")
.to("#l2",{
    opacity:1
},"e")
.to("#right1 #img2",{
    scale:1,
    opacity:1,
    duration:2,
    ease: Power1
},"e")
.to("#load1",{
    opacity:1,
    width:"31vw",
    duration:4,
    ease : Power1
},"e")
.to("#left1 #txt1 h1",{
    bottom:"-20%",
    opacity:0,
    stagger:0.4,
    delay:0.2,
    duration:1,
    ease : Power1
},"e")
.to("#left1 #txt1 h5",{
    bottom:"-32%",
    opacity:0,
    stagger:0.4,
    duration:1,
    delay:0.2,
    ease : Power1
},"e")
.to("#left1 #txt2 h1",{
    bottom:"2%",
    stagger:0.4,
    delay:0.2,
    duration:1,
    ease : Power1
},"e")
.to("#left1 #txt2 h5",{
    bottom:"25%",
    stagger:0.4,
    duration:1,
    delay:0.2,
    ease : Power1
},"e")
.to("#load1",{
    opacity:0
},"f")
.to("#load1",{
    width:0,
    duration:0.1
},"g")
.to("#right1 #img2",{
    scale:0,
    ease: Power1
},"g")
.to("#l2",{
    opacity:0
},"g")
.to("#l3",{
    opacity:1
},"g")
.to("#right1 #img3",{
    scale:1,
    duration:2,
    opacity:1,
    ease: Power1
},"g")
.to("#left1 #txt2 h1",{
    bottom:"-20%",
    opacity:0,
    stagger:0.4,
    delay:0.2,
    duration:1,
    ease : Power1
},"g")
.to("#left1 #txt2 h5",{
    bottom:"-32%",
    opacity:0,
    stagger:0.4,
    duration:1,
    delay:0.2,
    ease : Power1
},"g")
.to("#left1 #txt3 h1",{
    bottom:"2%",
    stagger:0.4,
    delay:0.2,
    duration:1,
    ease : Power1
},"g")
.to("#left1 #txt3 h5",{
    bottom:"15%",
    stagger:0.4,
    duration:1,
    delay:0.2,
    ease : Power1
},"g")
.to("#load1",{
    opacity:1,
    width:"31vw",
    duration:4,
    ease : Power1
},"h")
.to("#load1",{
    opacity:0
},"i")
.to("#load1",{
    width:0,
    duration:0.1
},"j")
.to("#right1 #img3",{
    scale:0,
    ease: Power1
},"j")
.to("#l3",{
    opacity:0
},"j")
.to("#l4",{
    opacity:1
},"j")
.to("#right1 #img4",{
    scale:1,
    opacity:1,
    duration:2,
    ease: Power1
},"j")
.to("#left1 #txt3 h1",{
    bottom:"-20%",
    opacity:0,
    stagger:0.4,
    delay:0.2,
    duration:1,
    ease : Power1
},"j")
.to("#left1 #txt3 h5",{
    bottom:"-32%",
    opacity:0,
    stagger:0.4,
    duration:1,
    delay:0.2,
    ease : Power1
},"j")
.to("#left1 #txt4 h1",{
    bottom:"2%",
    stagger:0.4,
    delay:0.2,
    duration:1,
    ease : Power1
},"j")
.to("#left1 #txt4 h5",{
    bottom:"15%",
    stagger:0.4,
    duration:1,
    delay:0.2,
    ease : Power1
},"j")
.to("#load1",{
    opacity:1,
    width:"31vw",
    duration:4,
    ease : Power1
},"k")
}
timelineOne()
