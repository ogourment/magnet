Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.onBeforeAction((function() {
  if (!Meteor.user()) {
    return this.render("AccessDenied");
  } else {
    return this.next();
  }
}), {
  only: ["profile"]
});

Router.route('/', {
  name: 'Home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('votes', {
  name: 'Votes',
  controller: 'VotesController',
  action: 'action',
  where: 'client'
});

Router.route('topics', {
  name: 'Topics',
  controller: 'TopicsController',
  action: 'action',
  where: 'client'
});

Router.route('photos', {
  name: 'Photos',
  controller: 'PhotosController',
  action: 'action',
  where: 'client'
});

Router.route('topics/new', {
  name: 'TopicNew',
  controller: 'TopicNewController',
  action: 'action',
  where: 'client'
});

Router.route('topics/index', {
  name: 'TopicsIndex',
  controller: 'TopicsIndexController',
  action: 'action',
  where: 'client'
});

Router.route('topics/:_id', {
  name: 'TopicShow',
  controller: 'TopicShowController',
  action: 'action',
  where: 'client'
});

Router.route('topics/:_id/edit', {
  name: 'TopicEdit',
  controller: 'TopicEditController',
  action: 'action',
  where: 'client'
});

Router.route('teams/:_id', {
  name: 'TeamShow',
  controller: 'TeamShowController',
  action: 'action',
  where: 'client'
});

Router.route('commitments', {
  name: 'Commitments',
  controller: 'CommitmentsController',
  action: 'action',
  where: 'client'
});

Router.route('reactions', {
  name: 'Reactions',
  controller: 'ReactionsController',
  action: 'action',
  where: 'client'
});

Router.route('charts', {
  name: 'Charts',
  controller: 'ChartsController',
  action: 'action',
  where: 'client'
});

Router.route('people', {
  name: 'People',
  controller: 'PeopleController',
  action: 'action',
  where: 'client'
});


Router.route('profile', {
  name: 'profile',
  controller: 'ProfileController',
  action: 'action',
  where: 'client'
});
