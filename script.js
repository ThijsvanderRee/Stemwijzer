var vraag = 0;

function start() {
  const home = document.getElementById('start');
  const questions = document.getElementById('question_holder');
  const question_title = document.getElementById('question_title');
  const question_statement = document.getElementById('question_statement');

  home.classList.add('hide');
  questions.classList.add('showquestion');
  console.log(subjects);

  question_title.innerHTML = (vraag+1) + ". " + subjects[vraag].title;
  question_statement.innerHTML = subjects[vraag].statement;
}

function next() {
  var questions = document.getElementById('question_holder');
  var alt = document.getElementById('qh_alt');
  // console.log(vraag);
  if (vraag >= 29) {
    questions.classList.remove('showquestion');
    alt.classList.add('showquestion');
    var x = 0;
    for (var i = 0; i < vraag; i++) {
      var checkbox_inner = document.createElement('DIV');
      var checkbox = document.createElement('INPUT');
      var checkbox_text = document.createElement('SPAN');

      checkbox_text.innerHTML = subjects[x].title;

      x++;

      checkbox.setAttribute("type", "checkbox");
      checkbox_inner.setAttribute("id", "checkbox_inner" + x);

      document.getElementById("checkboxes_holder").appendChild(checkbox_inner);
      document.getElementById("checkbox_inner" + x).appendChild(checkbox);
      document.getElementById("checkbox_inner" + x).appendChild(checkbox_text);
    }
  } else {
    vraag++;
    start();
  }
}
