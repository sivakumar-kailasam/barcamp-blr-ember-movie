window.App = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true, 

  // Extremely detailed logging, highlighting every internal
  // step made while transitioning into a route, including
  // `beforeModel`, `model`, and `afterModel` hooks, and
  // information about redirects and aborted transitions
  LOG_TRANSITIONS_INTERNAL: true

  // For more log/debug flags refer to http://emberjs.com/guides/understanding-ember/debugging/
});


App.Router.map(function() {
	this.resource('about');
	this.resource('movies', function() {
		this.resource('movie', { path : ':movie_name'});
	});
});