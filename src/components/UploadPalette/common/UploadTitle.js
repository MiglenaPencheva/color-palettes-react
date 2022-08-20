const UploadTitle = () => {
    return (
        <section className="upload__title">
            <label htmlFor="title" className="upload__title--label">Title</label>
            <span className="input">
                <textarea className="upload__title--textarea"
                    maxLength="100"
                    name="title"
                    id="title"
                    cols="30"
                    // onChange={e => setTitle(e.target.value)}
                    placeholder="Title should be less than 100 characters" />
            </span>
        </section>
    );
};

export default UploadTitle;