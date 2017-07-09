
testingHelpers = {
	/*testItems: [
		{
			author: '000001',
			subject: '000001',
			description: 'Basic math test for students of primary school.',
			questions: [
				{
					index: '1',
					type: 'radio',
					text: '2 + 2 = ',
					variants: [
						{
							value: '3',
							answer: false
						},
						{
							value: '5',
							answer: false
						},
						{
							value: '4',
							answer: true
						},
					],
				},
				{
					index: '2',
					type: 'checkbox',
					text: '9 is result of:',
					variants: [
						{
							value: '3 * 3',
							answer: true
						},
						{
							value: '12 - 3',
							answer: true
						},
						{
							value: '17 - 9',
							answer: false
						},
					],
				},
			]
		}
	],*/
	testItems: function(){
		return TestItems.find();
	},
}

Template.testingTemplate.onCreated(function(){});
Template.testingTemplate.helpers(testingHelpers);
Template.testingTemplate.events({
	'click .filters-drop-down': function(e){
		if ( $('.filters-drop-down__content').has( $(e.target)).length ){
			return false;
		}else{
			if( $(e.target).closest('.filters-drop-down').hasClass('filters-drop-down_closed') ){
				$('.filters-drop-down:not(.filters-drop-down_closed)').addClass('filters-drop-down_closed');
				$(e.target).closest('.filters-drop-down').toggleClass('filters-drop-down_closed');
			}else{
				$(e.target).closest('.filters-drop-down').toggleClass('filters-drop-down_closed');
			}
		}
	},
	'click .filters-drop-down__content': function(e){
		console.log('');
	},
	'submit .createNewTestForm': function(e){
		var description = e.target.title.value;
		TestItems.insert({description: description});
		e.target.title.value = "";
		return false;
	},
	'click .deleteTestItem': function(e){
		TestItems.remove(this._id);
	},
	'click .addQuestion': function(e){
		//var newID = new Meteor.Collection.ObjectID();
		TestItems.update({_id: this._id}, {$push: {questions: {_id: newID._str, text: 'test'} }});
	},
	'click .deleteQuestion': function(e){
		console.log(this);
		// TestItems.update({_id: ""}, {$unset: { questions : "" } } );
	},
	'click .testItem': function(e, template){
		console.log(this);
		console.log(template.view);
	}
});