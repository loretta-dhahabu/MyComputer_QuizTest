$(document).ready(function(){
    $("button").click(function(){

    });      
});

//get satrted button event
getStarted.onclick = () => {
    questionOne.style.display = 'block'
}

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

document.write(c);
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
    result.style.display = 'none'
}
nexttwo.onclick = () => {
    questionTwo.style.display = 'none'
    questionThree.style.display = 'block'
    result.style.display = 'none'
}
nextthree.onclick = () => {
    questionThree.style.display = 'none'
    questionFour.style.display = 'block'
    result.style.display = 'none'
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
    result.style.display = 'none'
}
nexteight.onclick = () => {
    questionEight.style.display = 'none'
    questionNine.style.display = 'block'
    result.style.display = 'none'
}
nextnine.onclick = () => {
    questionNine.style.display = 'none'
    questionTen.style.display = 'block'
    result.style.display = 'none'
}
nextten.onclick = () => {
    questionTen.style.display = 'none'
    result.style.display = 'block'
}

//function to calculate results
function calcResults(e){
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
resultsBtn.onclick = () => {
    result.style.display = 'none'
    questionTwo.style.display = 'none'
    questionOne.style.display = 'block'
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
var marks = 0;
// var q1 =document.questionOne.answer;
// var q2 =document.questionOne.answer;
// var q3 =document.questionOne.answer;
// var q4 =document.questionOne.answer;
// var q5 =document.questionOne.answer;
// var q6 =document.questionOne.answer;
// var q7 =document.questionOne.answer;
// var q8 =document.questionOne.answer;
// var q9 =document.questionOne.answer;
// var q10 =document.questionOne.answer;
// var result =document.getElementById('result');

// if (q1=="substr()") {marks++}
// if (q1=="both of the above") {marks++}
// if (q1=="charAt()") {marks++}
// if (q1=="toUpperCase()") {marks++}
// if (q1=="toString()") {marks++}
// if (q1=="indexOf()") {marks++}
// if (q1=="bold()") {marks++}
// if (q1=="sub()") {marks++}
// if (q1=="forEach()") {marks++}
// if (q1=="shift()") {marks++}

// result.textContent="$()"
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

    if(oneCorrectAnswer === 'correctanswer') {

        marks=1
        answers.push(marks);
        console.log(marks);
        console.log(answers);

        message.style.display = 'block'
    }
    else {
        marks=0
        answers.push(marks)
        console.log(marks);
        console.log(answers);
    }
}
var answerFive = document.getElementById('answerfive')
var answerSix = document.getElementById('answersix')
var answerSeven = document.getElementById('answerseven')
var answerEight = document.getElementById('answereight')

submitTwo.onclick = () => {

     
    if(answerFive.checked == true) {

        twoCorrectAnswer = 'notcorect'
    }
    else if( answerSix.checked == true){

        twoCorrectAnswer = 'notcorect'
    }
    else if(answerSeven.checked == true) {
        twoCorrectAnswer = 'correctanswer'
    }
    else {
        twoCorrectAnswer = 'notcorect'
    }

    if(twoCorrectAnswer === 'correctanswer') {

        marks=1
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

var answerNine = document.getElementById('answernine')
var answerTen = document.getElementById('answerten')
var answerEleven = document.getElementById('answereleven')
var answerTwelve = document.getElementById('answertwelve')

submitThree.onclick = () => {

     
    if(answerNine.checked == true) {

        threeCorrectAnswer = 'notcorect'
    }
    else if( answerTen.checked == true){

        threeCorrectAnswer = 'notcorect'
    }
    else if(answerEleven.checked == true) {
        threeCorrectAnswer = 'correctanswer'
    }
    else {
        threeCorrectAnswer = 'notcorect'
    }

    if(threeCorrectAnswer == 'correctanswer') {

        marks=1
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

var answerThirteen = document.getElementById('answerthirteen')
var answerFourteen= document.getElementById('answerfourteen')
var answerFifteen = document.getElementById('answerfifteen')
var answerSixteen = document.getElementById('answersixteen')

submitFour.onclick = () => {

     
    if(answerThirteen.checked == true) {

        fourCorrectAnswer = 'correctanswer'
    }
    else if(answerFourteen.checked == true){

        fourCorrectAnswer = 'notcorect'
    }
    else if(answerFifteen.checked == true) {
        fourCorrectAnswer = 'notcorect'
    }
    else {
        fourCorrectAnswer = 'notcorect'
    }

    if(oneCorrectAnswer == 'correctanswer') {

        marks=1
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

var answerSeventeen = document.getElementById('answerseventeen')
var answerEighteen = document.getElementById('answereighteen')
var answerNineteen = document.getElementById('answernineteen')
var answerTwenty = document.getElementById('answertwenty')

submitFive.onclick = () => {

     
    if(answerSeventeen.checked == true) {

        fiveCorrectAnswer = 'notcorect'
    }
    else if( answerEighteen.checked == true){

        fiveCorrectAnswer = 'correctanswer'
    }
    else if(answerNineteen.checked == true) {
        fiveCorrectAnswer = 'notcorect'
    }
    else {
        fiveCorrectAnswer = 'notcorect'
    }

    if(fiveCorrectAnswer == 'correctanswer') {

        marks=1
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

var answerTwentyOne = document.getElementById('answertwentyone')
var answerTwentyTwo= document.getElementById('answertwentytwo')
var answerTwentyThree = document.getElementById('answertwentythree')
var answerTwentyFour = document.getElementById('answertwentyfour')

submitSix.onclick = () => {

     
    if(answerTwentyOne.checked == true) {

        sixCorrectAnswer = 'correctanswer'
    }
    else if( answerTwentyTwo.checked == true){

        sixCorrectAnswer = 'notcorect'
    }
    else if(answerTwentyThree.checked == true) {
        sixCorrectAnswer = 'notcorect'
    }
    else {
        sixCorrectAnswer = 'notcorect'
    }

    if(sixCorrectAnswer == 'correctanswer') {

        marks=1
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

var answerTwentyFive = document.getElementById('answertwentyfive')
var answerTwentySix = document.getElementById('answertwentysix')
var answerTwentySeven = document.getElementById('answertwentyseven')
var answerTwentyEight = document.getElementById('answertwentyeight')

submitSeven.onclick = () => {

     
    if(answerTwentyFive.checked == true) {

        sevenCorrectAnswer = 'notcorect'
    }
    else if( answerTwentySix.checked == true){

       
        sevenCorrectAnswer = 'notcorect'
    }
    else if(answerTwentySeven.checked == true) {
        
        sevenCorrectAnswer = 'notcorect'
    }
    else {
        
        sevenCorrectAnswer = 'correctanswer'
    }

    if(
        sevenCorrectAnswer == 'correctanswer') {

        marks=1
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

var answerTwentyNine = document.getElementById('answertwentynine')
var answerThirty = document.getElementById('answerthirty')
var answerThirtyOne = document.getElementById('answerthirtyone')
var answerThirtyTwo = document.getElementById('answerthirtytwo')

submitEight.onclick = () => {

     
    if(answerTwentyNine.checked == true) {

        eightCorrectAnswer = 'notcorect'
    }
    else if( answerThirty.checked == true){

        eightCorrectAnswer = 'notcorect'
    }
    else if(answerThirtyOne.checked == true) {
        eightCorrectAnswer = 'notcorect'
    }
    else {
        eightCorrectAnswer = 'correctanswer'
    }

    if(eightCorrectAnswer == 'correctanswer') {

        marks=1
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

var answerThirtyThree = document.getElementById('answerthirtythree')
var answerThirtyFour = document.getElementById('answerthirtyfour')
var answerThirtyFive = document.getElementById('answerthirtyfive')
var answerThirtySix = document.getElementById('answerthirtysix')

submitNine.onclick = () => {

     
    if(answerThirtyThree.checked == true) {

        nineCorrectAnswer = 'notcorect'
    }
    else if( answerThirtyFour.checked == true){

        nineCorrectAnswer = 'notcorect'
    }
    else if(answerThirtyFive.checked == true) {
        nineCorrectAnswer = 'notcorect'
    }
    else {
        nineCorrectAnswer = 'correctanswer'
    }

    if(nineCorrectAnswer == 'correctanswer') {

        marks=1
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

var answerThirtySeven = document.getElementById('answerthirtyseven')
var answerThirtyEight = document.getElementById('answerthirtyeight')
var answerThirtyNine = document.getElementById('answerthirtynine')
var answerFourty = document.getElementById('answerfourty')

var finalResult = document.getElementById("results")

submitTen.onclick = () => {

     
    if(answerThirtySeven.checked == true) {

        tenCorrectAnswer = 'notcorect'
    }
    else if( answerThirtyEight.checked == true){

        tenCorrectAnswer = 'correctanswer'
    }
    else if(answerThirtyNine.checked == true) {
        tenCorrectAnswer = 'notcorect'
    }
    else {
        tenCorrectAnswer = 'notcorect'
    }

    if(tenCorrectAnswer == 'correctanswer') {

        marks=1
        answers.push(marks);
        console.log(marks);
        console.log(answers);

        var totalResults = answers.reduce((acc,curr) => {
            return acc+curr
        })
        console.log (totalResults)
        var result = (totalResults / answers.length) * 100
        finalResult.innerHTML=result
        console.log(result)

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






