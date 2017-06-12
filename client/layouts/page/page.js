
Template.pageLayout.onCreated(function bodyOnCreated(){

	function Slider(selector, slideTime){
		var self = this;
		this.selector = selector;
		this.slideCount = 0;
		this.slideTime = slideTime ? slideTime : 3500;
		this.slideInterval = setInterval(function() {
			self.next();
		}, this.slideTime);
		this.next = function(n){
			$(this.selector +' .slider-screen > div:first-of-type').appendTo(this.selector +' .slider-screen');
		};
		this.prev = function(n){
			$(this.selector +' .slider-screen > div:last-of-type').prependTo(this.selector +' .slider-screen');
		};
		this.init = function(){
			this.slideCount = $(this.selector +' .slide').length;
			Template.pageLayout.events({
				'click': function (e) {
					if ( $(e.currentTarget).hasClass('next-slide') ){
						self.next();
					}else if( $(e.currentTarget).hasClass('prev-slide') ){
						self.prev();
					}
				}
			});

		};
		this.init();
	}

	// Initialization of slider with .slider-1 selector and set 5s interval for slides:
	var slider = new Slider('.slider-1', 5000);

});

Template.pageLayout.events({
	'click .sidebar': function(e){
		if ( $('.sidebar').has( $(e.target)).length ){
			
		}else{
			$('.sidebar').toggleClass('sidebar_opened');
			$('.open-sidebar__shape').toggleClass('open-sidebar__shape_close');
		}
	},
	'click .open-sidebar': function(e){
		$('.sidebar').toggleClass('sidebar_opened');
		$('.open-sidebar__shape').toggleClass('open-sidebar__shape_close');
	},
	'click .menu-drop-down__btn': function(e){
		$(e.target).closest('li').toggleClass('menu-drop-down_closed');
	}
});


