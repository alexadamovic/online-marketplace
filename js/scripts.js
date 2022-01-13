$(document).ready(function() {
  $("#order-go").click(function(event) {
    event.preventDefault();
    $(".order-form").hide();
    $(".receipt").show();
  });
});