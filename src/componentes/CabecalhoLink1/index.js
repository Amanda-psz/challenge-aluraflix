import { Link } from 'react-router-dom';
import sytles from './CabecalhoLink1.module.css';

function CabecalhoLink1({ url, children }) {
    return (
        <Link to={url} className={sytles.link1}>
            {children}
        </Link>
    )
}

export default CabecalhoLink1;