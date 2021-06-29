let plus_button_clicked = false;
const pastelColors = [ "#31BFF3", "#A484E9", "#F4889A", "#FFAF68", "#F6E683", "#79D45E" ];
const bookmarksArray = [ "About Me!", "Skills", "Open Source Contributions", "Interests, Hobbies", "Blog" ];

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

function plusClick(){
	plus_button_clicked = !plus_button_clicked;
	console.log(plus_button_clicked);
	if(plus_button_clicked){
		doPlusClickedAction();
	}
	else{
		doPlusUnclickedAction();
	}
}

function init(){
	$("#popup-container").remove();
	$("#plus-button").append('<div id="popup-container"></div>');
	$("#popup-container").append('<div id="bookmark-container" class="fade-in"></div>');

	/* define the css of the bookmark-container */
//	const bookmarkContainerX = $("#about-container").width();
//	const bookmarkContainerY = -$("#about-container").height();
	let plus_button = document.getElementById("plus-button");
	const bookmarkContainerX = plus_button.offsetLeft + plus_button.offsetWidth;
	const bookmarkContainerY = plus_button.offsetTop;

	console.log(bookmarkContainerY, bookmarkContainerX);
	$("#bookmark-container").css({
		"position": "fixed",
		"top" : bookmarkContainerY,
		"left" : bookmarkContainerX,
		"display" : "flex",
		"flex-direction" : "column",
		"justify-content" : "center",
		"z-index" : "-1",
		"margin" : "10px",
		"transform": "scale(0.8)",
	});

	/* add bookmarks to the bookmark-container */
	/* bookmarks now: 
	 * 1. About me!
	 * 2. Skills
	 * 3. Open source contributions
	 * 4. Interests, hobbies
	 * 5. Blog
	 * */
	for(let i = 0; i < bookmarksArray.length; i++){
		$("#bookmark-container").append('<div id="bookmark-'+i.toString()+'" class="card bookmark-item"></div>');
		$('#bookmark-'+i).html("<h2>" + bookmarksArray[i] + "</h2>").css({
			"text-align" : "center",
			"color": "#121212",
			"margin" : "10px",
			"padding" : "5px",
			"border-radius" : "10px",
		});
		$('#bookmark-'+i.toString()).css({
			"background-color": pastelColors[i],
		});
		$("#bookmark-"+i.toString()).html("<h4>" + bookmarksArray[i] + "<h4>");
	}

	$("#popup-container").hide();
}

function doPlusClickedAction(){
	$("#popup-container").show();
}
function doPlusUnclickedAction(){
	$("#popup-container").fadeOut("normal", ()=>{
		$("#popup-container").hide();
	});
}

$(document).mouseup(function(e){
    var container = $("#popup-container");

    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
			$("#popup-container").fadeOut("normal", ()=>{
				$("#popup-container").hide();
			});
    }
		plus_button_clicked = false;	
});

$(document).ready( ()=>{
	init();
	for(let i = 0; i < bookmarksArray.length; i++){
		let disp = "row";
		let rot = "rotate90";
		var body = document.body,
    html = document.documentElement;

		var h= Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
		var w= Math.max( body.scrollWidth, body.offsetWidth,
                       html.clientWidth, html.scrollWidth, html.offsetWidth );
		if ($(window).width() < 850){
			disp = "column";	
			rot = "";
			h = "auto";
			w = "auto";
		}

		console.log($(window).width());
			$(main).append('<div id="fillpage-' + i.toString() + '" class="fillpage"></div>');
			$("#fillpage-" + i.toString()).css({
				"position" : "absolute",
				"top" : "0",
				"left" : "0",
				"height" : h,
				"width" : w,
				"display" : "flex",
				"flex-direction" : disp,
				"justify-content" : "space-between",
				"background-color" : pastelColors[i],
				"z-index" : "5",
			})
		.append('<div id="vertical-name-' + i.toString() + '" class="vertical_name"> </div>')
		.append('<div id="sub-content-' + i.toString() + '" class="subcontent"> </div>')
		.append('<div id="exit-options-' + i.toString() + '" class="exit_options"> </div>');

		$("#fillpage-" + i.toString()).hide();
		$("#vertical-name-" + i.toString()).append('<p class="'+ rot  + ' bot_line">' + bookmarksArray[i] + '</p>');
		$("#exit-options-" + i.toString()).append('<button id="close-button-' + i.toString() + '" class="transparent-button"><img src="img/close.svg" class="contact-icon"/></button>');
	}

	$("#sub-content-0").append('<p class="big-font"> Hi! I\'m <b class="name-emphasis">Vivek!</b> I\'m an aerospace engineer with a passion for programming. I spend most of my time solving problems that I think I can never solve and then take joy in proving me wrong. I\'m a very curious guy, and I\'m always open to learning anything new that I can use it to my advantage. All the success I had in my life comes from strong willpower and determination, which makes me a firm believer in the proverb: <br><em>Where there\'s a will, there\'s a way!</em></p>');

	$("#sub-content-1").append('<h2 id="progLangHeader">Programming Languages:</h2>');
	$("#sub-content-1").append('<div id="progLangContainer"> </div>');
	$("#progLangContainer").append('<img class="skill0 good-size" src="img/skills/c.svg" />');
	$("#progLangContainer").append('<img class="skill1 good-size" src="img/skills/cpp.svg" />');
	$("#progLangContainer").append('<img class="skill2 good-size" src="img/skills/python.svg" />');
	$("#progLangContainer").append('<img class="skill3 good-size" src="img/skills/java.svg" />');
	$("#progLangContainer").append('<img class="skill4 good-size" src="img/skills/js.svg" />');
	$("#progLangContainer").append('<img class="skill5 good-size" src="img/skills/bash.svg" />');
	$("#progLangContainer").append('<img class="skill6 good-size" src="img/skills/matlab.svg" />');
	$("#progLangContainer").append('<img class="skill7 good-size" src="img/skills/html.svg" />');
	$("#progLangContainer").append('<img class="skill8 good-size" src="img/skills/css.svg" />');

	$("#sub-content-1").append('<h2 id="progToolHeader">Tools:</h2>');
	$("#sub-content-1").append('<div id="progToolContainer"> </div>');
	$("#progToolContainer").append('<img class="skill0 good-size" src="img/skills/jquery.svg" />');
	$("#progToolContainer").append('<img class="skill1 good-size" src="img/skills/scss.svg" />');
	$("#progToolContainer").append('<img class="skill2 good-size" src="img/skills/git.svg" />');
	$("#progToolContainer").append('<img class="skill3 good-size" src="img/skills/godot.svg" />');
	$("#progToolContainer").append('<img class="skill4 good-size" src="img/skills/react.svg" />');
	$("#progToolContainer").append('<img class="skill5 good-size" src="img/skills/android_studio.svg" />');
	$("#progToolContainer").append('<img class="skill6 good-size" src="img/skills/freecad.svg" />');
	$("#progToolContainer").append('<img class="skill7 good-size" src="img/skills/inkscape.svg" />');
	$("#progToolContainer").append('<img class="skill8 good-size" src="img/skills/gimp.svg" />');
	$("#progToolContainer").append('<img class="skill9 good-size" src="img/skills/qt.svg" />');
	$("#progToolContainer").append('<img class="skill10 good-size" src="img/skills/glade.svg" />');


	$("#sub-content-2").append('<p class="white-text">Contributing to Open Source softwares has immensely helped me to gain more insight about the extent and nature of work that goes into software development. Through every single contribution, I get better at reading and understanding codebases and coming up with better solutions. It continues to improve my code quality as well as confidence to write better programs.</p>');
	$("#sub-content-2").append('<img class="skill0 good-size" src="img/skills/xournalpp.svg" />');
	$("#sub-content-2").append('<img class="skill0 good-size" src="img/skills/zim.svg" />');
	$("#sub-content-2").append('<img class="skill0 good-size" src="img/skills/stockfish.svg" />');
	$("#sub-content-2").append('<img class="skill0 good-size" src="img/skills/gtimelog.svg" />');

	$("#sub-content-3").append('<div id="hobby-main-container" class=""></div>');
	$("#hobby-main-container").append('<div id="hobby-container1" class="card"></div>');
	$("#hobby-container1").append('<h2 id="chessHeader">Chess</h2>');
	$("#hobby-container1").append('<img class="nice-size" src="img/skills/chess.svg" />');

	$("#hobby-main-container").append('<div id="hobby-container2" class="card"></div>');
	$("#hobby-container2").append('<h2 id="musicHeader">Music</h2>');
	$("#hobby-container2").append('<img class="nice-size" src="img/skills/music.svg" />');

	$("#sub-content-4").append('<h1 class="white-text huge-font">COMING SOON!</h1>');
	/* escape button event */
  $(document).on('keyup', function(event) {
    if(event.key == "Escape") {
			for(let i = 0; i < bookmarksArray.length; i++)
				$("#fillpage-"+i.toString()).hide();
			$("#main-container").show();
    }
  });

	$("#close-button-0").click( () => {
		$("#fillpage-0").hide();
		$("#main-container").show();
	});
	$("#bookmark-0").click( ()=>{ 
		$("#fillpage-0").slideDown("normal", ()=>{
			$("#fillpage-0").show();
			$("#main-container").hide();
			$("#popup-container").hide();
			plus_button_clicked = false;	
		});
	});

	$("#close-button-1").click( () => {
		$("#fillpage-1").hide();
		$("#main-container").show();
	});
	$("#bookmark-1").click( ()=>{ 
		$("#fillpage-1").slideDown("normal", ()=>{
			$("#fillpage-1").show();
			$("#main-container").hide();
			$("#popup-container").hide();
			plus_button_clicked = false;	
		});
	});

	$("#close-button-2").click( () => {
		$("#fillpage-2").hide();
		$("#main-container").show();
	});
	$("#bookmark-2").click( ()=>{ 
		$("#fillpage-2").slideDown("normal", ()=>{
			$("#fillpage-2").show();
			$("#main-container").hide();
			$("#popup-container").hide();
			plus_button_clicked = false;	
		});
	});

	$("#close-button-3").click( () => {
		$("#fillpage-3").hide();
		$("#main-container").show();
	});
	$("#bookmark-3").click( ()=>{ 
		$("#fillpage-3").slideDown("normal", ()=>{
			$("#fillpage-3").show();
			$("#main-container").hide();
			$("#popup-container").hide();
			plus_button_clicked = false;	
		});
	});

	$("#close-button-4").click( () => {
		$("#fillpage-4").hide();
		$("#main-container").show();
	});
	$("#bookmark-4").click( ()=>{ 
		$("#fillpage-4").slideDown("normal", ()=>{
			$("#fillpage-4").show();
			$("#main-container").hide();
			$("#popup-container").hide();
			plus_button_clicked = false;	
		});
	});
});
