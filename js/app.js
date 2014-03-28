var movies = [{
	"id": "0",
	"name": "captain_america_the_winter_soldier",
	"title": "Captain America: The Winter Soldier",
	"synopsis": "Steve Rogers continues his journey as the super-powered American soldier who's grasping to find his place in a modern world after being frozen in ice since WWII with this Marvel Studios sequel. Chris Evans returns to star, with Community director/producers Joe and Anthony Russo helming.",
	"thumbnail": "http://content8.flixster.com/movie/11/17/42/11174290_det.jpg",
	"pics": ["http://content8.flixster.com/rtmovie/11/41/114178_gal.jpg", "http://content7.flixster.com/rtmovie/11/36/113637_gal.jpg", "http://content6.flixster.com/rtmovie/11/36/113636_gal.jpg"]
}, {
	"id": "1",
	"name": "how_to_train_your_dragon_2",
	"title": "How to Train Your Dragon 2",
	"synopsis": "DreamWorks Animation returns to the world of dragons and Vikings in this sequel to their successful 2010 outing How to Train Your Dragon. The original film followed the exploits of a Viking chief's son, who must capture a dragon in order to mark his passage into manhood and prove his worthiness to the tribe",
	"thumbnail": "http://content7.flixster.com/movie/11/17/49/11174941_det.jpg",
	"pics": ["http://content7.flixster.com/rtmovie/11/42/114229_gal.jpg", "http://content7.flixster.com/rtmovie/11/35/113509_gal.jpg", "http://content8.flixster.com/rtmovie/11/42/114230_gal.jpg"]
}, {
	"id": "2",
	"name": "x_men_days_of_future_past",
	"title": "X-Men: Days of Future Past",
	"synopsis": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods. The characters from the original 'X-Men' film trilogy join forces with their younger selves from the past, in order to change a major historical event and fight in an epic battle that could save our future. ",
	"thumbnail": "http://content7.flixster.com/movie/11/17/70/11177049_det.jpg",
	"pics": ["http://content9.flixster.com/rtmovie/11/59/115975_gal.jpg", "http://content8.flixster.com/rtmovie/11/59/115974_gal.jpg", "http://content7.flixster.com/rtmovie/11/47/114765_gal.jpg"]
}];


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
		this.resource('movie', {
			path: ':movie_name'
		});
	});
});

App.IndexRoute = Ember.Route.extend({
	redirect: function() {
		this.transitionTo('movies.index');
	}
});

App.MoviesIndexRoute = Ember.Route.extend({
	model: function() {
		return movies;	
	}
});