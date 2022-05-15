$(document).ready(function(){
    $("button").click(function(){

    });      
});

// NEXT BUTTONS
var nextone = document.getElementById('nextone');
var nexttwo = document.getElementById('nexttwo');
var nextthree = document.getElementById('nextthree');
var nextfour = document.getElementById('nextfour');
var nextfive = document.getElementById('nextfive');
var nextsix = document.getElementById('nextsix');
var nextseven = document.getElementById('nextseven');
var nexteight = document.getElementById('nexteight');
var nextnine = document.getElementById('nextnine');
var nextten = document.getElementById('nextten');

//PREVIOUS BUTTONS
var previousone = document.getElementById('previousone');
var previoustwo = document.getElementById('previoustwo');
var previousthree = document.getElementById('previousthree');
var previousfour = document.getElementById('previousfour');
var previousfive = document.getElementById('previousfive');
var previoussix = document.getElementById('previoussix');
var previousseven = document.getElementById('previousseven');
var previouseight = document.getElementById('previouseight');
var previousnine = document.getElementById('previousnine');
var previousten = document.getElementById('previousten');

// QUESTIONS
var questionTwo = document.getElementById('questionTwo')
var questionOne = document.getElementById('questionOne')
var questionThree = document.getElementById('questionThree')
var questionFour = document.getElementById('questionFour')
var questionFive = document.getElementById('questionFive')
var questionSix = document.getElementById('questionSix')
var questionSeven = document.getElementById('questionSeven')
var questionEight = document.getElementById('questionEight')
var questionNine = document.getElementById('questionNine')
var questionTen = document.getElementById('questionTen')


// MESSAGE;
var message = document.getElementById('message');
//FUNCTIONS
function check(){
    document.write("never give up!");
}

// ADD EVENTLISTENERS;
//Next Quiz Event
previoustwo.onclick = () => {
    questionTwo.style.display = 'none'
    questionOne.style.display = 'block'
}
previousthree.onclick = () => {
    questionThree.style.display = 'none'
    questionTwo.style.display = 'block'
}
previousfour.onclick = () => {
    questionFour.style.display = 'none'
    questionThree.style.display = 'block'
}
previousfive.onclick = () => {
    questionFive.style.display = 'none'
    questionFour.style.display = 'block'
}
previoussix.onclick = () => {
    questionSix.style.display = 'none'
    questionFive.style.display = 'block'
}
previousseven.onclick = () => {
    questionSeven.style.display = 'none'
    questionSix.style.display = 'block'
}
previouseight.onclick = () => {
    questionEight.style.display = 'none'
    questionSeven.style.display = 'block'
}
previousnine.onclick = () => {
    questionNine.style.display = 'none'
    questionEight.style.display = 'block'
}
previousten.onclick = () => {
    questionTen.style.display = 'none'
    questionNine.style.display = 'block'
}

//Next Question Event
nextone.onclick = () => {

    questionOne.style.display = 'none'
    questionTwo.style.display = 'block'
}
nexttwo.onclick = () => {
    questionTwo.style.display = 'none'
    questionThree.style.display = 'block'
}
nextthree.onclick = () => {
    questionThree.style.display = 'none'
    questionFour.style.display = 'block'
}
nextfour.onclick = () => {
    questionFour.style.display = 'none'
    questionFive.style.display = 'block'
}
nextfive.onclick = () => {
    questionFive.style.display = 'none'
    questionSix.style.display = 'block'
}
nextsix.onclick = () => {
    questionSix.style.display = 'none'
    questionSeven.style.display = 'block'
}
nextseven.onclick = () => {
    questionSeven.style.display = 'none'
    questionEight.style.display = 'block'
}
nexteight.onclick = () => {
    questionEight.style.display = 'none'
    questionNine.style.display = 'block'
}
nextnine.onclick = () => {
    questionNine.style.display = 'none'
    questionTen.style.display = 'block'
}
nextten.onclick = () => {
    questionTen.style.display = 'none'
    questionTen.style.display = 'block'
}

//function to calculate results
function calResults(e){
    if(e.innerHTML===questionBank[i].answer && results<questionBank.length)
{
    results=results+1;
    document.getElementById(e.id).style.background= 'limegreen'
}
  else{
    document.getElementById(e.id).style.background='tomato';
  }
  setTimeout(nextQuestion,300);
}
//back to quiz button event
function backToQuiz(){
    location.reload();
}
//check answers button event
function checkAnswer(){
    var answerBank=document.getElementById("answerBank");
    var answers=document.getElementById("answers");
    answerBank.style.display='block';
    result.style.display='block';
    for (var a=0;a<questionBank.length;a++)
    {
       var list=document.createElement('li');
       list.innerHTML=questionBank[a].answer;
    }
}

// SUBMIT QUESTIONS
var submitOne = document.getElementById('submitone');
var submitTwo = document.getElementById('submittwo');
var submitThree = document.getElementById('submitthree');
var submitFour = document.getElementById('submitfour');
var submitFive = document.getElementById('submitfive');
var submitSix = document.getElementById('submitsix');
var submitSeven = document.getElementById('submitseven');
var submitEight = document.getElementById('submiteight');
var submitNine = document.getElementById('submitnine');
var submitTen = document.getElementById('submitten');

// ONCLICK RADIO BUTTONS
// QUESTIONONE
var answerOne = document.getElementById('answerone')
var answerTwo = document.getElementById('answertwo')
var answerThree = document.getElementById('answerthree')
var answerFour = document.getElementById('answerfour')

// SUBMIT EVENTLISTNERS;

var answers = [];
var marks = 0
submitOne.onclick = () => {

     
    if(answerOne.checked == true) {

        oneCorrectAnswer = 'correctanswer'
    }
    else if( answerTwo.checked == true){

        oneCorrectAnswer = 'notcorect'
    }
    else if(answerThree.checked == true) {
        oneCorrectAnswer = 'notcorect'
    }
    else {
        oneCorrectAnswer = 'notcorect'
    }

    if(oneCorrectAnswer == 'correctanswer') {

        marks++
        answers.push(marks);
        console.log(marks);
        console.log(answers);

        message.style.display = 'block'
    }
    else {
        marks = 0
        answers.push(marks)
        console.log(marks);
        console.log(answers);
    }
}
submitTwo.onclick = () => {

     
    if(answerOne.checked == true) {

        oneCorrectAnswer = 'notcorect'
    }
    else if( answerTwo.checked == true){

        oneCorrectAnswer = 'notcorect'
    }
    else if(answerThree.checked == true) {
        oneCorrectAnswer = 'correctanswer'
    }
    else {
        oneCorrectAnswer = 'notcorect'
    }

    if(oneCorrectAnswer == 'correctanswer') {

        marks++
        answers.push(marks);
        console.log(marks);
        console.log(answers);

        message.style.display = 'block'
    }
    else {
        marks = 0
        answers.push(marks)
        console.log(marks);
        console.log(answers);
    }
}
submitThree.onclick = () => {

     
    if(answerOne.checked == true) {

        oneCorrectAnswer = 'notcorect'
    }
    else if( answerTwo.checked == true){

        oneCorrectAnswer = 'notcorect'
    }
    else if(answerThree.checked == true) {
        oneCorrectAnswer = 'correctanswer'
    }
    else {
        oneCorrectAnswer = 'notcorect'
    }

    if(oneCorrectAnswer == 'correctanswer') {

        marks++
        answers.push(marks);
        console.log(marks);
        console.log(answers);

        message.style.display = 'block'
    }
    else {
        marks = 0
        answers.push(marks)
        console.log(marks);
        console.log(answers);
    }
}
submitFour.onclick = () => {

     
    if(answerOne.checked == true) {

        oneCorrectAnswer = 'correctanswer'
    }
    else if( answerTwo.checked == true){

        oneCorrectAnswer = 'notcorect'
    }
    else if(answerThree.checked == true) {
        oneCorrectAnswer = 'notcorect'
    }
    else {
        oneCorrectAnswer = 'notcorect'
    }

    if(oneCorrectAnswer == 'correctanswer') {

        marks++
        answers.push(marks);
        console.log(marks);
        console.log(answers);

        message.style.display = 'block'
    }
    else {
        marks = 0
        answers.push(marks)
        console.log(marks);
        console.log(answers);
    }
}
submitFive.onclick = () => {

     
    if(answerOne.checked == true) {

        oneCorrectAnswer = 'notcorect'
    }
    else if( answerTwo.checked == true){

        oneCorrectAnswer = 'correctanswer'
    }
    else if(answerThree.checked == true) {
        oneCorrectAnswer = 'notcorect'
    }
    else {
        oneCorrectAnswer = 'notcorect'
    }

    if(oneCorrectAnswer == 'correctanswer') {

        marks++
        answers.push(marks);
        console.log(marks);
        console.log(answers);

        message.style.display = 'block'
    }
    else {
        marks = 0
        answers.push(marks)
        console.log(marks);
        console.log(answers);
    }
}
submitSix.onclick = () => {

     
    if(answerOne.checked == true) {

        oneCorrectAnswer = 'correctanswer'
    }
    else if( answerTwo.checked == true){

        oneCorrectAnswer = 'notcorect'
    }
    else if(answerThree.checked == true) {
        oneCorrectAnswer = 'notcorect'
    }
    else {
        oneCorrectAnswer = 'notcorect'
    }

    if(oneCorrectAnswer == 'correctanswer') {

        marks++
        answers.push(marks);
        console.log(marks);
        console.log(answers);

        message.style.display = 'block'
    }
    else {
        marks = 0
        answers.push(marks)
        console.log(marks);
        console.log(answers);
    }
}
submitSeven.onclick = () => {

     
    if(answerOne.checked == true) {

        oneCorrectAnswer = 'notcorect'
    }
    else if( answerTwo.checked == true){

        oneCorrectAnswer = 'notcorect'
    }
    else if(answerThree.checked == true) {
        oneCorrectAnswer = 'notcorect'
    }
    else {
        oneCorrectAnswer = 'correctanswer'
    }

    if(oneCorrectAnswer == 'correctanswer') {

        marks++
        answers.push(marks);
        console.log(marks);
        console.log(answers);

        message.style.display = 'block'
    }
    else {
        marks = 0
        answers.push(marks)
        console.log(marks);
        console.log(answers);
    }
}
submitEight.onclick = () => {

     
    if(answerOne.checked == true) {

        oneCorrectAnswer = 'notcorect'
    }
    else if( answerTwo.checked == true){

        oneCorrectAnswer = 'notcorect'
    }
    else if(answerThree.checked == true) {
        oneCorrectAnswer = 'notcorect'
    }
    else {
        oneCorrectAnswer = 'correctanswer'
    }

    if(oneCorrectAnswer == 'correctanswer') {

        marks++
        answers.push(marks);
        console.log(marks);
        console.log(answers);

        message.style.display = 'block'
    }
    else {
        marks = 0
        answers.push(marks)
        console.log(marks);
        console.log(answers);
    }
}
submitNine.onclick = () => {

     
    if(answerOne.checked == true) {

        oneCorrectAnswer = 'notcorect'
    }
    else if( answerTwo.checked == true){

        oneCorrectAnswer = 'notcorect'
    }
    else if(answerThree.checked == true) {
        oneCorrectAnswer = 'notcorect'
    }
    else {
        oneCorrectAnswer = 'correctanswer'
    }

    if(oneCorrectAnswer == 'correctanswer') {

        marks++
        answers.push(marks);
        console.log(marks);
        console.log(answers);

        message.style.display = 'block'
    }
    else {
        marks = 0
        answers.push(marks)
        console.log(marks);
        console.log(answers);
    }
}
submitTen.onclick = () => {

     
    if(answerOne.checked == true) {

        oneCorrectAnswer = 'notcorect'
    }
    else if( answerTwo.checked == true){

        oneCorrectAnswer = 'correctanswer'
    }
    else if(answerThree.checked == true) {
        oneCorrectAnswer = 'notcorect'
    }
    else {
        oneCorrectAnswer = 'notcorect'
    }

    if(oneCorrectAnswer == 'correctanswer') {

        marks++
        answers.push(marks);
        console.log(marks);
        console.log(answers);

        message.style.display = 'block'
    }
    else {
        marks = 0
        answers.push(marks)
        console.log(marks);
        console.log(answers);
    }
}
//RESULTS COMPILATION
var result=document.getElementById("result");
var points =document.getElementById("results");
var span=document.querySelectorAll("span");
var questionBank=document.querySelectorAll("questionBank");
var stat=document.getElementById("stat");
var i=0;
var results=0;

//function in display quizes




