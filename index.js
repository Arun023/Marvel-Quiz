const chalk = require('chalk');
const readline = require("readline-sync");
var score = 0;
var userName = readline.question(chalk.blue("What's Your Name "));
console.log(chalk.green("\nWelcome " + userName + " To Arun's Quiz on Marvel"));

// High Scores 
var highScore = [
  {
  name: "Arun", 
  score: "13" ,
},
{
  name: "Ayush",
  score: "12" ,
}];

//display high score function

  function high()
  { 
    console.log("\nCheck Out High Scores\n");
    for(i=0; i<highScore.length; i++ )
    {
      console.log(highScore[i].name + " : " + highScore[i].score);
    }
    for(i=0; i<highScore.length; i++ )
    {
    if(highScore[i].score >= score)
      {
         var check = "false";
      }
      else{
        check = "true";
      }
     }
     if(check === "true"){
     console.log(chalk.magentaBright("\nCongrats " +userName+ " You Have Beat the High Score Please Send me SS I'll Update your Name"))
     }
  }
var userplay = readline.question("\nPress C to View The Rules Of Quiz: ");
if(userplay.toUpperCase() === "c".toUpperCase())
{
   console.log(chalk.green.bgBlack(" \nRules For Playing This quiz: "));
   console.log("Each Question is of 1 mark If You Give Correct Answer you get one mark added to your score card");
   console.log(chalk.red.bgBlack(" Answer 5 Correct to go to level 2 and Answer 5 Correct to go to level 3 "));
   console.log("\nBeat The High-Score If You can !!!! ");
   userplay = readline.question("Press P to Start the Quiz ");
   console.log("\n");
   if(userplay.toUpperCase() === "p".toUpperCase())
   {
       // Question Bank 
    var bank = [{
      questions: "What is the name of Thor’s hammer? \n a:Vanir \n b:Mjolnir \n c:Aesir \n " ,
      answers : "B"
    },
    {
      questions: "What is Captain America’s shield made of \n A:Adamantium \n B:Promethium \n C:Vibranium \n " ,
      answers : "C"
    },
    {
      questions: "Before becoming Vision, what is the name of Iron Man’s A.I. butler? \n A:Homer \n B:Marvin \n C:Jarvis \n " ,
      answers: "C"
    },
    {
      questions: "Who is killed by Loki in the Avengers? \n A:Maria Hills \n B:Nick Fury \n C:Agent Coulson \n " ,
      answers:  "C"
    },
    {
      questions: "Who can lift Thor’s hammer? \n A:Captain America  \n B:Iron Man \n C:Hulk \n " ,
      answers:  "A"
    },
    {
      questions: "What Is the Name of Thor’s Axe? \n A:Treebreaker \n B:StromBreaker \n C:SeaBreaker \n " , 
      answers: "B"
    },
    {
      questions: "What is Tony Stark’s dad’s name? \n A:Howard Stark \n B:Michalle Stark \n C:Tom Stark \n " ,
      answers: "A"
    },
    {
      questions: "Who is Black Panther’s sister? \n A:Nakia \n B:Ramonda \n C:Shuri \n " ,
      answers: "C"
    },
    {
      questions: "Who does the Mad Titan sacrifice to acquire the Soul Stone? \n A:Nebula \n B:Gamora \n C:Cull Obsidian \n " ,
      answers: "B"
    },
    {
      questions: "What type of doctor is Stephen Strange? \n A:Plastic Surgeon \n B:Cardiothoracic Surgeon \n C:Neurosurgeon \n " ,
      answers: "C"
    },
    {
      questions: "How many Infinity Stones are there? \n A:8 \n B:6 \n C:10 \n" ,
      answers: "B" 
    },
    {
      questions: "What is the only Marvel film not to have a post-credit scene? \n A:Captain Marvel \n B:EndGame \n C:Infinity War \n " ,
      answers: "B"
    },
    {
      questions: "In which film’s post-credit scene did Thanos first appear? \n A:Avengers \n B:IronMan3 \n C:Thor \n " ,
      answers: "A"
    },
    {
      questions: "Which of the infinity stones is hidden on Vormir? \n A:Soul Stone \n B:Time Stone \n C:Space Stone \n " ,
      answers: "A"
    }, 
    {
      questions: "What is the name of the little boy Tony befriends while stranded in the Iron Man 3? \n A:Harley \n B:Henry \n C:Harry \n" ,
      answers: "A"
    }];
       
      for(i=0; i<bank.length; i++)
        {
          if(score < 5)
          {
            console.log("Level 1");
            console.log("--------------------------------------");
            play(bank[i].questions,bank[i].answers);
          }  
          else if(score < 10)
          {
            console.log("Level 2");
            console.log("--------------------------------------");
            play(bank[i].questions,bank[i].answers);
          }
          else if(score < 15)
          {
            console.log("Level 3");
            console.log("--------------------------------------");
            play(bank[i].questions,bank[i].answers);
          }
          console.log("----------------------------------------");
        } 
        console.log(chalk.redBright("Your Final Score " +score+ " out of 15 "));
        console.log("----------------------------------------");
        high();
              
   }
 
}
else{
  console.log("Thank You For Coming");
}



// Question function 

function play(question,answer)
{
  var userAnswer = readline.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    score++;
    console.log(chalk.green("\nRight Answer"));
  }
  else
  {
    console.log(chalk.red("\nWrong Answer"));
  }
}