import React, { useState, useEffect, useRef} from "react";

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
    
    const [selected, setSelected] = useState(' ');
    const [error, setError] = useState(' ');
    const radiosWrapper = useRef( );

    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector("input:checked")
        if(findCheckedInput){
            findCheckedInput.checked = false;
        }
    }, [data])


    const changeHandler = (e) => {
        setSelected(e.target.value);
        if(error){
            setError('')
        }
    }
    
    
    const nextClickHandle = (e) => {
        if(selected === " ") {
            return setError('Please Select one!');
        }
        onAnswerUpdate(prevState => [...prevState, {q: data.question, a: selected}]);
        setSelected(' ');
        if(activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1)
        }else{
            onSetStep(3)
        }
    }

    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 className="mb-5">{data.question}</h2>
                    <div className="control" ref={radiosWrapper}>
                        {data.choices.map((choices , i) => (
                            <label className="radio has-background-light"key={i}>
                                <input type="radio" name="answer" value={choices} onChange={changeHandler} />
                                {choices}
                            </label>
                        ))}
                    </div>
                    {error && <div className="has-text-danger">{error}</div>}
                    <button className="button is-link is-medium is-full-width mt-4" onClick={nextClickHandle}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Question;