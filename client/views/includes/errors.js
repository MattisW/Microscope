Template.errors.helpers({
  errors: function() {
  	return Errors.find();
  }
});

// Takes care of edge case where user wouldn't 
// see Error due to redirection. Therefore, we
// defer the setting ot the seen value!

Template.error.rendered = function() {
  var error = this.data;
  Meteor.defer(function() {
  	Errors.update(error._id, { $set: {
  	  seen: true
  	}});
  });
};