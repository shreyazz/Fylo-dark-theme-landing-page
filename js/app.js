$(document).ready(function () {
  $("#error_text").css("display", "none");
  $("#submit").click(function () {
    email_validation();
  });

  function email_validation() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#email").val();

    if (email !== "") {
      if (pattern.test(email)) {
        $("#error_text").css("display", "none");
      } else {
        $("#error_text").css("display", "block");
      }
    } else {
      $("#error_text").css("display", "block");
      $("#error_text").css("display", "none");
    }
  }
});
