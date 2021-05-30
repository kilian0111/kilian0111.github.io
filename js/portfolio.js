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
      .delay(100)
      .fadeOut("slow", function () {
        $(this).remove("slow");
      });
  }
});



$(document).ready(function () {
  AOS.init();

  // scroll barre de naviation 
  $(window).scroll(function () {
    if (window.scrollY > 0) {
      $("header").addClass("backgroundNav");
      $("header").addClass("fixed-top");
      $("header").removeClass("backgroundNavEnlever");
    } else {
      $("header").addClass("backgroundNavEnlever");
      $("header").removeClass("backgroundNav");

    }
  });

  // animation click rond 
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

  // svg prénom 
  if (document.querySelector(".anim")) {
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
  }

  //texte tapé tout seul
  if (document.getElementById('#typed')) {
    var typed = new Typed("#typed", {
      strings: ["Je suis Développeur Web", "Je suis Développeur d'Applications "],
      typeSpeed: 100,
      backSpeed: 50,
      delay: 100,
      loop: true,
      showCursor: true,
    });
  }

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

  if (document.querySelector(".grid")) {


    //animation trie 
    var $grid = $(".grid").isotope({
      itemSelector: ".element-item",
      layoutMode: "fitRows",
    });

    $("#filters").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");

      filterValue = filterValue;
      $grid.isotope({ filter: filterValue });
    });

    $(".button-group").each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on("click", "button", function () {
        $buttonGroup.find(".activeBtnTrie").removeClass("activeBtnTrie");
        $(this).addClass("activeBtnTrie");
      });
    });
  }



  //ester egg


  var egg = new Egg("p,a,l,p,a,t,i,n,e", function () {
    var audio = new Audio('audio/palpatine.mp3');
    audio.play();
    jQuery('#palpatine1').fadeIn(500, function () {
      window.setTimeout(function () { jQuery('#palpatine1').hide("slow"); }, 5000);

      jQuery('#palpatine2').fadeIn(5000, function () {
        window.setTimeout(function () { jQuery('#palpatine2').hide("slow"); }, 1200);
      });
    });


  }).listen();

  var egg = new Egg("y,o,d,a", function () {
    var audio = new Audio('audio/yodarire.mp3');
    audio.play();
    jQuery('#yoda').fadeIn(500, function () {
      window.setTimeout(function () { jQuery('#yoda').hide("slow"); }, 1300);
    });

  }).listen();


  var egg = new Egg("p,o,r,g", function () {
    var audio = new Audio('audio/porg.mp3');
    audio.play();
    jQuery('#porg').fadeIn(500, function () {
      window.setTimeout(function () { jQuery('#porg').hide("slow"); }, 2500);
    });

  }).listen();



  $(document).on("scroll", onScroll);

  //smoothscroll
  $('.js-scroll').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.js-scroll').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top - 50 <= scrollPos && refElement.position().top + refElement.height() - 50 >= scrollPos) {
        $('.js-scroll').removeClass("active navactive");
        currLink.addClass("active navactive");
      }
    });
  }


  $(window).scroll(function () {
    //scroll
    var scroll = $(window).scrollTop();

    dh = $(document).height();
    wh = $(window).height();
    value = (scroll / (dh - wh) * 100);

    $('#progress').css('width', value + '%');
  });


  //navabar bouton on click 
  $('.navbar-toggler').on('click', function () {
    if (!$('#container').hasClass('backgroundNav')) {
      $('header').addClass('backgroundNav');
      $("header").removeClass("backgroundNavEnlever");
    } else {
      $("header").addClass("backgroundNavEnlever");
      $("header").removeClass("backgroundNav");
    }
  })


});




