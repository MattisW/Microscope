Template.header.helpers({
	pageTitle: function() { return Session.get('pageTitle'); }
});


Deps.autorun( function() {
  Session.set('pageTitle', 'Microscope');
});

/* ---------------------------

Deps.autorun( function() { 
  alert('Value is: ' + Session.get('pageTitle')); 
});

/* ---------------------------

Deps.autorun(function() {
  var x = prompt('Set PageTitle');
  Session.set('pageTitle', x);
});

----------------------------- */ 