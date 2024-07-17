import React from "react";

function BotaoLink(props) {
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default BotaoLink;