Template.layout.helpers({
	pageTitle: function() { return Session.get('pageTitle'); }
});


Deps.autorun( function() { 
  alert('Value is: ' + Session.get('pageTitle')); 
});