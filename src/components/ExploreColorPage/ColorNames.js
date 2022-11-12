import { Link } from 'react-router-dom';
import { getColorArr, nameToRgb } from './exploreHelpers';
import useLocalStorage from '../../hooks/useLocalStorage';

const initialHexState = {
    hex: '#94c7db',
    rgb: 'rgb(148, 199, 219)',
};

const ColorNames = () => {
    const [hexToExplore, setHexToExplore] = useLocalStorage('hex', initialHexState);

    const colorNames = getColorArr('names');
    
    const sendToConvertor = (e) => {
        let name = e.target.style['backgroundColor'];
        let rgbFromName = nameToRgb(name);
        let rgb = `rgb(${rgbFromName.r}, ${rgbFromName.g}, ${rgbFromName.b})`;
        let hex = rgbFromName.hex;
        let valuesToExplore = { hex, rgb };
        setHexToExplore(valuesToExplore);
        window.open('/color-explore/convertor', '_blank');
    };

    return (
        <section className="explore__color-names">
            <h5 className="explore__info">Color names</h5>

            <article>
                There are 140 standard color names that are supported by all modern browsers and CSS.
                Color samples, names and hex codes are listed below in an alphabetical order.
                <br />
                Click on a chosen one to view details and explore it in the color values <Link target="_blank" to="/color-explore/convertor"><i>convertor.</i></Link>
            </article>
            
            {colorNames &&
                <ul className="explore__names">
                    {colorNames.map(x =>
                        <article id="colorArticle" key={x} onClick={sendToConvertor}>
                            <div style={{ border: `3px solid ${x.toLowerCase()}` }}>{x}
                            <br /> #{nameToRgb(x).hex}</div>
                            <span style={{ backgroundColor: `${x.toLowerCase()}` }}></span>
                        </article>
                    )}
                </ul>
            }

        </section>
    );
};

export default ColorNames;