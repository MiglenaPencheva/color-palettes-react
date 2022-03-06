import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as colorPaletteService from '../../services/colorPaletteService';
// import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';

const Create = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // const [types, setTypes] = useState([]);

    // useEffect(() => {
    //     fetch()
    // });

    const onCreateSubmit = async (e) => {
        e.preventDefault();

        try {
            let formData = new FormData(e.currentTarget);

            let name = formData.get('name');
            let type = formData.get('type');
            let imageUrl = formData.get('imageUrl');

            let colorPaletteData = {
                name,
                type,
                imageUrl
            };

            await colorPaletteService.create(colorPaletteData, user);

            navigate('/dashboard');

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onCreateSubmit} method="POST">
                <fieldset>
                    <legend>Add new color palette</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="landscape">Landscape</option>
                                <option value="portrait">Portrait</option>
                                <option value="square">Square</option>
                            </select>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Color Palette" />
                </fieldset>
            </form>
        </section>
    );
};

export default Create;