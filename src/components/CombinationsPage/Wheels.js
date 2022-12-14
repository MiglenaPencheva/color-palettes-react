const Wheels = () => {

    return (
        <section id="schemeDetailsSection" className="ryb__details">
            <h5 className="ryb__info">Color wheels</h5>

            <article><b><i>Color wheel</i></b> is an abstract illustration of color hues around a circle, which shows the relationship between colors. Most of the color wheels are based on three primary colors, three secondary colors and six tertiary colors, made by mixing a primary with a secondary one. </article>
            
            <div className="ryb__details--wheels">
                <img src="/images/rgb.png" alt="rgb wheel" className="ryb__details--wheel-img" />
                <img src="/images/ryb_.png" alt="ryb wheel" className="ryb__details--wheel-img" />
                <img src="/images/cmy.png" alt="cmy wheel" className="ryb__details--wheel-img" />
            </div>

            <article > According to the additive color mixing the <b><i>RGB color wheel</i></b> uses red, green and blue as primary colors, and yellow, cyan and magenta as secondary. In the absence of light of any color, the result is black, mixing all three primaries will result in white. RGB system is used in digital and electronic systems. </article>
            <article> Subtractive mixing is the mixing of colored physical substances (such as paint or pigments). The absence of color is white and the presence of all three primary colors red, yellow and blue makes a neutral dark gray or black. The <b><i>RYB color wheel</i></b> is based on the traditional color theory and is used by countless artists and designers. RYB is the best color wheel for finding the colors that fit well together. </article>
            <article> The <b><i>CMY color wheel</i></b> (Cyan, Magenta, Yellow) represents the colors used for printing with inks or painting on paper.</article>
            
        </section>
    );
};

export default Wheels;