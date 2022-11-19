var text = ["text1", "text2", "text3"];

$(".submit-button").on("click", function(){
$("div").text.forEach(function(el) {
  var div = document.createElement("div");
  div.innerHTML = el;
  document.body.appendChild(div);
});

});
