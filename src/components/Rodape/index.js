import React from "react";
import { RodapeBase } from './styles';
import { LogoImage } from "../Menu/style";

function Rodape() {
    return (
        <RodapeBase className={styles.rodape}>
            <LogoImage src={logo} alt="Logo AluraFlix" />
        </RodapeBase>
    )
}

export default Rodape;