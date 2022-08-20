const UploadCategory = () => {
    return (
        <section className="upload__category">
            <label htmlFor="type">Category</label>
            <select id="type" name="category"
                // onChange={e => setCategory(e.target.value)}
                className="upload__category--select">
                <option value="Choose category">Choose category</option>
                <option value="landscape">Landscape</option>
                <option value="sea">Sea</option>
                <option value="sky">Sky</option>
                <option value="plants">Plants</option>
                <option value="animals">Animals</option>
                <option value="foodAndDrinks">Food & Drinks</option>
                <option value="others">Others</option>
            </select>
        </section>
    );
};

export default UploadCategory;