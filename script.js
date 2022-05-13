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
      ["Q 1 - Is JavaScript a case-sensitive language?","true","false","A"],
      ["Q 2 - Which of the following is a valid type of function javascript supports?","named function","anonymous function","both of the above","none of the above","C"],
      ["Q 3 - Which built-in method returns the character at the specified index?","characterAt()","getCharAt()", "charAt()", "None of the above", "C"],
      ["Q 4 - Which built-in method returns the calling string value converted to upper case?","toUpperCase()"," toUpper()"," changeCase(case)","None of the above.","A",],
      ["","","","","","",],
      ["","","","","","",],
      ["","","","","","",],
      ["","","","","","",],
      ["","","","","","",],
      ["","","","","","",]

];

    
