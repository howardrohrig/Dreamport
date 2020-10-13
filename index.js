//---------------------------------------------------------------------------//

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

//---------------------------------------------------------------------------//

$(document).ready(function() {

  $('.arrow').click(function(){
      $('.tabHeader1').nextUntil('tr.tabHeader2').slideToggle(0);
  }).click();

  $('.arrow2').click(function(){
      $('.tabHeader2').nextUntil('tr.tabHeader3').slideToggle(0);
  }).click();

  $('.arrow3').click(function(){
      $('.tabHeader3').nextUntil('tr.tabHeader4').slideToggle(0);
  }).click();

});

//---------------------------------------------------------------------------//

var rotated1 = false;
var rotated2 = false;
var rotated3 = false;

document.getElementById('button1').onclick = function() {
  var div = document.getElementById('button1');

  if(rotated1 === false) {
    div.style.transform = 'rotate(90deg)';
    rotated1 = true;
  }else {
    div.style.transform = 'rotate(0)';
    rotated1 = false;
  }
}

document.getElementById('button2').onclick = function() {
  var div = document.getElementById('button2');

  if(rotated2 === false) {
    div.style.transform = 'rotate(90deg)';
    rotated2 = true;
  }else {
    div.style.transform = 'rotate(0)';
    rotated2 = false;
  }
}


document.getElementById('button3').onclick = function() {
  var div = document.getElementById('button3');

  if(rotated3 === false) {
    div.style.transform = 'rotate(90deg)';
    rotated3 = true;
  }else {
    div.style.transform = 'rotate(0)';
    rotated3 = false;
  }
}

//---------------------------------------------------------------------------//

function validateForm() {
  var x = document.forms["sugform"]["fname"].value;
  var y = document.forms["sugform"]["lname"].value;
  var z = document.forms["sugform"]["email"].value;
  var t = document.forms["sugform"]["suggestion"].value;

  if(x == "" || y == "" || z == "" || t == ""){
    alert("Please fill out all sections!");
    return false;
  }
}
