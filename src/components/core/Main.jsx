import React, { Component } from 'react';
import {generateData} from '../questions_data/data';
import Answers from './Answers.jsx';
import Popup from './Popup.jsx';

class Main extends Component {    
    constructor(props) {
        super(props);
        const data = generateData;
        this.state = {
            count: 0,
            data,
            total: data.length,
            showButton: false,
            questionAnswered: false,
            score: 0,
            displayPopup: 'flex'
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleStartQuiz = this.handleStartQuiz.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
        
    }

    componentWillMount() {
        let { count } = this.state;
        this.insertData(count);
    }

    insertData(count) {
        const {data} = this.state;
        this.setState({
            question: data[count].question,
            answers: data[count].answers,
            correct: data[count].correct,
            topic: data[count].topic,
            count: this.state.count + 1
        });
    }


    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }
    
    nextQuestion() {
        let { count, total} = this.state;

        if(count === total){
            this.setState({
                displayPopup: 'flex'
            });
        } else {
            this.insertData(count);
            this.setState({
                showButton: false,
                questionAnswered: false
            });
        }
    }

    handleStartQuiz() {
        this.setState({
            displayPopup: 'none',
            count: 1
        });
    }

    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 1
        });
    }

  render() {

    let { count, total, question, topic, answers, correct, showButton, questionAnswered, displayPopup, score} = this.state;

    return (
      <div className="container">
       
       <Popup style={{display: displayPopup}} 
             score={score} 
             total={total} 
             startQuiz={this.handleStartQuiz}
        />
        
        <div className="row">
            <div className="col-lg-12 col-md-10">
                <div id="question">
                    <h4 className="bg-light">Pregunta {count}/{total}</h4>
                    <p><strong>[{topic}] </strong>{question}</p>
                </div>

                <Answers 
                    ref={this.answersComponent}
                    answers={answers} 
                    correct={correct} 
                    showButton={this.handleShowButton} 
                    isAnswered={questionAnswered} 
                    increaseScore={this.handleIncreaseScore}
                />


                <div id="submit">
                    {showButton ? 
                    <button className="fancy-btn" 
                            onClick={this.nextQuestion} >
                    {count === total ? 'Finalizar' : 'Siguiente pregunta'}
                    </button> : <span></span>}
                </div>
            </div>
        </div>


      </div>
    )
  }
}
export default Main;