var vraag = 0;

for (var i = 0; i < 23; i++) {
  const points = parties[i].points = 0;
}

function start() {
  const home = document.getElementById('start');
  const questions = document.getElementById('question_holder');
  const question_title = document.getElementById('question_title');
  const question_statement = document.getElementById('question_statement');

  home.classList.add('hide');
  questions.classList.add('showquestion');

  question_title.innerHTML = (vraag+1) + ". " + subjects[vraag].title;
  question_statement.innerHTML = subjects[vraag].statement;
}

function next(answer) {
  var questions = document.getElementById('question_holder');
  var alt = document.getElementById('qh_alt');
  if (vraag >= 29) {
    questions.classList.remove('showquestion');
    alt.classList.add('showquestion');
    var x = 0;
    for (var i = 0; i < vraag; i++) {
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
  } else {
    for (var i = 0; i < 23; i++) {
      var checkPosition = subjects[vraag].parties[i].position;
      var points = parties[i].points;
      if (checkPosition == answer){
        parties[i].points++;
      }
    }
    vraag++;
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
    checkbox_inner.setAttribute("id", "chooseparty_inner" + j);

    document.getElementById("parties_holder").appendChild(checkbox_inner);
    document.getElementById("chooseparty_inner" + j).appendChild(checkbox);
    document.getElementById("chooseparty_inner" + j).appendChild(checkbox_text);
    j++;
  }
}

function results() {
  var chooseParty = document.getElementById('qh_alt_alt');
  var show_winner = document.getElementById('qh_winner');

  chooseParty.classList.remove('showquestion');
  show_winner.classList.add('showquestion');

  parties.sort((a,b) => (a.points > b.points) ? -1 : 1 );
  console.log(parties[1].name);
  var winner_name = document.getElementById("winner_title");
  winner_name.innerHTML = parties[1].name;
}
