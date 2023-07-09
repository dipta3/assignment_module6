import { useState } from 'react';

const Content = () => {
    const [text, setText] = useState('');

    const handleBtn = () => {
        const textArea = document.getElementById('textArea');
        const inputText = textArea.value;
        setText(inputText);
        textArea.value = '';
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <textarea id="textArea" />
            <button onClick={handleBtn}>Show Text</button>
            {text &&
                <h2>{text}</h2>
            }

        </div>
    );
};

export default Content;
