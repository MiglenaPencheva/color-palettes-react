import { Link } from 'react-router-dom';

const Pastels = () => {

    return (
        <section id="schemeDetailsSection" className="ryb__details">
            <h5 className="ryb__info">Pastel color combinations</h5>

            <h6>What are pastel colors?</h6>

            {/* description */}
            <article>
                Pastels are light, pale, slightly saturated colors.
            </article>
            <article>
                They are obtained by mixing white with a small amount of a color.
                That makes them soft and delicate, mild and subtle.
                Because of the whiteness, they give a sense of purity and cleanness,
                a feeling of cool freshness.
            </article>

            <div className="pastels__boxes">
                <span style={{ 'backgroundColor': 'var(--ryb-red)' }}></span>
                <span style={{ 'backgroundColor': 'var(--ryb-red-orange)' }}></span>
                <span style={{ 'backgroundColor': 'var(--ryb-orange)' }}></span>
                <span style={{ 'backgroundColor': 'var(--ryb-yellow-orange)' }}></span>
                <span style={{ 'backgroundColor': 'var(--ryb-yellow)' }}></span>
                <span style={{ 'backgroundColor': 'var(--ryb-yellow-green)' }}></span>
                <span style={{ 'backgroundColor': 'var(--ryb-green)' }}></span>
                <span style={{ 'backgroundColor': 'var(--ryb-blue-green)' }}></span>
                <span style={{ 'backgroundColor': 'var(--ryb-blue)' }}></span>
                <span style={{ 'backgroundColor': 'var(--ryb-blue-purple)' }}></span>
                <span style={{ 'backgroundColor': 'var(--ryb-purple)' }}></span>
                <span style={{ 'backgroundColor': 'var(--ryb-red-purple)' }}></span>
            </div>

            {/* lightness and saturation  */}
            <article>
                Pastel colors have low to medium saturation.
                Big quantity of white reduces the saturation and changes the lightness.
                Adding white lightens the color and makes a tint of the hue.
            </article>

            {/* examples  */}
            <article className="pastels__colors">
                Famous representatives of pastel colors are <b>candy pink</b> and <b>baby blue</b>, <b>creamy yellow</b> and <b>mint green</b>, <b>lavender</b>, <b>peach</b>, <b>pale turquoise</b>.
                As well the neutrals <b>beige</b>, <b>ivory</b>, <b>taupe</b> (grey-brown).
            </article>

            {/* name */}
            <article>
                Pastels are named after the artistic medium <i>crayons</i>,
                because the pastel sticks are light-colored
                and tend to have lower saturation than paints of the same pigment.
            </article>

            {/* as neutrals */}
            <h6>As a kind of neutrals</h6>
            <article>
                The big group of <Link to="/combinations/neutrals" target="_blank"><b><i>neutrals </i></b></Link> includes
                the variations of hues, mixed with a big quantity of white.
                Tints have the relaxing and soothing effect of the neutrals,
                being calm and not too active.
            </article>
            <article>
                As pastels occur naturally in the environment,
                they look pleasant for the eye and close to the nature.
            </article>
            <div className="pastels__images">
                <img src="/images/pastels/sea.jpg" alt="sparrow" />
                <img src="/images/pastels/roses.jpg" alt="stones" />
                <img src="/images/pastels/grass.jpg" alt="sparrow" />
                <img src="/images/pastels/hyacinth.jpg" alt="turtles" />
            </div>

            <h6>The pastel trend</h6>
            <article>
                Light-toned palettes are widely used in graphic and web design, interior and fashion styling.
                Pastels are no longer associated with only children or femininity.
                They give a highly valued aesthetic in arts and lifestyle.
                The mildness in their vision emphasize the minimalism and the simplicity of the design.
            </article>
            <article>
                Pastel is when you feel it soft and light, gentle and subtle, washed out and muted.
                Pastels give the calmness of sand and pearls, dust and sky.
                Pastels bring the mildness of milk, ice cream, cappuccino, chocolate.
                Pastels carry the sweetness of spring, flowers and candies.
            </article>

            <div className="pastels__images">
                <img src="/images/pastels/trend/shells.jpg" alt="sparrow" />
                <img src="/images/pastels/trend/yarn.jpg" alt="sparrow" />
                <img src="/images/pastels/trend/freesia.jpg" alt="turtles" />
                <img src="/images/pastels/trend/frappe.jpg" alt="stones" />
            </div>

            {/* <ul className="pastels__boxes">
                style={{ 'backgroundColor': '#F5B0BD' }}
                style={{ 'backgroundColor': '#89CFF0' }}
                style={{ 'backgroundColor': '#CBFADC' }}
                style={{ 'backgroundColor': '#e6e6fa' }}
                style={{ 'backgroundColor': '#ffffe0' }}
                style={{ 'backgroundColor': '#F5BCA7' }}
                style={{ 'backgroundColor': '#f5f5dc' }}
                style={{ 'backgroundColor': '#fffff0' }}
                style={{ 'backgroundColor': '#75655A' }}
            </ul> */}

            <h6>Combining with pastels</h6>
            <article>
                The colors in pastel values may be combined as well as the pure hues,
                using the <Link to="/combinations/color-wheel" target="_blank"><b><i>RYB color wheel.</i></b></Link> Monochromatic <Link to="/combinations/schemes" target="_blank"><b><i> scheme</i></b></Link> gives elegance, soft and peaceful vision.
                Contrast and dynamics can be achieved
                either using lighter and darker values of one color group,
                or by matching complementary colors.
                Mixing multiple colors is another powerful approach,
                revealing the richness of diversity and still preserving the harmony in the composition.
                Combining with white or black may give the balance in attractive color palettes.
            </article>
            <article>
                And the nature, as an endless source of inspiration, is still the best influencer.
            </article>

        </section>
    );
};

export default Pastels;