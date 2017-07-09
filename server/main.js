import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  TestItems = new Mongo.Collection('testitems');
  QuestionItems = new Mongo.Collection('questionitems');
});
