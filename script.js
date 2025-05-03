document.getElementById("showPopupBtn").addEventListener("click", function() {

const modalElement = document.getElementById("congratsModal");

const modal = new bootstrap.Modal(modalElement);

modal.show();

});
