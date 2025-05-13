/* $(document).ready(function() {
    jQuery("h1").css("color", "red");
})
 */

console.log($("h1").css("font-size"));

$("h1").addClass("big Colour");
$("h1").hasClass("big Colour");

/* $("button").text("Don't Click Me");
$("button")[0].text("Click Me"); */

/* $("h1").css("color", "purple"); */

/* 
// Event Listener
$("button").click(function(){
    $("h1").css("color", "yellow");
});
 */

// Key Press
$("body").keypress(function(event) {
    /* console.log(event.key); */
    $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "green");
});

$("h1").before("<button>New Button</button>"); // Adds Before the h1 Tag.
$("h1").after("<button>New Button</button>"); // Adds After the h1 Tag.
$("h1").prepend("<button>New Button</button>"); // Adds just before the h1 element.
$("h1").append("<button>New Button</button>"); // Adds just After the h1 element.


/* $("button").remove(); */


$("button").on("click", function() {
    /* $("h1").fadeOut(); */
    /* $("h1").fadeToggle(); */
   /*  $("h1").toggle(); */
    /* $("h1").hide(); */
    /* $("h1").slideUp();
    $("h1").slideDown(); */
   /*  $("h1").slideToggle(); */
});
/* 
$("h1").show();

$("button").click(function(){
    $("h1").animate({opacity: 0.5});
});

 */
$("button").on("click", function() {
    $("h1").fadeOut().fadeToggle().toggle().hide().slideUp().slideDown().slideToggle();
});