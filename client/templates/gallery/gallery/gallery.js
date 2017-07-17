galleryHelpers = {
	galleryItems: [
		{	
			id: "001",
			next: "002",
			img: 'http://s1.vcdn.biz/static/f/947737231/image.jpg',
			full: 'http://s1.vcdn.biz/static/f/977348421/image.jpg',
			max: 'http://s1.vcdn.biz/static/f/947730881/image.jpg',
			description: 'Подготовка к государственным экзаменам'
		},
		{
			id: "002",
			prev: "001",
			next: "003",
			img: 'http://s1.vcdn.biz/static/f/947737031/image.jpg',
			full: 'http://s1.vcdn.biz/static/f/977348901/image.jpg',
			max: 'http://s1.vcdn.biz/static/f/947731731/image.jpg',
			description: 'Обучение на природе'
		},
		{
			id: "003",
			prev: "002",
			next: "004",
			img: 'http://s1.vcdn.biz/static/f/947737391/image.jpg',
			full: 'http://s1.vcdn.biz/static/f/977349331/image.jpg',
			max: 'http://s1.vcdn.biz/static/f/947732111/image.jpg',
			description: 'И даже с книги у моря'
		},
		{
			id: "004",
			prev: "003",
			next: "005",
			img: 'http://s1.vcdn.biz/static/f/947737561/image.jpg',
			full: 'http://s1.vcdn.biz/static/f/977350171/image.jpg',
			max: 'http://s1.vcdn.biz/static/f/947732371/image.jpg',
			description: 'Школа в Африке'
		},
		{
			id: "005",
			prev: "004",
			next: "006",
			img: 'http://s1.vcdn.biz/static/f/947737751/image.jpg',
			full: 'http://s1.vcdn.biz/static/f/977351471/image.jpg',
			max: 'http://s1.vcdn.biz/static/f/947732631/image.jpg',
			description: 'Выпускники ВУЗ Соединенных Штатов'
		},
		{
			id: "006",
			prev: "005",
			next: "007",
			img: 'http://s1.vcdn.biz/static/f/947738001/image.jpg',
			full: 'http://s1.vcdn.biz/static/f/977351961/image.jpg',
			max: 'http://s1.vcdn.biz/static/f/947733101/image.jpg',
			description: 'Жесткие меры контроля'
		},
		{
			id: "007",
			prev: "006",
			next: "008",
			img: 'http://s1.vcdn.biz/static/f/947738931/image.jpg',
			full: 'http://s1.vcdn.biz/static/f/977352381/image.jpg',
			max: 'http://s1.vcdn.biz/static/f/947733401/image.jpg',
			description: 'Дистанционное образование из коворкинга'
		},
		{
			id: "008",
			prev: "007",
			next: "009",
			img: 'http://s1.vcdn.biz/static/f/947739071/image.jpg',
			full: 'http://s1.vcdn.biz/static/f/977352861/image.jpg',
			max: 'http://s1.vcdn.biz/static/f/947733771/image.jpg',
			description: 'Дистанционное образование из дома'
		},
		{
			id: "009",
			prev: "008",
			next: "010",
			img: 'http://s1.vcdn.biz/static/f/947739331/image.jpg',
			full: 'http://s1.vcdn.biz/static/f/977353491/image.jpg',
			max: 'http://s1.vcdn.biz/static/f/947734221/image.jpg',
			description: 'Уроки для самых маленьких'
		},
		{
			id: "010",
			prev: "009",
			next: "011",
			img: 'http://s1.vcdn.biz/static/f/947737231/image.jpg',
			full: 'http://s1.vcdn.biz/static/f/977348421/image.jpg',
			max: 'http://s1.vcdn.biz/static/f/947730881/image.jpg',
			description: 'Подготовка к государственным экзаменам'
		},
		{
			id: "011",
			prev: "010",
			next: "012",
			img: 'http://s1.vcdn.biz/static/f/947737031/image.jpg',
			full: 'http://s1.vcdn.biz/static/f/977348901/image.jpg',
			max: 'http://s1.vcdn.biz/static/f/947731731/image.jpg',
			description: 'Обучение на природе'
		},
		{
			id: "012",
			prev: "011",
			img: 'http://s1.vcdn.biz/static/f/947737391/image.jpg',
			full: 'http://s1.vcdn.biz/static/f/977349331/image.jpg',
			max: 'http://s1.vcdn.biz/static/f/947732111/image.jpg',
			description: 'И даже с книги у моря'
		},
	],

	getNewGalleryItem: function(newID){
		var arr = this.galleryItems;
		for (var i=0; i<arr.length; i++){
			if ( arr[i].id == newID ){
				this.renderItem(arr[i]);
			}	
		}
	},

	renderItem: function(item){
		//$('.galleryModal__image').css('background-image', 'url(' + item.full + ')');

		var imageFull = new Image();
		imageFull.src = item.full;

		//$('.galleryModal__image').css('opacity','0');

		$(imageFull).load(function(){
			$('.galleryModal__image').css('background-image', 'url('+ $(this).attr("src") + ')');
			/* $( '.galleryModal__image' ).animate({
				opacity: '1'
			}, 300); */
		}); 


		$('.modal-additions__description').html(item.description);

		if (item.prev){
			$('.modal-additions__prev').data('prev-id', item.prev);
			$('.modal-additions__prev').removeClass('modal-additions__prev_inactive');
		}else{
			$('.modal-additions__prev').addClass('modal-additions__prev_inactive');
		}

		if (item.next){
			$('.modal-additions__next').data('next-id', item.next);
			$('.modal-additions__next').removeClass('modal-additions__next_inactive');
		}else{
			$('.modal-additions__next').addClass('modal-additions__next_inactive');
		}

		$('.galleryModal').show(); $('.modal-bg-cover').show();
	}
}

Template.galleryTemplate.onCreated(function(){});
Template.galleryTemplate.helpers(galleryHelpers);
Template.galleryTemplate.events({
	'click .image-box': function(e, tmpl){

		var imageFull = new Image();
		imageFull.src = this.full;

		//$('.galleryModal__image').css('opacity','0');

		$(imageFull).load(function(){
			$('.galleryModal__image').css('background-image', 'url('+ $(this).attr("src") + ')');
			/*$( '.galleryModal__image' ).animate({
				opacity: '1'
			}, 300);*/
		}); 

		$('.modal-additions__description').html(this.description);

		if (this.prev){
			$('.modal-additions__prev').data('prev-id', this.prev);
			$('.modal-additions__prev').removeClass('modal-additions__prev_inactive');
		}else{
			$('.modal-additions__prev').addClass('modal-additions__prev_inactive');
		}

		if (this.next){
			$('.modal-additions__next').data('next-id', this.next);
			$('.modal-additions__next').removeClass('modal-additions__next_inactive');
		}else{
			$('.modal-additions__next').addClass('modal-additions__next_inactive');
		}

		$('.galleryModal').show(); $('.modal-bg-cover').show();
	},
	'click .galleryModal__close': function(e, tmpl){
		$('.galleryModal').hide(); $('.modal-bg-cover').hide();
		$('.galleryModal__image').css('background-image', 'none');
		$('.modal-additions__description').empty();
	},

	'click .modal-additions__prev': function(e, tmpl){
		if (!$(e.target).hasClass('modal-additions__prev_inactive')){
			var newID = $('.modal-additions__prev').data('prev-id');
			galleryHelpers.getNewGalleryItem(newID);
		}
	},

	'click .modal-additions__next': function(e, tmpl){
		if (!$(e.target).hasClass('modal-additions__next_inactive')){
			var newID = $('.modal-additions__next').data('next-id');
			galleryHelpers.getNewGalleryItem(newID);
		}
	},

	'click .galleryModal__close': function(e, tmpl){
		$('.galleryModal').hide(); $('.modal-bg-cover').hide();
		$('.galleryModal__image').css('background-image', 'none');
		$('.modal-additions__description').empty();
	},

});
