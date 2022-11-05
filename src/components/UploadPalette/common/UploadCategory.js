const UploadCategory = () => {
    return (
        <section className="select-container">
            <label htmlFor="type">Category</label>
            <select id="type" name="category"
                className="select">
                <option value="Choose category" className="default-scheme">Choose category</option>
                <option value="landscapes">Landscapes</option>
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