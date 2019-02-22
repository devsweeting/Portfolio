import React from 'react'
import Typing from 'react-typing-animation';

function TypingAnimation(){
    const typingAnimationStyles = {
        display: 'inline-block',
        color: 'white',
    }
    return(
        <div style={typingAnimationStyles}>
        <Typing loop={true}>
            <span>Web Developer</span>
            <Typing.Backspace count={20} delay={1000} />
            <span>Baller</span>
            <Typing.Backspace count={20} delay={1000} />
            <span>Cat Daddy</span>
            <Typing.Backspace count={20} delay={1000} />
            <span>Awesome Human</span>
            <Typing.Backspace count={20} delay={1000} />
            <span>Outgoing</span>
            <Typing.Backspace count={20} delay={1000} />
        </Typing>
        </div>
    );
}

export default TypingAnimation;
