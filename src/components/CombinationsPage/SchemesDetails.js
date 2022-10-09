const SchemesDetails = () => {

    return (
        <section id="infoSection" className="ryb__details">
            <h6>Color schemes details</h6>
            <article><b><i>Color wheel</i></b> is an abstract illustration of color hues around a circle, which shows the relationship between colors. Most of the color wheels are based on three primary colors, three secondary colors and six tertiary colors, made by mixing a primary with a secondary one. </article>
            <article > According to the additive color mixing the <b><i>RGB color wheel</i></b> uses red, green and blue as primary colors, and yellow, cyan and magenta as secondary. In the absence of light of any color, the result is black, mixing all three primaries will result in white. RGB system is used in digital and electronic systems. </article>
            <article> Subtractive mixing is the mixing of colored physical substances (such as paint or pigments). The absence of color is white and the presence of all three primary colors red, yellow and blue makes a neutral dark gray or black. The <b><i>RYB color wheel</i></b> is based on the traditional color theory and is used by countless artists and designers. RYB is the best color wheel for finding the colors that fit well together. </article>
            <article> The <b><i>CMY color wheel</i></b> (Cyan, Magenta, Yellow) represents the colors used for printing with inks or painting on paper.</article>
            <div className="ryb__details--wheels">
                <img src="/images/rgb.png" alt="rgb wheel" className="ryb__details--wheel-img" />
                <img src="/images/ryb_.png" alt="ryb wheel" className="ryb__details--wheel-img" />
                <img src="/images/cmy.png" alt="cmy wheel" className="ryb__details--wheel-img" />
            </div>
            <article className="ryb__details--text-only"><b><i>Color scheme </i></b> is used to create style and appeal. Colors and color combinations cause <a href="/color-explore"><i>psychological effect</i></a>, evoke certain feelings and emotions. They are widely used in various artistic, styling and design contexts, marketing and branding. Basic combinations join two colors that look appealing together. More advanced schemes combine several related colors for adding contrast and accents. Color schemes are logical combinations of colors on the color wheel. Different choices of a color harmony gives a variety in terms of contrast, dynamics, elegance and influence.</article>
            <div className="ryb__details--container">
                <img src="/images/schemes/mono.jpg" alt="monochromatic" className="ryb__details--img" />
                <article className="ryb__details--text-with-img"><b><i>Monochromatic scheme</i></b> uses a single base color and various tints, tones and shades of the same hue, that are derived by adding white, grey or black. It is easy to create and easy to apply and perceive. This color scheme gives a soft and pleasant feeling. The lack of contrast makes more subtle and peaceful vision. Dynamics can be achieved combining dark shades and light tints or even black and white. Using one base color with its variations gives bold and dramatic effect, as well as stylish and elegant look.</article>
            </div>
            <div className="ryb__details--container">
                <img src="/images/schemes/analog3.jpg" alt="analogous" className="ryb__details--img" />
                <article className="ryb__details--text-with-img"><b><i>Analogous scheme</i></b> uses colors that are next to each other on the color wheel. It is easy to create and gives a pleasant and elegant appearance. One dominant color and the others as supporting or accents make this blend harmonious and calming. The lack of contrast keeps it less vibrant. This kind of combination occurs in nature and colors never clash one another. Neighboring hues fits better if they are either in the warm or the cold gamma.</article>
            </div>
            <div className="ryb__details--container">
                <img src="/images/schemes/complementary.jpg" alt="complementary" className="ryb__details--img" />
                <article className="ryb__details--text-with-img"><b><i>Complementary scheme</i></b> takes colors from opposite side of the color wheel. This is the most contrasting of all color schemes. It attracts the most attention. One of the hues is the dominant color of the pair. The other one enhances or emphasizes the primary one and is used for accents. Both warm and cold colors take part in this most dynamic harmony. The design looks warm or cold according to the chosen dominant color. Attractive and hard for balancing, complementary scheme gives sharp contrast, brighter and prominent vision.</article>
            </div>
            <div className="ryb__details--container">
                <img src="/images/schemes/split.jpg" alt="split-complementary" className="ryb__details--img" />
                <article className="ryb__details--text-with-img"><b><i>Split-complementary scheme</i></b> is a variation of complementary scheme. Takes a base color and the two colors on both sides of the opposite one on the color wheel. It has the same sharp visual contrast and still gives the balance between warm or cold color temperatures. Cold base color should stand opposite of two variations of warm hues, for example. 3-color harmony offers less pressure, less tension and is not so vibrant. It is hard to harmonize and difficult for balancing. But still gives the best contrast, beautiful nuances and a pleasant feeling.</article>
            </div>
            <div className="ryb__details--container">
                <img src="/images/schemes/triadic.jpg" alt="triadic" className="ryb__details--img" />
                <article className="ryb__details--text-with-img"><b><i>Triadic scheme</i></b> is made up of three hues equally spaced around the wheel. One base color is balanced with two evenly spaced colors - accents. This combination offers high visual contrast and a harmony at the same time. The vibrance remains even if pale or unsaturated variations of hues are used. The triadic scheme is easier to accomplish and provides dynamics and richness of the colors.</article>
            </div>
            <div className="ryb__details--container">
                <img src="/images/schemes/square.jpg" alt="square" className="ryb__details--img" />
                <article className="ryb__details--text-with-img"><b><i>Tetradic scheme</i></b> is also called a double complementary scheme. The four colors arranged in two complementary pairs make it difficult to harmonize. One of the colors should be dominant, the others may be pastels or unsaturated variants of the hues. The pairs form a <b><i>rectangle scheme</i></b> or a <b><i>square scheme</i></b> if the selected colors stands on equal space one from another. The tetradic scheme is the richest of all combinations and give the opportunity to choose many color variations.</article>
            </div>

            <article className="ryb__details--text-only">
                <b><i>Other schemes</i></b> are used in maps, charts, data visualization and data science. The color is used as a graphical tool due to its aesthetic appeal and intuitive contrast. The richness and variety of meaning can represent quantitative variation and different kinds of ranges.
            </article>
            <div className="ryb__details--others">
                <img src="/images/schemes/sequential.jpg" alt="sequential" className="ryb__details--others-img" />
                <img src="/images/schemes/divergent.jpg" alt="divergent" className="ryb__details--others-img" />
            </div>
            <article className="ryb__details--text-only">
                <b><i> Sequential schemes</i></b> are use to order data from low to high. Commonly its a monochrome scheme and the darkest shade intuitively represents the largest value.
                <br /> <b><i> Divergent (diverging) schemes</i></b> uses two sequential schemes and share a common (usually the lightest) color in the center as the darkest stands at both of the ends. This combination emphasizes the extreme values at the ends and the mid-range critical values. Usually this schemes are asymmetrical when there is a middle value.
            </article>
        </section>
    );
};

export default SchemesDetails;