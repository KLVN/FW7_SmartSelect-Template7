var myApp = new Framework7({
});
var $$ = Dom7;

// Select Template
var template = document.getElementById('list-template').innerHTML;

// Compile and render
var compiledTemplate = Template7.compile(template);

// Get JSON Data
$$.getJSON ('fruit.json', function (json) {

// Insert rendered template
document.getElementById('content-wrap').innerHTML = compiledTemplate(json);
});

var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true
});
