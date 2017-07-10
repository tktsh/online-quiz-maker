
testingHelpers = {
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
});