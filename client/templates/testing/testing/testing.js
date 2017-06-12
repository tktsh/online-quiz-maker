testingHelpers = {
	testItems: [
		{
			description: 'Test description 1'
		},
		{
			description: 'Test description 2'
		},
		{
			description: 'Test description 3'
		},
	],
}

Template.testingTemplate.onCreated(function(){});
Template.testingTemplate.helpers({});
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
	}
});