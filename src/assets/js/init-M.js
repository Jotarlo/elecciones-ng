document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
});


function OpenConfirmModal(message) {
  document.querySelector("#pConfirmationMessage").innerHTML = message;
  var elems = document.querySelectorAll(".modal");
  M.Modal.init(elems, {});
  let elem = document.querySelector("#modalConfirmation");
  var instance = M.Modal.getInstance(elem);
  instance.open();
}
