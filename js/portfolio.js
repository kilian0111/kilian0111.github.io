$(window).on("load", function () {
  /*var pathEls = document.querySelectorAll('.loading');
  for (var i = 0; i < pathEls.length; i++) {  
    var pathEl = pathEls[i];     
    anime({
      targets: pathEl,  
      strokeDashoffset: [0,250],
       duration: anime.random(1000, 3000),
      delay: 0,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    });    
  }*/
  if ($("#preloader-cont").length) {
    $("#preloader-cont")
      .delay(1000)
      .fadeOut("slow", function () {
        $(this).remove("slow");
      });
  }
});
$(document).ready(function () {
  AOS.init();

  $(window).scroll(function () {
    if (window.scrollY > 0) {
      $("header").addClass("backgroundNav");
      $("header").addClass("fixed-top");
      $("header").removeClass("backgroundNavEnlever");
    } else {
      $("header").addClass("backgroundNavEnlever");
      $("header").removeClass("backgroundNav");
      $("header").removeClass("fixed-top");
    }
  });

  window.addEventListener("click", function (event) {
    var div = document.createElement("div");
    div.className = "clickOnPage";
    div.style.top = `${event.pageY - 12}px`;
    div.style.left = `${event.pageX - 12}px`;
    document.body.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 400);
  });

  var pathEls = document.querySelectorAll(".anim");
  for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute("stroke-dashoffset", offset);
    anime({
      targets: pathEl,
      //fill:[rgba(43,158,215,0),rgba(43,158,215,1)],
      strokeDashoffset: [offset, 0],

      duration: 4000,
      delay: 10,
      loop: true,
      direction: "alternate",
      easing: "easeInOutSine",
      autoplay: true,
    });
  }

  var typed = new Typed("#typed", {
    strings: ["Je suis Développeur Web", "Je suis Développeur d'Applications "],
    typeSpeed: 100,
    backSpeed: 50,
    delay: 100,
    loop: true,
    showCursor: true,
  });

  // animation timeline
  $(function () {
    var inputs = $(".input");
    var paras = $(".description-flex-container").find("p");
    inputs.click(function () {
      var t = $(this),
        ind = t.index(),
        matchedPara = paras.eq(ind);

      t.add(matchedPara).addClass("active");
      inputs.not(t).add(paras.not(matchedPara)).removeClass("active");
    });
  });

  const nav = document.querySelector("nav");
  document.querySelector("#burger").addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
    nav.classList.toggle("show");
  });


//   $("#parcours").scroll(function() {
//     console.log("Here");
//     $("nav li ").removeClass("active");
//     $("#parcoursBoutton").parent().addClass("active");
// });




  // filtre
  /*
  $('#filtres button').click(function () {

    value = $(this).data('filter');
    $('#filtres button').removeClass('activeBtnTrie'),
      $(this).addClass('activeBtnTrie');


    $('#elements > div').each(function () {

      

      $(this).removeClass("slide-out-left");
      if (!$(this).hasClass(value) && value != "all")
        $(this).addClass("slide-out-left");



    });
  });*/

  // var portfolio = $("#realisation");
  // var items = portfolio.find(".element-item");
  // var filters = portfolio.find(" #filtres .filtres ");

  //   items.isotope({
  //     itemSelector: ".element-item",
  //     layoutMode: "fitRows",
  //     transitionDuration: "0.7s",
  //   });

  // filters.click(function () {
  //   var el = $(this);

  //   filters.removeClass("activeBtnTrie");
  //   el.addClass("activeBtnTrie");

  //   var selector = el.attr("data-filter");

  //  $("#grid").isotope({
  //     filter: selector
  //   });

  // });


  var $grid = $(".grid").isotope({
    itemSelector: ".element-item",
    layoutMode: "fitRows",
  });
 
  $("#filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
   
    filterValue =  filterValue;
    $grid.isotope({ filter: filterValue });
  });

  $(".button-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function () {
      $buttonGroup.find(".activeBtnTrie").removeClass("activeBtnTrie");
      $(this).addClass("activeBtnTrie");
    });
  });
});

/*var letterEls = document.querySelectorAll('.letter');
for (var i = 0; i < letterEls.length; i++) {
  var letterEl = letterEls[i];
  var offset = anime.setDashoffset(letterEl);
  letterEl.setAttribute('stroke-dashoffset', offset);
   anime({
    targets: letterEl,
    duration: anime.random(0, 1000),
    delay: anime.random(0, 300),
    opacity: [
      { value: 0, duration: anime.random(0, 300) },
    ],
    loop: true
  });
}






$(function(){
    var ink, i, j, k;
    $(".paperButton").mousedown(function(e){
    if($(this).find(".ink").length === 0){
    $(this).prepend("<span class="ink"></span>");
    }

    ink = $(this).find(".ink");
    ink.removeClass("animate");

    if(!ink.height() && !ink.width()){
    i = Math.max($(this).outerWidth(), $(this).outerHeight());
    ink.css({height: i, width: i});
    }

    j = e.pageX - $(this).offset().left - ink.width()/2;
    k = e.pageY - $(this).offset().top - ink.height()/2;

    ink.css({top: k+"px", left: j+"px"}).addClass("animate");

    });*/
