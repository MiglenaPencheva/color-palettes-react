const Schemes = () => {

    return (
        <section id="schemeDetailsSection" className="ryb__details">
            <h5 className="ryb__info">Color schemes</h5>

            <article className="ryb__details--text-only"><b><i>Color scheme </i></b> is used to create style and appeal. Colors and color combinations cause psychological effect, evoke certain feelings and emotions. They are widely used in various artistic, styling and design contexts, marketing and branding. Basic combinations join two colors that look appealing together. More advanced schemes combine several related colors for adding contrast and accents. Color schemes are logical combinations of colors on the color wheel. Different choices of a color harmony gives a variety in terms of contrast, dynamics, elegance and influence.</article>
            <div className="ryb__details--container">
                <img src="/images/schemes/mono.JPG" alt="monochromatic" className="ryb__details--img" />
                <article className="ryb__details--text-with-img"><b><i>Monochromatic scheme</i></b> uses a single base color and various tints, tones and shades of the same hue, that are derived by adding white, grey or black. It is easy to create and easy to apply and perceive. This color scheme gives a soft and pleasant feeling. The lack of contrast makes more subtle and peaceful vision. Dynamics can be achieved combining dark shades and light tints or even black and white. Using one base color with its variations gives bold and dramatic effect, as well as stylish and elegant look.</article>
            </div>
            <div className="ryb__details--container">
                <img src="/images/schemes/analog3.JPG" alt="analogous" className="ryb__details--img" />
                <article className="ryb__details--text-with-img"><b><i>Analogous scheme</i></b> uses colors that are next to each other on the color wheel. It is easy to create and gives a pleasant and elegant appearance. One dominant color and the others as supporting or accents make this blend harmonious and calming. The lack of contrast keeps it less vibrant. This kind of combination occurs in nature and colors never clash one another. Neighboring hues fits better if they are either in the warm or the cold gamma.</article>
            </div>
            <div className="ryb__details--container">
                <img src="/images/schemes/complementary.JPG" alt="complementary" className="ryb__details--img" />
                <article className="ryb__details--text-with-img"><b><i>Complementary scheme</i></b> takes colors from opposite side of the color wheel. This is the most contrasting of all color schemes. It attracts the most attention. One of the hues is the dominant color of the pair. The other one enhances or emphasizes the primary one and is used for accents. Both warm and cold colors take part in this most dynamic harmony. The design looks warm or cold according to the chosen dominant color. Attractive and hard for balancing, complementary scheme gives sharp contrast, brighter and prominent vision.</article>
            </div>
            <div className="ryb__details--container">
                <img src="/images/schemes/split.JPG" alt="split-complementary" className="ryb__details--img" />
                <article className="ryb__details--text-with-img"><b><i>Split-complementary scheme</i></b> is a variation of complementary scheme. Takes a base color and the two colors on both sides of the opposite one on the color wheel. It has the same sharp visual contrast and still gives the balance between warm or cold color temperatures. Cold base color should stand opposite of two variations of warm hues, for example. 3-color harmony offers less pressure, less tension and is not so vibrant. It is hard to harmonize and difficult for balancing. But still gives the best contrast, beautiful nuances and a pleasant feeling.</article>
            </div>
            <div className="ryb__details--container">
                <img src="/images/schemes/triadic.JPG" alt="triadic" className="ryb__details--img" />
                <article className="ryb__details--text-with-img"><b><i>Triadic scheme</i></b> is made up of three hues equally spaced around the wheel. One base color is balanced with two evenly spaced colors - accents. This combination offers high visual contrast and a harmony at the same time. The vibrance remains even if pale or unsaturated variations of hues are used. The triadic scheme is easier to accomplish and provides dynamics and richness of the colors.</article>
            </div>
            <div className="ryb__details--container">
                <img src="/images/schemes/square.JPG" alt="square" className="ryb__details--img" />
                <article className="ryb__details--text-with-img"><b><i>Tetradic scheme</i></b> is also called a double complementary scheme. The four colors arranged in two complementary pairs make it difficult to harmonize. One of the colors should be dominant, the others may be pastels or unsaturated variants of the hues. The pairs form a <b><i>rectangle scheme</i></b> or a <b><i>square scheme</i></b> if the selected colors stands on equal space one from another. The tetradic scheme is the richest of all combinations and give the opportunity to choose many color variations.</article>
            </div>

            <article className="ryb__details--text-only">
                <b><i>Other schemes</i></b> are used in maps, charts, data visualization and data science. The color is used as a graphical tool due to its aesthetic appeal and intuitive contrast. The richness and variety of meaning can represent quantitative variation and different kinds of ranges.
            </article>
            <div className="ryb__details--others">
                <img src="/images/schemes/Sequential.jpg" alt="sequential" className="ryb__details--others-img" />
                <img src="/images/schemes/Divergent.jpg" alt="divergent" className="ryb__details--others-img" />
            </div>
            <article className="ryb__details--text-only">
                <b><i> Sequential schemes</i></b> are use to order data from low to high. Commonly its a monochrome scheme and the darkest shade intuitively represents the largest value.
                <br /> <b><i> Divergent (diverging) schemes</i></b> use two sequential schemes and share a common (usually the lightest) color in the center as the darkest stands at both of the ends. This combination emphasizes the extreme values at the ends and the mid-range critical values. Usually this schemes are asymmetrical when there is a middle value.
            </article>
        </section>
    );
};

export default Schemes;