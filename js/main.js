$(document).ready(function() {

  function activateChecklist() {

    // Activate instructions
    $(".ap-check h3").on("click", function() {

      if ($(this).parent().hasClass("ap-checked")) {
        $(this).parent().removeClass("ap-checked");
        // $(this).parent().next().css("color", "black");
        // $(this).parent().find(".ap-content").slideDown();
      } else {
        $(this).parent().addClass("ap-checked");
        // $(this).parent().next().css("color", "silver");
        // $(this).parent().find(".ap-content").slideUp();
      }

      // if ($(".ap-check:not(.ap-checked)").length > 0) {
      //   $("#thanks-div").addClass("hidden");
      // } else {
      //   $("#thanks-div").removeClass("hidden");
      // }

    });

  }

  activateChecklist();


  // Check if checked and show div accordingly
  $(".ap-check").on("change", function() {


  });



});
