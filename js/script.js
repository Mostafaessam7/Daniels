
//....................... de elgzaya ele5saa bl arrow scroll .........................
$("#btnUp").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
})

// ...................................................................................
let aboutOffsetTop = $("#about").offset().top; // دى عشان لما اسكرول ويجى عند ابوت يعمل اكشن معين فى الناف بار
// let workOffset = $("#clients").offset().top; // دى لها علاقة بالسيت انتيرفال اللى تحت
$(window).scroll(function () {

    let wScroll = $(window).scrollTop();

    // ........................ de elgzaya ele5saa bl navbar scroll ..........................
    if (wScroll > aboutOffsetTop - 600) {

       
        $("#navb").css("padding","0px 40px");

        $("#navb").css({ "backgroundColor": "white", "boxShadow": "0px 0px 2px #e6dada", "color": "black" });

        $(".navbar-dark .navbar-nav .nav-link").css({ "color": "black" });
        $(".navbar-brand").css({ "color": "black", "fontWeight": "bolder" });
        $('head').append('<style>.navbar-nav ul li a:before{background-color:black}</style>');
        $(".navbar-toggler").css({"backgroundColor": "black"});

    }
    else {

        $("#navb").css("padding","0px 0px"); 

        $("#navb").css({ "backgroundColor": "transparent", "boxShadow": "none" });
        
        $(".navbar-dark .navbar-nav .nav-link").css({ "color": "white" });
        $(".navbar-brand").css({ "color": "white", "fontWeight": "bolder" });
        $('head').append('<style>.navbar-nav ul li a:before{background-color:white}</style>');
        $(".navbar-toggler").css({"backgroundColor": "transparent"});
    }

    //............. de elgzaya ele5saa bl arrow 34an 2zherha 2w 25fehaa ..................
    if (wScroll > 400) {
        $("#btnUp").fadeIn(500);
    }
    else {
        $("#btnUp").fadeOut(100);
    }
    // ........................................................
    //     if (wScroll > workOffset + 200) {
    //         startCounter();

    // ......... دى كونديشن البروجريس عشان تانكريس اول ماسكرول قريب منها وبتتنفذ بعد الريلود بس
    if (wScroll > aboutOffsetTop - 300) {
        $('.progress-bar').each(function () {
            var $this = $(this);
            var aria = $this.attr('aria-valuenow');
            $this.css("width", aria + '%');
            $({ animatedValue: 0 }).animate({ animatedValue: aria }, {
                duration: 1000,
                step: function () {
                    $this.attr('aria-valuenow', Math.floor(this.animatedValue) + '%');
                },
                complete: function () {
                    $this.attr('aria-valuenow', Math.floor(this.animatedValue) + '%');
                }
            });
        });
    }
})


// ........ عشان لما اتك على زرار فى الناف بار ينزل باسموس كدا للسيكشن بتاعه ..............
$("a[class^='nav-item']").click(function () {
    let aHref = $(this).attr("href");
    let sectionOffsetDown = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffsetDown - 80 }, 1700);
});

// دى جزئية لما اتك على علامة السيتنج يدخلى الديف مرة ويخرجهالى مرة
$("#sideBarToggle").click(function () {
    let colorBoxWidth = $("#colorsBox").innerWidth();
    if ($("#sideBar").css("left") == "0px") {
        $("#sideBar").animate({ left: `-${colorBoxWidth}` }, 1000);
    }
    else {
        $("#sideBar").animate({ left: `0px` }, 1000);
    }
})

// دى الجزئية بتاعت انى كل مرة بفتح الموقع بخليه يغير الالوان اللى فى الديف عشوائى 
// $(".color-item").eq(0).css("backgroundColor","black");
let colorBox = $(".color-item"); // يفضل انى اعملهكده افضل فى البيرفورمانس بدل مااقعد انادى عليه كل شوية
for (let i = 0; i < colorBox.length; i++) {
    let red = Math.round(Math.random() * 255); // كده معناه بطلع رقم من 0:255
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    colorBox.eq(i).css("backgroundColor", `rgb(${red},${green},${blue})`);
}

// دى بتاعت انى لما اتك على اى لون من الالوانات اللى فى البوكس يخلى شكل الكلام بالون اللى اختارته
colorBox.click(function () {
    let currentColor = $(this).css("backgroundColor"); // دى معناه خش جوا الزيز اللى عايدة على اللون اللى انا ضغطت عليه وهاتلى السى اس اس بتاعه
    $(".navbar-brand,h3,h4,h5,.w,.am").css("color", currentColor);
})


// دى جزئية اللودنج اللى بتظهر اول لما افتح الموقع بتدنها لغاية مالموقع يحمل 
$(document).ready(function () {



    // دى عشان انادى على البلاجين الجاهزة بتاعت الاسلايدر 
    // ......................................
    $(".skitter-large").skitter();
    // .......................................


    //  اللى هى بتاعت الكتباة اللى فى سيشن الهيدر فوق typed.js عشان انادى على البلاجين بتاعت 
    // .......................................
    var typed = new Typed('.element', {
        // Waits 1000ms after typing "First"
        strings: [' Developer', ' Designer', ' Larry Danials'],//دى الاسترنجات اللى هيكتبها ويبدل مابينهم
        loop: true, typeSpeed: 70, backSpeed: 70, shuffle: true,// ده عشان الوقت اللى هيكتب فيه الاسترنج
    });
    // .......................................


    // دى عشان الموقع فضل متغطى بشاشة اللودنج لغاية مايعمل ريدى فيخفى الديف اللى هى لودنج ويظهر البادى
    // .......................................
    $("#loading").fadeOut(1000, function () {
        $("body").css("overflow-y", "auto");
    });
    // .......................................


    // Initiate venobox lightbox
    $('.venobox').venobox();
    
});




// jQuery counterUp دى جزئية الكاونتر لما اجى اسكرول
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
});




// Navigation active state on scroll
// دى حتة لما اجى اعمل اسكرول السيشن اللى واقف عليه هو اللى يكون اكتيف فوق وتحت اسمه لاين
// .............................................
var nav_sections = $('section');
var main_nav = $('.navbar-nav');
$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
        var top = $(this).offset().top,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            if (cur_pos <= bottom) {
                main_nav.find('li').removeClass('active');
            }
            main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
            $(".navbar-nav ul:first li:first").addClass('active');
        }
    });
});



// .......................................
  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  $(window).on('load', function() {
    aos_init();
  });






//..............................................



// ................................................

// function counterUp(){
//     let counter = 0;
//     let x =  setInterval(function(){
//         counter++;
//        $("#custommersCounter").html(counter);
//         if(counter == 850){
//             clearInterval(x);
//         }

//     },500);
// }
// .......................................................
// function counterUp(element, limit, speed) {
//     let counter = 0;
//     let x = setInterval(function () {
//         counter++;
//         $(element).html(counter);
//         if (counter == limit) {
//             clearInterval(x);
//         }

//     }, speed);
// }
// function startCounter() {
//     counterUp("#custommersCounter", 850, 6);
//     counterUp("#projectsCounter", 230, 20);
//     counterUp("#CodesCounter", 1050, 0.000001);
//     counterUp("#DownloadedCounter", 780, 6);
// }
// ................................................................

// بتاخد وقت اطول من الريدى لانها بتستنى كل حاجة تحمل
// window.onload = function () {
//     $("#loading").fadeOut(1000, function () {
//         $("body").css("overflow", "auto");
//     });
// };



