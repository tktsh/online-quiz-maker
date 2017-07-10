Template.testEditorTemplate.onCreated(function(){});
Template.testEditorTemplate.helpers({
	questionItems: function(){
		return QuestionItems.find();
	},
	cHelpers: function(){
		return clientHelpers;
	},
});
Template.testEditorTemplate.events({
	'change .createNewTestForm__subject': function(e){
		$('.createNewTestForm__question_currentSubject').removeClass('createNewTestForm__question_currentSubject');
		$('.createNewTestForm__question[data-subject="'+e.target.value+'"]').addClass('createNewTestForm__question_currentSubject');
	},
	'submit .createNewTestForm': function(e){
		var item = {};
		var questionsCount = 0;
		for(var i = 0; i < e.target.length; i++){

			// testSubject testName testTime
			// questionVariant

			switch(e.target[i].name) {
				case 'testSubject':
						item.subject = e.target[i].value;
					break;
				case 'testName':
						item.name = e.target[i].value;
					break;
				case 'testTime':
						item.time = e.target[i].value;
					break;
				case 'questionVariant':
						if (e.target[i].checked){
							if(!item.questions){item.questions = [];}
							item.questions[questionsCount] = {};
							item.questions[questionsCount].index = $(e.target[i]).attr("data-id");
							questionsCount++;
						}
					break;
				default:
					break;
			}
		}

		TestItems.insert(item);
		e.target.testName.value = "";
		// TODO: clean variant fields;
		return false;
	},
});

Template.testEditorTemplate.rendered = function(){
	$('.createNewTestForm__question[data-subject="'+clientHelpers.testSubjects[0]+'"]').addClass('createNewTestForm__question_currentSubject');
};