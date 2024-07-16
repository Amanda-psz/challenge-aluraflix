import { Link } from 'react-router-dom';
import sytles from './CabecalhoLink2.module.css';

function CabecalhoLink2({ url, children }) {
    return (
        <Link to={url} className={sytles.link2}>
            {children}
        </Link>
    )
}

export default CabecalhoLink2;