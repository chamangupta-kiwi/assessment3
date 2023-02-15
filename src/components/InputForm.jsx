import React, { useEffect, useState } from 'react';

function InputForm() {
    const [inputs, setInputs] = useState([
        { name: 'field1', value: '' },
        { name: 'field2', value: '' },
        { name: 'field3', value: '' },
        { name: 'field4', value: '' },
        { name: 'field5', value: '' },
        { name: 'field6', value: '' },
    ]);


    const handleChange = (event) => {
        const updatedInputs = inputs.map((input) => {
            if (input.name === event.target.name) {
                return { name: input.name, value: event.target.value };
            }
            return input;
        });
        setInputs(updatedInputs);
    };

    useEffect(() => {
        console.log(inputs);

    }, [inputs]);

    function OnBlur() {
        console.log("Hello");
    }

    return (
        <div>
            <form>
                {inputs.map((input) => (
                    <div key={input.name}>
                        <label htmlFor={input.name}>{input.name}</label>
                        <input
                            type="text"
                            // id={input.name}
                            name={input.name}
                            value={input.value}
                            onChange={handleChange}
                            onBlur={OnBlur}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}

export default InputForm
