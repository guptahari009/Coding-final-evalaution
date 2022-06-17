document.querySelector("form").addEventListener("submit", call);

function call(event) {
  event.preventDefault(); 
  var cardno = document.querySelector("#cardno").value;
  var cvv = document.querySelector("#cvv").value;
  var exdate = document.querySelector("#exdate").value;

  if (cvv === "123" && exdate === "01-01-2022") {
    alert("Otp Sent Succesfully");
    window.location.href = "Otp.html";
  } else {
    swal("Oops!", "Something went wrong on the page!", "error")
  }
}