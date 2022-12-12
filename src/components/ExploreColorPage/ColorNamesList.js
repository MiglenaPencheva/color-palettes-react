import { nameToRgb } from './exploreHelpers';
import useLocalStorage from '../../hooks/useLocalStorage';

const initialHexState = {
    hex: '#94c7db',
    rgb: 'rgb(148, 199, 219)',
};

const ColorNamesList = ({ list }) => {
    const [hexToExplore, setHexToExplore] = useLocalStorage('hex', initialHexState);

    const sendToConvertor = (e) => {
        let name = e.target.parentNode.children[1].style['backgroundColor'];
        let rgbFromName = nameToRgb(name);
        let rgb = `rgb(${rgbFromName.r}, ${rgbFromName.g}, ${rgbFromName.b})`;
        let hex = rgbFromName.hex;
        let valuesToExplore = { hex, rgb };
        setHexToExplore(valuesToExplore);
        window.open('/color-explore/convertor', '_blank');
    };

    return (
        <ul className="explore__names">
            {list.map(x =>
                <article id="colorArticle" key={x} onClick={sendToConvertor}>
                    <div style={{ border: `3px solid ${x.toLowerCase()}` }}>{x}
                        <br /> #{nameToRgb(x).hex}</div>
                    <span style={{ backgroundColor: `${x.toLowerCase()}` }}></span>
                </article>
            )}
        </ul>

    );
};

export default ColorNamesList;
