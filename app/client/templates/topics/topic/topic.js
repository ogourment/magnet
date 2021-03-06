/*****************************************************************************/
/* Topic: Event Handlers */
/*****************************************************************************/
Template.Topic.events({
  "click .plusOne": function (event, template) {
    var topic = template.data;
    var user = Meteor.user();
    if (user) {
      var vote = Votes.findOne({
        userId: user._id,
        topicId: topic._id
      });
      if (vote) {
        Votes.update({_id: vote._id}, {$inc: {points: 1}});
      }
      else {
        Votes.insert({userId: user._id, topicId: topic._id, points: 1});
      }
      Topics.update({_id: topic._id}, {$inc: {totalPoints: 1}});
    }
  },
  "click .minusOne": function (event, template) {
    var topic = template.data;
    var user = Meteor.user();
    if (user) {
      var vote = Votes.findOne({
        userId: user._id,
        topicId: topic._id
      });
      if (vote) {
        if (vote.points == 1) {
          Votes.remove({_id: vote._id});
        }
        else {
          Votes.update({_id: vote._id}, {$inc: {points: -1}});
        }
      }
      Topics.update({_id: topic._id}, {$inc: {totalPoints: -1}});
    }
  }
});

/*****************************************************************************/
/* Topic: Helpers */
/*****************************************************************************/
Template.Topic.helpers({
  canUpvote: function () {
    return getAvailablePoints();
  },
  canDownvote: function () {
    var topic = this;
    var user = Meteor.user();
    if (user) {
      return Votes.findOne({userId: user._id, topicId: topic._id});
    }
  },
  topicSize: function () {
    var topic = this;
    if (topic.totalPoints <= 1) {
      return "xs-topic"
    } else if (topic.totalPoints < 3) {
      return "sm-topic"
    } else if (topic.totalPoints < 9) {
      return "md-topic"
    } else if (topic.totalPoints < 20) {
      return "lg-topic"
    } else {
      return "xl-topic"
    }
  },
  points: function () {
    var topic = this;
    var user = Meteor.user();
    if (user) {
      return Votes.findOne({userId: user._id, topicId: topic._id}).points;
    }
  }
});

/*****************************************************************************/
/* Topic: Lifecycle Hooks */
/*****************************************************************************/
Template.Topic.created = function () {
};

Template.Topic.rendered = function () {
};

Template.Topic.destroyed = function () {
};
