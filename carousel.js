var next = function(){
	current.deleteClass('.current');

}

//select all items and current selected item
var items = document.querySelectorAll('.slide');
var others = document.querySelectorAll('.inactive');
var current = '';
var next = document.querySelector('#next');
var prev = document.querySelector('#previous');
var buttons = document.querySelectorAll('button');
var slideCount = 0;

init();

// for(var i = 0; i < buttons.length; i++){
// 	buttons[i].addEventListener('click', function(){
// 		switch(this.id){
// 			case 'previous':
// 				previousSlide();
// 				break;
// 			case 'next':
// 				nextSlide();
// 				break;
// 		}
// 	});
// };

next.addEventListener('click', function(){
	changeSlide('next');
});

prev.addEventListener('click', function(){
	changeSlide('previous');
});

function changeSlide(option){
	switch(option){
		case 'previous':
			slideCount -= 1;
			if(slideCount < 0){
				slideCount = items.length - 1;
			};
			break;
		case 'next':
			slideCount += 1;
			if(slideCount > items.length - 1){
				slideCount = 0;
			};
			break;
	};

	current.className = ('slide inactive');
	current = items[slideCount];
	current.className = 'slide active';
};

function init(){
	items[slideCount].className = 'slide active';
	current = items[slideCount];
};