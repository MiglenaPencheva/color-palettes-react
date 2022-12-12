import { Link } from 'react-router-dom';
import { getColorArr } from './exploreHelpers';
import ColorNamesList from './ColorNamesList';

const ColorNames = () => {
    const list = getColorArr('names');
    
    return (
        <section className="explore__color-names">
            <h5 className="explore__info">Color names</h5>

            <article>
                There are 140 standard color names that are supported by all modern browsers and CSS.
                Color samples, names and hex codes are listed below in an alphabetical order.
                <br />
                Click on a chosen one to view details and explore it in the color values <Link target="_blank" to="/color-explore/convertor"><i>convertor.</i></Link>
            </article>

            <ColorNamesList list={list} />

        </section>
    );
};

export default ColorNames;