import { LogoImage, MenuContainer } from "./style";
import Botao from "../Botao";

function Menu() {
    return (
        <MenuContainer classname="Menu">
            <a href="/">
                <LogoImage src={logo} alt="Logo AluraFlix" />
            </a>
            <Botao as="a" classname="BotaoLink" href="/">
                NOVO VÍDEO
            </Botao>

        </MenuContainer>
    )
}

export default Menu;