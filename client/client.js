TestItems = new Mongo.Collection('testitems');
Meteor.subscribe('testitems');

QuestionItems = new Mongo.Collection('questionitems');
Meteor.subscribe('questionitems');

clientHelpers = {
	testSubjects: [
		'Математика',
		'География',
		'Философия',
		'Искусcтво',
		'Другой'
	],
}

Template.body.onCreated(function bodyOnCreated(){});
Template.body.helpers({});
Template.body.events({});