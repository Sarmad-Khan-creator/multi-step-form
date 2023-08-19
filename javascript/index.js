$(".step1").show();
$(".step2").hide();
$(".step3").hide();
$(".step4").hide();
$(".step5").hide();
$(".numbering-1").css("background-color", "hsl(228, 100%, 84%)");

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
      return false;
    }else{
      return true;
    }
  }

$(".step1 button").click(function () {

     $(".numbering-1").css("background-color", "transparent");
     $(".numbering-2").css("background-color", "hsl(228, 100%, 84%)");

     var email = $("#femail").val();
    if($("#fname").val() == "") {
        $(".name-error-message").text("Field Required *");
    } else {
        $(".name-error-message").text("");
    }

    if($("#femail").val() == "") {
        $(".email-error-message").text("Field required *");
    } else {
        $(".email-error-message").text("");
    }

    if($("#fnumber").val() == "") {
        $(".number-error-message").text("Field required *");
    } else {
        $(".number-error-message").text("");
    }

    if(IsEmail(email) == false) {
        $("#femail").css("background-color", "rgb(255, 0, 0, 0.1)");
    }

    if($("#fname").val() != "" && $("#femail").val() != "" && $("#fnumber").val() != "" && IsEmail(email)) {
         $(".step1").hide();
         $(".step2").show();
         $(".step3").hide();
         $(".step4").hide();

         $(".error").text("");
    }
});

$(".step2 .go-back").click(function () {
    $(".step1").show();
    $(".step2").hide();

    $(".numbering-1").css("background-color", "hsl(228, 100%, 84%)");
    $(".numbering-2").css("background-color", "transparent");
});

$(".step2 .next-step").click(function () {
    $(".step2").hide();
    $(".step3").show();

    $(".numbering-2").css("background-color", "transparent");
    $(".numbering-3").css("background-color", "hsl(228, 100%, 84%)");
});

$(".step3 .next-step").click(function () {
    $(".step3").hide();
    $(".step4").show();

    $(".numbering-3").css("background-color", "transparent");
    $(".numbering-4").css("background-color", "hsl(228, 100%, 84%)");


    var serviceChecked = $("#services").is(":checked");
    var storageChecked = $("#storage").is(":checked");
    var profileChecked = $("#profile").is(":checked");
        
    if(serviceChecked) {
        $(".container-items2 .plan-heading").text("Online Service");
        $(".container-items2 .plan-rates").text($(".online-services .amount").text());
    } else {
        $(".container-items2 .plan-heading").text("");
        $(".container-items2 .plan-rates").text("");
    }

    if(storageChecked) {
        $(".container-items3 .plan-heading").text("Larger Storage");
        $(".container-items3 .plan-rates").text($(".larger-storage .amount").text());
    } else {
        $(".container-items3 .plan-heading").text("");
        $(".container-items3 .plan-rates").text("");
    }

    if(profileChecked) {
        $(".container-items4 .plan-heading").text("Customizable Profile");
        $(".container-items4 .plan-rates").text($(".customizable-profile .amount").text());
    } else {
        $(".container-items4 .plan-heading").text("");
        $(".container-items4 .plan-rates").text("");
    }
});

$(".step3 .go-back").click(function () {
    // $(".step1").hide();
    $(".step2").show();
    $(".step3").hide();
    // $(".step4").hide();

    $(".numbering-2").css("background-color", "hsl(228, 100%, 84%)");
    $(".numbering-3").css("background-color", "transparent");
});

$(".step4 .go-back").click(function () {
    // $(".step1").hide();
    // $(".step2").hide();
    $(".step3").show();
    $(".step4").hide();

    $(".numbering-3").css("background-color", "hsl(228, 100%, 84%)");
    $(".numbering-4").css("background-color", "transparent");
});

$(".step4 .confirm").click(function () {
    $(".step4").hide();
    $(".step5").show();
})

$(".switch-box").click(function () {
    if($(".switch-box").is(":checked")) {
        $(".arcade p").text("$90/yr");
        $(".advance p").text("$120/yr");
        $(".pro p").text("$150/yr");

        $(".online-services .amount").text("$10/yr");
        $(".larger-storage .amount").text("$20/yr");
        $(".customizable-profile .amount").text("$20/yr");
    } else {
        $(".arcade p").text("$9/mo");
        $(".advance p").text("$12/mo");
        $(".pro p").text("$15/mo");

        $(".online-services .amount").text("$1/mo");
        $(".larger-storage .amount").text("$2/mo");
        $(".customizable-profile .amount").text("$2/mo");
    }
})

$(".arcade").click(function () {
    $(".arcade").css("border-color", "black");
    $(".advance").css("border-color", "hsl(229, 24%, 87%)");
    $(".pro").css("border-color", "hsl(229, 24%, 87%)");

    $(".container-items1 h4").text("Arcade");
    $(".container-items1 .plan-rates").text($(".arcade > p").text());
})

$(".advance").click(function () {
    $(".arcade").css("border-color", "hsl(229, 24%, 87%");
    $(".advance").css("border-color", "black");
    $(".pro").css("border-color", "hsl(229, 24%, 87%)");

    $(".container-items1 h4").text("Advance");
    $(".container-items1 .plan-rates").text($(".advance > p").text());
})

$(".pro").click(function () {
    $(".arcade").css("border-color", "hsl(229, 24%, 87%)");
    $(".advance").css("border-color", "hsl(229, 24%, 87%)");
    $(".pro").css("border-color", "black");

    $(".container-items1 h4").text("Pro");
    $(".container-items1 .plan-rates").text($(".pro p").text());
})




// Mobile Design

var x = window.matchMedia("(max-width: 500px)");

if (x.matches) {
    $(".sidebar-desktop").remove();
    $(".steps").remove();
    $(".mobile").attr("src", "./assets/images/bg-sidebar-mobile.svg")
}
    