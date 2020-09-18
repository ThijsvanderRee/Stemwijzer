var question = 0;
var chosenParties = [];
var partiesAmount = parties.length;
var questionAmount = subjects.length;
// console.log(partiesAmount);
// console.log(questionAmount);

for (var i = 0; i < partiesAmount; i++) {
  const points = parties[i].points = 0;
}

function start() {
  const home = document.getElementById('start');
  const questions = document.getElementById('question_holder');
  const question_title = document.getElementById('question_title');
  const question_statement = document.getElementById('question_statement');

  home.classList.add('hide');
  questions.classList.add('showquestion');

  question_title.innerHTML = (question + 1) + ". " + subjects[question].title;
  question_statement.innerHTML = subjects[question].statement;
}

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

function next(answer) {
  if (question >= questionAmount - 1) {
    altQuestion()
    } else {
    for (var i = 0; i < partiesAmount; i++) {
      var checkPosition = subjects[question].parties[i].position;
      var points = parties[i].points;
      if (checkPosition == answer){
        parties[i].points++;
      }
    }
    question++;
    start();
  }
}

function previousQuestion() {
  if (question <= 0) {
    location.reload();
  } else {
    question--;
    start();
  }
}

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

function results() {
	var items = document.getElementsByClassName('cbPartij');
	var selectedItems = "";
  var selectedParties = [];

  for(var i = 0; i < items.length; i++) {
    if(items[i].checked == true) {
      selectedItems = items[i].value;
      selectedParties.push(selectedItems);
    }
  }

  if (selectedItems.length > 0) {
    selectedParties.forEach((item, i) => {
      for (var j = 0; j < parties.length; j++) {
        if (selectedParties[i] === parties[j].name) {
          chosenParties.push(parties[j])
        }
      }
    });
    // console.log('chosen');
    chosenParties.sort((a,b) => (a.points > b.points) ? -1 : 1 );
    // console.log(chosenParties);
    var winner_name = document.getElementById("winner_title");
    winner_name.innerHTML = chosenParties[0].name;

  } else {
    // console.log("not chosen");
    var winners = parties.sort((a,b) => (a.points > b.points) ? -1 : 1 );
    var winner_name_alt = document.getElementById("winner_title");
    winner_name_alt.innerHTML = winners[0].name;
  }

  var chooseParty = document.getElementById('qh_alt_alt');
  var show_winner = document.getElementById('qh_winner');

  chooseParty.classList.remove('showquestion');
  show_winner.classList.add('showquestion');
}
