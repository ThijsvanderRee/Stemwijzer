var vraag = 0;

function start() {
  var home = document.getElementById('start');
  var questions = document.getElementById('question_holder');
  var question_title = document.getElementById('question_title');
  var question_statement = document.getElementById('question_statement');

  home.classList.add('hide');
  questions.classList.add('showquestion');
  console.log(subjects);

  question_title.innerHTML = (vraag+1) + ". " + subjects[vraag].title;
  question_statement.innerHTML = subjects[vraag].statement;
}

function next() {
  var questions = document.getElementById('question_holder');
  var alt = document.getElementById('qh_alt');
  console.log(vraag);
  if (vraag >= 29) {
    questions.classList.remove('showquestion');
    for (var i = 0; i < vraag.length; i++) {
      var checkbox = document.createElement('INPUT');
      var checkbox_text = document.createTextNode(question_title);
      checkbox.setAttribute("type", "checkbox");
      document.body.appendChild(alt);
    }
  } else {
    vraag++;
    start();
  }
}
