var next = function(){
	current.deleteClass('.current');

}

//select all items and current selected item
var items = document.querySelectorAll('.slide');
var others = document.querySelectorAll('.inactive');
var current = '';
var next = document.querySelector('#next');
var prev = document.querySelector('#previous');
var slideCount = 0;

init();

//cycle through 'images'
	//Create click event for arrow
next.addEventListener('click', function(){
	nextSlide();
});

prev.addEventListener('click', function(){
	previousSlide();
});

function nextSlide(){
	slideCount += 1

	if(slideCount > items.length - 1){
		slideCount = 0;
	}

	current.className = ('slide inactive');
	current = items[slideCount];
	current.className = 'slide active';
};

function previousSlide(){

};

function init(){
	items[slideCount].className = 'slide active';
	current = items[slideCount];
};