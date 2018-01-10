var score = 0
var i = 1
var ans = 1
var happysound = new Audio('sounds/chime.mp3');
var angrysound = new Audio('sounds/clang.mp3');

function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
		document.searchImage.src = "images/dancing.gif"
		happysound.play();
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/crying.gif"
		angrysound.play();
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
		document.searchImage.src = "images/dancing.gif"
		happysound.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/crying.gif"
		angrysound.play();
    }
    document.view.qscore.value=score
}
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
		document.searchImage.src = "images/dancing.gif"
		happysound.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/crying.gif"
		angrysound.play();
    }
    document.view.qscore.value=score
}

else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
			document.searchImage.src = "images/dancing.gif"
			happysound.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         document.searchImage.src = "images/crying.gif"
		 angrysound.play();
    }
    document.view.qscore.value=score
}

else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
		document.searchImage.src = "images/dancing.gif"
		happysound.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
         document.searchImage.src = "images/crying.gif"
		 angrysound.play();
    }
    document.view.qscore.value=score
}

else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
		document.searchImage.src = "images/dancing.gif"
		happysound.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/crying.gif"
		angrysound.play();
    }
    document.view.qscore.value=score
}

else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
		document.searchImage.src = "images/dancing.gif"
		happysound.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/crying.gif"
		angrysound.play();
    }
    document.view.qscore.value=score
}

else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
		document.searchImage.src = "images/dancing.gif"
		happysound.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/crying.gif"
		angrysound.play();
    }
    document.view.qscore.value=score
}

else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
		document.searchImage.src = "images/dancing.gif"
		happysound.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/crying.gif"
		angrysound.play();
    }
    document.view.qscore.value=score
}

else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
		document.searchImage.src = "images/dancing.gif"
		happysound.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "images/crying.gif"
		angrysound.play();
    }
    document.view.qscore.value=score
}

	ans++; 
}
        
function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
    document.view.qscore.value=0;
	document.view.question.value ="What was the name of Charlie Sheen's character in Two and a Half Men? \na)Charlie Smith \nb)Charlie Harper \nc)Charlie Wright \nd)Alan Harper";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What was Bart Simpson's from the Simpsons famous punch-line? \na)Yeah boy! \nb)Aw man! \nc)Ay Caramba! \nd)Oh yeaahhh!";
    document.view.qans.value=""
}

else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What anime aired in the United States from 1989 to 1996 for a total of 291 episodes? \na)Naruto \nb)Detective Conan \nc)The Adventures of Trap God Ric \nd)Dragon Ball Z";
    document.view.qans.value=""
	}
	
	else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which children's cartoon features a main character of a blue cat? \na)The Amazing World of Gumball \nb)American Dad \nc)Adventure Time \nd)Fairly Odd Parents";
    document.view.qans.value=""
}

else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who plays Rachel Green in Friends? \na)Lisa Kudrow \nb)Jennifer Aniston \nc)Courteney Cox \nd)Maggie Wheeler";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="How did Will Smith Arrive to the Banks' mansion after arriving in Bel Air? \na)By Train \nb)By Bus \nc)By Walking \nd)By Cab";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the name of the triangle shaped antagonist in Gravity Falls? \na)Bill Cypher \nb)Bob Cypher \nc)Bob Psychic \nd)Bill Writer";
    document.view.qans.value=""
}

else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="In Bob's Burgers, Bob participates in a cooking competition in which Bob uses a Korean ingredient in his gourmet burger.  What Korean ingredient does he use? \na)Kimchi \nb)Gim \nc)Black Garlic \nd)Japchae";
    document.view.qans.value=""
}

else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who hosts the informative space show, Cosmos: A Spacetime Odyssey? \na)Mike Tyson \nb)Bill Nye \nc)Neil deGrasse Tyson \nd)Chris Hadfield";
    document.view.qans.value=""
}

else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="In the famous anime, Death Note, what was the name of former FBI agent that commits suicide after Light tricks her into revealing him her name? \na)Naomi Misora \nb)Misa Amane \nc)Teru Mikami \nd)Raye Penber";
    document.view.qans.value=""
}
else if (i===11){
    alert("You got"+ " " + Math.round(score/(i-1)*100)  + "% for this Trivia Quiz");
	if (score>=8) {
		document.searchImage.src = "images/disco.gif";
		alert("You did so good!  Party time!");
	}
	
	else if (score >=5) {
		document.searchImage.src = "images/meh.gif";
		alert("You did ok... You can do better.");
	}
	else {
	document.searchImage.src = "images/rage.gif";
	alert("You did bad...You must be pretty mad lol.");
	}
}
	i++; 
}

function redo(){
ans=1;
i=1;
score=0;
}


	