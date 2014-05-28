Template.postSubmit.events({
  'submit form': function(e) {
  	e.preventDefault();

  	var post = {
  	  url: $('#formURL').val(),
  	  title: $('#formTitle').val(),
  	  message: $('#formMessage').val()

/* --------------------------------------------------     
  	  url: $(e.target).find('[name=url]').val(),
  	  title: $(e.target).find('[name=title]').val(),
  	  message: $(e.target).find('[name=message]').val()
--------------------------------------------------- */
  	};

  	Meteor.call('post', post, function(error, id) {
  	  if (error) {
  	  	// display the error to the user
  	  	Errors.throw(error.reason);
  	  	if (error.error === 302) {
  	  	  Router.go('postPage', {_id: error.details});
  	  	} else {
  	  	  Router.go('postPage', {_id: id});
  	  	}
  	  } 
  	});
  	
//  Router.go('postsList');
// 	post._id = Posts.insert(post);
  	
  }
});