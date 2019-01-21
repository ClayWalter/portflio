window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "16px 4px";
    document.getElementById("logo").style.height = "24px";
  } else {
    document.getElementById("navbar").style.padding = "40px 8px";
    document.getElementById("logo").style.height = "40px";
  }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "98%";
    document.getElementById("main").style.marginLeft = "0%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.98)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }