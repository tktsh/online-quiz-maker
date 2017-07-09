Template.questionsEditorTemplate.onCreated(function(){

});
Template.questionsEditorTemplate.helpers({
	questionItems: function(){
		return QuestionItems.find();
	},
	cHelpers: function(){
		return clientHelpers;
	},
});
Template.questionsEditorTemplate.events({
	'click .createNewQuestionForm__newVariant': function(e){
		var newVariant =`
			<li class='answer_variant'>
				<input type="checkbox" name="correctAnswersGroup">
				<input type="answer_variant__text" placeholder="Вариант ответа ...">
				<div class="answer_variant__delete">✖</div>
			</li>`;

		$('.createNewQuestionForm___variants').append(newVariant);
		var count = $(".answer_variant").length;
		if (count > 2){ $('.answer_variant__delete').css('display', 'block'); }
	},
	'click .answer_variant__delete': function(e){
		$(e.target).closest('.answer_variant').remove();
		var count = $(".answer_variant").length;
		if (count < 3){ $('.answer_variant__delete').css('display', 'none'); }
	},
	'submit .createNewQuestionForm': function(e){
		var item = {};
		var variantsCount = 0;
		for(var i = 0; i < e.target.length; i++){

			// questionSubject questionArea questionTypeGroup
			// correctAnswersGroup answerVariant

			switch(e.target[i].name) {
				case 'questionSubject':
						item.subject = e.target[i].value;
					break;
				case 'questionArea':
						item.text = e.target[i].value;
					break;
				case 'questionTypeGroup':
						if ( e.target[i].checked ){
							item.type = e.target[i].value;
						}
					break;
				case 'correctAnswersGroup':
						if(!item.variants){item.variants = [];}
						item.variants[variantsCount] = {};
						item.variants[variantsCount].сorrect = (e.target[i].checked) ? true : false;
						item.variants[variantsCount].text = e.target[++i].value;
						variantsCount++;
					break;
				default:
					break;
			}
		}

		QuestionItems.insert(item);
		e.target.questionArea.value = "";
		return false;
	},
	'click .deleteQuestion': function(e){
		QuestionItems.remove(this._id);
	},
});