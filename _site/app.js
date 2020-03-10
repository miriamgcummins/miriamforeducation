// Primary Form Submission Logic
document.getElementById("choice").addEventListener('change', function() {
  let el = document.getElementById("choice");
  let userChoice = el.options[el.selectedIndex].value;

  let hiddenField = document.getElementById("hiddenField");
  hiddenField.value = userChoice;
});


function someFunction() {
  // console.log("someFunction() fired");

  // let formArea = document.getElementsByClassName("hero__form-section");
  // formArea[0].style.display = "none"

  // let replacementArea = document.getElementById('hero');

  // let node = document.createElement("H1");
  // node.setAttribute("id", "thankYou");
  // let textNode = document.createTextNode('Thank you for making your voice heard!');
  // node.appendChild(textNode);
  window.location.replace("http://www.w3schools.com");

}