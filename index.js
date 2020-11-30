readLine = require("readline-sync")
console.log("Hey there!!\nI'am Pooja")
var userName = readLine.question("Whats your name?\n ")
console.log("Welcome " + userName.toUpperCase() +"!!!\nThis quiz will test how much you know about me\nSoo let's get started\n\n"+"***********************************\n")
var score=0
var arr=[
  {
    question:"Which English movie series do i like?\n ",
    answer:"The Hunger Games",

  },
  {
    question:"Which is my favourite music band?\n ",
    answer:"Linkin Park",
  },
  {
    question:"Which South Indian food is my favourite?\n  ",
    answer:"idly",
  },
  {
    question:"Do i listen to Kpop?\n  ",
    answer:"yes",
  },
  {
    question:"Am i a nerd?\n ",
    answer:"yes",
  },
  {
    question:"Which hot beverage do i like?\n ",
    answer:"coffee"
  }
 
]

for(var i=0;i<arr.length;i++)
{
  console.log("Question: "+ (i+1) )
  checking(arr[i].question,arr[i].answer)

}

function checking(question , answer)
{
  
  userAnswer = readLine.question(question)
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log("Yay! right answer.")
    score++;
  }
  else
  {
    console.log("Oops! you're wrong.")
    console.log("The right answer is: " + answer)
  }
  console.log("Your Current score: " + score)
  console.log("\n-------------------------------\n")
}

console.log("You've completed the quiz.\nYour final score: " + score)

