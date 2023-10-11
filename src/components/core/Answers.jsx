import React, {Component} from 'react';

class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
            classNames: ['', '', '', '']
        }
        
        this.checkAnswer = this.checkAnswer.bind(this);
        this.clearClasses = this.clearClasses.bind(this);
    }
    
    checkAnswer(e) {
        let { isAnswered } = this.props;
        this.clearClasses();
        if(!isAnswered) {
            let elem = e.currentTarget;
            let { correct, increaseScore } = this.props;
            let answer = Number(elem.dataset.id);
            let updatedClassNames = this.state.classNames;

            if(answer === correct){
                updatedClassNames[answer] = 'right';
                increaseScore();
            }
            else {
                updatedClassNames[answer] = 'wrong';
            }
            this.setState({
                classNames: updatedClassNames,
            })

            this.props.showButton();       
        }
    }
    clearClasses(){
        this.setState({
            classNames: ['', '', '', '']
        })
        
    }
    getClass(index) {
        let { isAnswered } = this.props;
        return isAnswered ? this.state.classNames[index] : '';
    }
    getLetter(index){
        if (index === 0) return "A"
        if (index === 1) return "B"
        if (index === 2) return "C"
        if (index === 3) return "D"
    }
    render() {
        let { answers } = this.props;
        
        return (
            <div id="answers">
                <ul>
                    {answers.map((answer, index) => (
                        <li key={index} onClick={this.checkAnswer} 
                            className={this.getClass(index)} data-id={index}>
                            <span>{this.getLetter(index)}</span> 
                            <p>{answer}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Answers