$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.home').addClass("home.content");
        }else{
            $('.home').removeClass("home.content");
        }
    })
});

$('#btn').on('click', function(){
    console.log("You're about to start!");
})
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
      ["- Which method returns the string starting at the specified position?","substr()","getSubstring()", "slice()", "None of the above","A"],
      ["- Which of the following is a valid type of function javascript supports?","named function","anonymous function","both of the above","none of the above","C"],
      ["- Which built-in method returns the character at the specified index?","characterAt()","getCharAt()", "charAt()", "None of the above", "C"],
      ["- Which built-in method returns the calling string value converted to upper case?","toUpperCase()"," toUpper()"," changeCase(case)","None of the above.","A",],
      ["- Which of the following function of Number object returns the number's value?","toString()","valueOf()"," toLocaleString()"," toPrecision()","B",],
      ["- Which of the following function of String object returns the index within the calling String object of the last occurrence of the specified value?","lastIndexOf()","search()","substr()"," indexOf()","A",],
      ["- Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?","anchor()","big()","blink()","bold()","D",],
      ["- Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?","sup()","small()","strike()","sub()","D",],
      ["- Which of the following function of Array object calls a function for each element in the array?","concat()","every()","filter()","forEach()","D",],
      ["- Which of the following function of Array object removes the first element from an array and returns that element?","reverse()","shift()","slice()","some()","B",]

];
function _(quiz){
    return document.getElementById(quiz);
}
function renderQuestion() {
    test = _("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2><center>You got :" + (correct/questions.length)*100 + "%"+"<br>" +
        "Number of correct questions is:"+correct+"<br>"+" Total Number of Questions is: "+ questions.length+"</center></h2>";
        
        _("test_status").innerHTML = "<center>Test Completed</center>";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3>" + "question:"+(pos+1)+")"+" " +question+"</h3>";
    test.innerHTML +="<input type='radio' name='choices' value='A'> "+chA+"<br>"; 
    test.innerHTML +="<input type='radio' name='choices' value='B'> "+chB+"<br>"; 
    test.innerHTML +="<input type='radio' name='choices' value='C'> "+chC+"<br>";  
    test.innerHTML +="<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
    test.innerHTML +="<button onclick='checkAnswer()'>Submit Answer</button>";
    test.innerHTML +="<button onclick='back()'>Previous Quiz</button>";

}
function back() {
    choices = document.getElementsByName("choices");
    for (var i=0; i<choices.length; i++)
    {
        if (choices[i].checked)
        {
            choice = choices[i].Value
        }
    }
    if(choice == questions [pos] [5]){
        correct--;
        
    }
    if (pos>0)
    {
        pos--;
    }
    else
    {
        pos;
    }
    renderQuestion();
}

function checkAnswer () {

    choices = document.getElementsByName("choices");
    for (var i=0; i<choices.length; i++){
        if (choices[i].checked){
            choice = choices[i].arialValueMax;
        }
    }
    if(choice == questions [pos] [5]){
        correct++;
        
    }
    pos++;
    renderQuestion() ;
}
window.addEventListener("load",renderQuestion, false);

    
