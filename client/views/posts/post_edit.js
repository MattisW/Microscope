Template.postEdit.events({
  'submit form': function(e) {
  	e.preventDefault();

  	var currentPostId = this._id;

  	var postProperties = {
  	  url: $('#editURL').val(),
  	  title: $('#editTitle').val()
  	};

  	Posts.update(currentPostId, {$set: postProperties}, function(error) {
  	  if (error) {
  	  	// display error to user
  	  	Errors.throw(error.reason);
  	  } else {
  	  	Router.go('postPage', {_id: currentPostId});
  	  }
  	});
  },

  'click .delete': function(e) {
  	e.preventDefault();

  	if (confirm("Delete this post?")) {
  	  var currentPostId = this._id;
  	  Posts.remove(currentPostId);
  	  Router.go('home');
  	}
  }
});