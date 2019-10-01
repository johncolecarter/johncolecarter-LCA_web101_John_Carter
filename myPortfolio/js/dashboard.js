$(function() {
  let $list = $("ol");
  let $newItemForm = $("#newItemForm");

  $newItemForm.on("submit", function(e) {
    e.preventDefault();
    let mytext = $('input[type="text"]').val();
    $list.append(`<li>${mytext}</li>`);
    $('input[type="text"]').val("");
  });

  $list.on("click", "li", function() {
    let $this = $(this);
    $this.remove();
  });
});
