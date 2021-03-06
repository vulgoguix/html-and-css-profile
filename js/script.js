( () => { // function anony
const menu = document.querySelector('[data-mobile-menu]');
const menuLinks = document.querySelector('[data-navbar-menu]');
// data attributes to handle js manipulation
menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    status.classList.add('success');
    status.innerHTML = "Thanks! I will contact you soon.";
  }

  function error() {
    status.classList.add('error');
    status.innerHTML = "Oops! There was an error.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX(  Asynchronous JavaScript and XML ) request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

})() // => started function ()