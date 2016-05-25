var Template = require('./../js/template.js').Template;
$(document).ready(function(){
  $('#printInput').submit(function(event){
    event.preventDefault();
    var printField = $('#userInput').val();

    var newTemplate = new Template(printField);
    console.log(newTemplate.print());
  });
});
