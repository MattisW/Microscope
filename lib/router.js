Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
  // Homepage
  this.route('postsList', {path: '/'});
  // Single Post Page
  this.route('postPage', {
  	path: '/posts/:_id/',
  	data: function() { return Posts.findOne(this.params._id); }
  });
  // Post submit Page
  this.route('postSubmit', {
  	path: '/submit'
  });
});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
  	if (Meteor.loggingIn()) {
  	  this.render(this.loadingTemplate);
  	} else {
      this.render('accessDenied');
  	  pause();
    }
  }
};

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});