import React, { useState , useEffect } from "react";
import questions from "../data/quiz.json";
import "../style/quiz.css"


function Quiz() {

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('')

  useEffect(() => {
    console.log(score)
  }, [score])
  
 
  const handleResult = () => {
    let s= 0;
    for (let i in questions) {
      for (let j in questions[i].answerOptions) {

        let answerQuestion=questions[i].answerOptions[j];

        if ( answerQuestion.isCorrect && document.getElementById(answerQuestion.answerText).checked) {
          document.getElementById(`${answerQuestion.answerText} "1"`).style.color = "green";
          document.getElementById(answerQuestion.answerText).style.backgroundColor = "green";
          s=s+1;
        }
        else if (document.getElementById(answerQuestion.answerText).checked) {
            document.getElementById(`${answerQuestion.answerText} "1"`).style.color = "red";
            document.getElementById(answerQuestion.answerText).style.backgroundColor = "red";
            // console.log("if2");
          }
        else if ( answerQuestion.isCorrect) {
            document.getElementById(`${answerQuestion.answerText} "1"`).style.color = "green";
             document.getElementById(answerQuestion.answerText).style.backgroundColor = "green";
            //  console.log("if3");
        }
      }

    }
    handleComment(s);
    setScore(score+s);
    setShowScore(true);
    return 3;
  };


  const handleComment = (s) => {
      if ( s < 5 ){
        setComment("you can do better, try again")
      }
      else {
        setComment("excellent!")
      }  
  };

  let count=0

  return (
    <div className="quiz-page">
      <h1 className="quiz-text">quiz</h1>
      { questions.map(( question ) => {
        return (
          <div className="question"  key={ question.questionsText } >
            <h3 className="question-text">{ count = count + 1 }. { question.questionsText }</h3>
            <br/>
            { question.answerOptions.map(( questionAnswers , i ) => (
              <div className="flex" key={ i }>
                <input type="radio" id={ questionAnswers.answerText }></input>
                <div className="text" id={`${ questionAnswers.answerText } "1"`}>
                { ` ${ questionAnswers.answerText }` }
                </div>
              </div>
            ))}
          </div>
        );
      })}
      {showScore?(
         <div className="result">
           <h3>your score is {(score*(100/questions.length)).toFixed(2)}%</h3> 
           {comment}
         </div>
      ):(
      <button className="btn btn-warning" onClick={() => handleResult()}>submit</button>
      )}
    </div>
  );
}

export default Quiz;
