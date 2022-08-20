const UploadColors = () => {
    return (
        <section className="upload__colors">
            <label htmlFor="colorGroup">Colors</label>
            <span className="upload__colors--checkbox">
                <span>
                    <input type="checkbox" id="red" name="red" />
                    <label htmlFor="red">red</label>
                    <br />
                    <input type="checkbox" id="yellow" name="yellow" />
                    <label htmlFor="yellow">yellow</label>
                    <br />
                    <input type="checkbox" id="blue" name="blue" />
                    <label htmlFor="blue">blue</label>
                </span>
                <span>
                    <input type="checkbox" id="orange" name="orange" />
                    <label htmlFor="orange">orange</label>
                    <br />
                    <input type="checkbox" id="green" name="green" />
                    <label htmlFor="green">green</label>
                    <br />
                    <input type="checkbox" id="purple" name="purple" />
                    <label htmlFor="purple">purple</label>
                </span>
                <span>
                    <input type="checkbox" id="brown" name="brown" />
                    <label htmlFor="brown">brown</label>
                    <br />
                    <input type="checkbox" id="beige" name="beige" />
                    <label htmlFor="beige">beige</label>
                </span>
                <span>
                    <input type="checkbox" id="grey" name="grey" />
                    <label htmlFor="grey">grey</label>
                    <br />
                    <input type="checkbox" id="pink" name="pink" />
                    <label htmlFor="pink">pink</label>
                </span>
            </span>
        </section>
    );
};

export default UploadColors;