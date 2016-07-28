var items = document.querySelectorAll('.slide');
var current = '';
var next = document.querySelector('#next');
var prev = document.querySelector('#previous');
var buttons = document.querySelectorAll('button');
var slideCount = 0;

//Start slideshow on first image
init();

//Event listeners for buttons
next.addEventListener('click', function(){
	changeSlide('next');
});

prev.addEventListener('click', function(){
	changeSlide('previous');
});

//Function for slide change
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

//Initialization function
function init(){
	items[slideCount].className = 'slide active';
	current = items[slideCount];
};