// var home = document.getElementById('start');
function start() {
  var home = document.getElementById('start');
  var questions = document.getElementById('question_holder');
  var question_title = document.getElementById('question_title');
  var question_statement = document.getElementById('question_statement')
  var question_number = document.getElementById('question_number');;
  var count = 1;

  home.classList.add('hide');
  questions.classList.add('showquestion');
  console.log(subjects);

  question_title.innerHTML = subjects[0].title;
  question_statement.innerHTML = subjects[0].statement;
  question_number.innerHTML = count;
}
