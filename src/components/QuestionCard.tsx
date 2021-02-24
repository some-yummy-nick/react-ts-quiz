import React from 'react';

import {AnswerObject} from '../App';

type Props = {
    question: string
    answers: string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void
    userAnswer: AnswerObject | undefined
    questionNr: number
    totalQuestions: number
}

export const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {

    return (
        <div className="question-card">
            <p className="number">Question {questionNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map(answer => {
                        let classToButton = "answer";
                        if (userAnswer?.correctAnswer === answer) {
                            classToButton += " true"
                        } else {
                            classToButton += " false"
                        }
                        if (userAnswer?.answer === answer) {
                            classToButton += " clicked";
                        }
                        return <div key={answer}>
                            <button className={classToButton}
                                    value={answer} disabled={!!userAnswer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{__html: answer}}/>
                            </button>
                        </div>
                    }
                )}
            </div>
        </div>
    )
};
