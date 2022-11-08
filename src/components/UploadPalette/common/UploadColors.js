const UploadColors = () => {
    
    return (
        <section className="upload__colors">
            
            <label htmlFor="colorGroup">Colors</label>

            <span className="upload__colors--inner">
                <div>
                    <input type="checkbox" name="red" />
                    <label htmlFor="red">red</label>
                </div>
                <div>
                    <input type="checkbox" name="yellow" />
                    <label htmlFor="yellow">yellow</label>
                </div>
                <div>
                    <input type="checkbox" name="blue" />
                    <label htmlFor="blue">blue</label>
                </div>
            </span>
           
            <span className="upload__colors--inner">
                <div>
                    <input type="checkbox" name="orange" />
                    <label htmlFor="orange">orange</label>
                </div>
                <div>
                    <input type="checkbox" name="green" />
                    <label htmlFor="green">green</label>
                </div>
                <div>
                    <input type="checkbox" name="purple" />
                    <label htmlFor="purple">purple</label>
                </div>
            </span>
            
            <span className="upload__colors--inner">
                <div>
                    <input type="checkbox" name="brown" />
                    <label htmlFor="brown">brown</label>
                </div>
                <div>
                    <input type="checkbox" name="beige" />
                    <label htmlFor="beige">beige</label>
                </div>
                <div>
                    <input type="checkbox" name="grey" />
                    <label htmlFor="grey">grey</label>
                </div>
                <div>
                    <input type="checkbox" name="pink" />
                    <label htmlFor="pink">pink</label>
                </div>
            </span>

        </section>
    );
};

export default UploadColors;