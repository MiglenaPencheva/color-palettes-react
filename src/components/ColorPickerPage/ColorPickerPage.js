// import { useState, useEffect } from 'react';

// import { useAuthContext } from '../../contexts/AuthContext';
// import { hideError, showError } from '../../helpers/notifications';
import UploadImage from '../ColorPickerPage/PickerSections/UploadImage';
import PickerSection from '../ColorPickerPage/PickerSections/PickerSection';
import SaveSection from '../ColorPickerPage/PickerSections/SaveSection';
// import { validate } from '../../helpers/prepareData';



const ColorPickerPage = () => {
    // const { user } = useAuthContext();

    return (
        <>
            <h1>Color picker</h1>
            <p>Upload image file or link.
                Pick the colors you like.
                Choose the best combination of colors
                and create your unique color palette.</p>

            <UploadImage />
            <PickerSection />
            <SaveSection />
        </>
    );
};

export default ColorPickerPage;


// const ColorPicker = () => {
//     const [image, setImage] = useState(null);
//     const onChange = (e) => { setImage(e.target.files[0]); };

//     return (
//         <div>
//             {image && <img alt="not fount" width="50px" src={URL.createObjectURL(image)} />}
//             <input type="file" name="myImage" onChange={onChange} />
//         </div>
//     );
// };

// export default ColorPicker;