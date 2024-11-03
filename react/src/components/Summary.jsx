import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
export default function Summary({userAnswers})
{
    const skipped=userAnswers.filter((userAnswer)=>userAnswer===null).length;
    const correct=userAnswers.filter((userAnswer,index)=>userAnswer===QUESTIONS[index].answers[0]).length;
    const wrong=userAnswers.filter((userAnswer,index)=>userAnswer!==null&&userAnswer!==QUESTIONS[index].answers[0]).length;
    const skippedPercentage=Math.round((skipped/QUESTIONS.length)*100);
    const correctPercentage=Math.round((correct/QUESTIONS.length)*100);
    const wrongPercentage=Math.round((wrong/QUESTIONS.length)*100);

    return(
        <div id="summary">
            <img src={quizCompleteImg} alt="Quiz Complete"/>
            <h2>Quiz Complete!</h2>
            <div id="summary-stats">
                <p>
                <span className="number">{skippedPercentage}%</span>
                <span className="text">skipped</span>
                </p>
                <p>
                <span className="number">{correctPercentage}%</span>
                <span className="text">answered correctly</span>
                </p>
                <p>
                <span className="number">{wrongPercentage}%</span>
                <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {
                    userAnswers.map((userAnswer, index) => {
                        let cssClass='user-answer';
                        if(userAnswer===null)
                        {
                            cssClass+='skipped';
                        }
                        else if(userAnswer===QUESTIONS[index].answers[0])
                        {
                            cssClass+=' correct';
                        }
                        else
                        {
                            cssClass+=' wrong';
                        }

                        
                        return(
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{userAnswer??"skipped"}</p>
                        </li>
                    )})
                }
            </ol>
        </div>
    )
}