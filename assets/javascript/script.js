$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.home').addClass("home.content");
        }else{
            $('.home').removeClass("home.content");
        }
    })
});
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
      ["Q 1 - Which method returns the string starting at the specified position?","substr()","getSubstring()", "slice()", "None of the above","A"],
      ["Q 2 - Which of the following is a valid type of function javascript supports?","named function","anonymous function","both of the above","none of the above","C"],
      ["Q 3 - Which built-in method returns the character at the specified index?","characterAt()","getCharAt()", "charAt()", "None of the above", "C"],
      ["Q 4 - Which built-in method returns the calling string value converted to upper case?","toUpperCase()"," toUpper()"," changeCase(case)","None of the above.","A",],
      ["Q 5 - Which of the following function of Number object returns the number's value?","toString()","valueOf()"," toLocaleString()"," toPrecision()","B",],
      ["Q 6 - Which of the following function of String object returns the index within the calling String object of the last occurrence of the specified value?","lastIndexOf()","search()","substr()"," indexOf()","A",],
      ["Q 7 - Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?","anchor()","big()","blink()","bold()","D",],
      ["Q 8 - Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?","sup()","small()","strike()","sub()","D",],
      ["Q 9 - Which of the following function of Array object calls a function for each element in the array?","concat()","every()","filter()","forEach()","D",],
      ["Q 10 - Which of the following function of Array object removes the first element from an array and returns that element?","reverse()","shift()","slice()","some()","B",]

];
function _(quiz){
    return document.getElementById(quiz);
}
function renderQuestion() {
    test = _("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct </h2>";
        
        _("test_status").innerHTML = "Test Completed";
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
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML +="<input type='radio' name='choices' value='A'> "+chA+"<br>"; 
    test.innerHTML +="<input type='radio' name='choices' value='B'> "+chB+"<br>"; 
    test.innerHTML +="<input type='radio' name='choices' value='C'> "+chC+"<br>";  
    test.innerHTML +="<input type='radio' name='choices' value='D'> "+chD+"<br><br>";  
    test.innerHTML +="<button onclick='checkAnswer()'>Submit Answer</button>";

}
function checkAnswer () {

    var choices = document.getElementsByName("choices");
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

    
