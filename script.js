var question = 0;
var chosenParties = [];
var savedAnswers = [];
var partiesAmount = parties.length;
var questionAmount = subjects.length;

for (var i = 0; i < partiesAmount; i++) {
  const points = parties[i].points = 0;
}

//Functie die een vraag start op basis van nummer in question
function start() {
  const home = document.getElementById('start');
  const questions = document.getElementById('question_holder');
  const question_title = document.getElementById('question_title');
  const question_statement = document.getElementById('question_statement');

  home.classList.add('hide');
  questions.classList.add('showquestion');

  question_title.innerHTML = (question + 1) + ". " + subjects[question].title;
  question_statement.innerHTML = subjects[question].statement;
  changeBtnColor();
}

//Functie die de kleur van een knop veranderd als je een vraag terug gaat naar het antwoord vna die vraag
function changeBtnColor() {
  const pro_btn = document.getElementById('pro_btn');
  const none_btn = document.getElementById('none_btn');
  const contra_btn = document.getElementById('contra_btn');
  if (savedAnswers[question] == "pro") {
    // console.log('pro');
    pro_btn.classList.add('answered_btn');
    none_btn.classList.remove('answered_btn');
    contra_btn.classList.remove('answered_btn');
  } else if (savedAnswers[question] == "none") {
    // console.log('none');
    pro_btn.classList.remove('answered_btn');
    none_btn.classList.add('answered_btn');
    contra_btn.classList.remove('answered_btn');
  } else if (savedAnswers[question] == "contra") {
    // console.log('contra');
    pro_btn.classList.remove('answered_btn');
    none_btn.classList.remove('answered_btn');
    contra_btn.classList.add('answered_btn');
  } else {
    pro_btn.classList.remove('answered_btn');
    none_btn.classList.remove('answered_btn');
    contra_btn.classList.remove('answered_btn');
  }
}

//Functie die de normale vragen niet meer laat zien en de vragen weergeeft waar je kan kiezen welke vraag je belangrijk vind
function altQuestion() {
  var questions = document.getElementById('question_holder');
  var alt = document.getElementById('qh_alt');
  questions.classList.remove('showquestion');
  alt.classList.add('showquestion');
  var x = 0;
  for (var i = 0; i < questionAmount; i++) {
    var checkbox_inner = document.createElement('DIV');
    var checkbox = document.createElement('INPUT');
    var checkbox_text = document.createElement('SPAN');

    checkbox_text.innerHTML = subjects[x].title;

    checkbox.setAttribute("type", "checkbox");
    checkbox_inner.setAttribute("id", "checkbox_inner" + x);

    document.getElementById("checkboxes_holder").appendChild(checkbox_inner);
    document.getElementById("checkbox_inner" + x).appendChild(checkbox);
    document.getElementById("checkbox_inner" + x).appendChild(checkbox_text);
    x++;
  }
}

//Functie die naar de volgende vraag gaat en het antwoord op slaat van de huidige vraag in een array op de goede plek
function next(answer) {
  // savedAnswers.push(answer);
  savedAnswers.splice(question, 1, answer)
  // console.log(savedAnswers);
  if (question >= questionAmount - 1) {
    altQuestion()
  } else {
    question++;
    start();
    // console.log(parties);
  }
}

//Functie die naar de vorige vraag gaat
function previousQuestion() {
  if (question <= 0) {
    location.reload();
  } else {
    question--;
    start();
  }
}

//Functie die de vraag laat zien waar je moet kiezen welke partij je mee wilt nemen naar het kiezen
function chooseParty() {
  var alt = document.getElementById('qh_alt');
  var chooseParty = document.getElementById('qh_alt_alt');
  var parties_holder = document.getElementById('parties_holder');

  alt.classList.remove('showquestion');
  chooseParty.classList.add('showquestion');

  var j = 0;
  var partyAmount = parties.length;

  for (var i = 0; i < partyAmount; i++) {
    var checkbox_inner = document.createElement('DIV');
    var checkbox = document.createElement('INPUT');
    var checkbox_text = document.createElement('SPAN');

    checkbox_text.innerHTML = parties[j].name;

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", parties[j].name);
    checkbox.setAttribute("class", "cbPartij");
    checkbox_inner.setAttribute("id", "chooseparty_inner_" + j);

    document.getElementById("parties_holder").appendChild(checkbox_inner);
    document.getElementById("chooseparty_inner_" + j).appendChild(checkbox);
    document.getElementById("chooseparty_inner_" + j).appendChild(checkbox_text);

    j++;
  }
}

//Functie die op basis van de antwoorden punten geeft aan de partijen waarbij het antwoord gelijk is
function addPoints() {
  for (var i = 0; i < questionAmount; i++) {
    for (var j = 0; j < subjects[i].parties.length; j++) {
      var checkPosition = subjects[i].parties[j].position;
      var points = parties[j].points;
      if (checkPosition == savedAnswers[i]) {
        parties[j].points++;
      }
    }
  }
  // console.log(parties);
}

//Functie uit alle partijen de partij met de meeste punten pakt en weergeeft
function results() {
  var items = document.getElementsByClassName('cbPartij');
  var selectedItems = "";
  var selectedParties = [];

  addPoints();

  for (var i = 0; i < items.length; i++) {
    if (items[i].checked == true) {
      selectedItems = items[i].value;
      selectedParties.push(selectedItems);
    }
  }

  if (selectedItems.length > 0) {
    selectedParties.forEach((item, i) => {
      parties.forEach((item, j) => {
        if (selectedParties[i] === parties[j].name) {
          chosenParties.push(parties[j]);
        }
      });
    });
    chosenParties.sort((a, b) => (a.points > b.points) ? -1 : 1);
    var winner_name = document.getElementById("winner_title");
    winner_name.innerHTML = chosenParties[0].name;

  } else {
    var winners = parties.sort((a, b) => (a.points > b.points) ? -1 : 1);
    var winner_name_alt = document.getElementById("winner_title");
    winner_name_alt.innerHTML = winners[0].name;
  }

  var chooseParty = document.getElementById('qh_alt_alt');
  var show_winner = document.getElementById('qh_winner');

  chooseParty.classList.remove('showquestion');
  show_winner.classList.add('showquestion');
}