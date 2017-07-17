Template.testingTemplate.onCreated(function(){});
Template.testingTemplate.helpers({
	testItems: function(){
		return TestItems.find();
	},
	cHelpers: function(){
		return clientHelpers;
	},
});
Template.testingTemplate.events({
	'click .filters-drop-down': function(e){
		if (! $('.filters-drop-down__content').has( $(e.target)).length ){
			if( $(e.target).closest('.filters-drop-down').hasClass('filters-drop-down_closed') ){
				$('.filters-drop-down:not(.filters-drop-down_closed)').addClass('filters-drop-down_closed');
				$(e.target).closest('.filters-drop-down').toggleClass('filters-drop-down_closed');
			}else{
				$(e.target).closest('.filters-drop-down').toggleClass('filters-drop-down_closed');
			}
		}
	},
	'click .deleteTestItem': function(e){
		TestItems.remove(this._id);
	},
	'click .subject_options': function(e){
		var x = $(e.target).is(":checked");
		var subject = $(e.target).data('value');
		if (x){
			$('.testItem[data-subject="'+subject+'"]').css('display', 'block');
		}else{
			$('.testItem[data-subject="'+subject+'"]').css('display', 'none');
		}
	},
});