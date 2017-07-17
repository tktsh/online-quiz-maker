/* Template: quizTemplate */
Template.quizTemplate.onCreated(function(){});
Template.quizTemplate.helpers({
	testItems: function(){
		return TestItems.find();
	},
	questionItems: function(){
		var questionID = this.questions.map(function(item){ return item.index; });
		var answer = QuestionItems.find({ "_id": { "$in": questionID } });
		var index = 0;
		var answer = answer.map(function(item){ item.index = ++index; return item; });
		return answer;
	},
});
Template.quizTemplate.events({
	'click .question-block__start-btn': function(e){

		function startTimer(duration, display) {
			var timer = duration, minutes, seconds;
			var countdownIntervalId = setInterval(function () {
				minutes = parseInt(timer / 60, 10);
				seconds = parseInt(timer % 60, 10);
				
				minutes = minutes < 10 ? "0" + minutes : minutes;
				seconds = seconds < 10 ? "0" + seconds : seconds;

				display.text(minutes + ":" + seconds);

				if (--timer < 0) {
					$('.quizAnswersForm').submit();
					clearInterval(countdownIntervalId);
					$('.countdown').css('display', 'none');
				}
			}, 1000);
		}

		var quizDuration = 60 * Template.parentData().time,
		display = $('.countdown');
		startTimer(quizDuration, display);

		$('.countdown').css('display', 'block');
		$('.question-block[data-index="1"]').addClass('visible');
		$('.question-block__start').css('display', 'none');
		$('.question-block__content').css('display', 'block');
	},
	'click .test-nav-btn__next': function(e, t){
		var index = $('.question-block.visible').data('index');
		$('.question-block.visible').removeClass('visible');
		$('.question-block[data-index="'+(index+1)+'"]').addClass('visible');
		$('.question-index__current').html(index+1);
		$('.test-nav-btn__prev_disable').removeClass('test-nav-btn__prev_disable');

		if((index+1) == t.data.questions.length){
			$('.test-nav-btn__next').css('display', 'none');
			$('.test-nav-btn__send').css('display', 'block');
		}

	},
	'click .test-nav-btn__prev:not(.test-nav-btn__prev_disable)': function(e, t){
		var index = $('.question-block.visible').data('index');
		$('.question-block.visible').removeClass('visible');
		$('.question-block[data-index="'+(index-1)+'"]').addClass('visible');
		$('.question-index__current').html(index-1);

		if((index-1) == 1){
			$('.test-nav-btn__prev').addClass('test-nav-btn__prev_disable');
		}

		if(index == t.data.questions.length){
			$('.test-nav-btn__next').css('display', 'block');
			$('.test-nav-btn__send').css('display', 'none');
		}

	},
	'click .test-nav-btn__send': function(e, t){
		$('.quizAnswersForm').submit();
	},
	'submit .quizAnswersForm': function(e, t){
		var formResult = $('.quizAnswersForm').serializeArray();
		var questionID = this.questions.map(function(item){ return { index: item.index } });
		var quizAnswers = questionID;
		formResult.forEach(function(item) {
			var questionNumber = item.name.replace('question','');
			quizAnswers[questionNumber-1].answer = ( typeof quizAnswers[questionNumber-1].answer != 'undefined' && quizAnswers[questionNumber-1].answer instanceof Array ) ? quizAnswers[questionNumber-1].answer : [];
			quizAnswers[questionNumber-1].answer.push(item.value);
		});
		e.preventDefault();

		function checkQuizResult(result){
			var points = 0;

			// Need to compare quizAnswers and QuestionItems.by_id

			quizAnswers.forEach(function(item){
				var question = QuestionItems.findOne({ "_id": item.index });
				console.log(question);
				question.variants.forEach(function(v){
					if (item.answer.length == 1){
						if((v.text == item.answer[0])&&(v.сorrect == true)){
							points++;
						}
					}else{
						// TODO: Add new types of qustions;
						if((v.text == item.answer[0])&&(v.сorrect == true)){
							points++;
						}
					}
				});
			});

			$('.question-block__end-text').text('Вы набрали '+points+' из '+questionID.length+' баллов.');
			$('.question-block__content').css('display', 'none');
			$('.question-block__end').css('display', 'block');
			$('.countdown').css('display', 'none');
		}

		checkQuizResult(quizAnswers);
	}
});


/* Template: quizTemplate__question */
Template.quizTemplate__question.helpers({
	equals: function (a, b){
		return a === b;
	},
});