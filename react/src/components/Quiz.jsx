import { useState, useCallback} from 'react';
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from './Question';
import Summary from './Summary';
import '../index.css';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex =userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers(prevUserAnswers => [...prevUserAnswers, selectedAnswer]);
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return (
            <Summary 
            userAnswers={userAnswers}
            
            />
        );
    }

    return (
        <div id="quiz">
            <div id="question">
               <Question 
               key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
               />
            </div>
        </div>
    );
}
