import { Link } from 'react-router-dom';

const Neutrals = () => {

    return (
        <section className="ryb__details">
            <h5 className="ryb__info">Combine with neutral colors</h5>

            <h6>What are the neutral colors?</h6>
            <article>
                Neutral colors are muted hues that seem to be without color.
            </article>
            <article>
                Pure neutral colors are <b>white</b>, <b>black </b>
                and all combinations of white and black - the <b>grey</b> colors.
            </article>
            <img src="/images/neutrals/greys.jpg" alt="greys" className="neutrals__greys" />

            <article>
                Neutrals include also the variations of hues
                that are mixed with a big quantity of white, black or grey -
                these are <Link to="/combinations/pastels" target="_blank"><b><i>pastels</i></b></Link>, <b>shades</b> and <b>tones</b>.
            </article>
            <div className="neutrals__teal">
                <img src="/images/neutrals/teal/teal+white.jpg" alt="pastels" />
                <img src="/images/neutrals/teal/teal+black.jpg" alt="shades" />
                <img src="/images/neutrals/teal/teal+grey.jpg" alt="tones" />
                <img src="/images/neutrals/teal/teal+white+grey.jpg" alt="white and grey" />
                <img src="/images/neutrals/teal/teal+black+grey.jpg" alt="black and grey" />
            </div>

            <article>
                Neutrals can be created as well by mixing two complementary colors,
                such as brown, tan, grey.
            </article>
            <span className="neutrals__gradient"></span>

            <article>
                Tones that <b>naturally occur</b> in the environment are considered neutrals.
                May be any colors that are found in nature.
                <br />
                They can be all the variations of <b>wood</b> textures.
            </article>
            <div className="neutrals__images">
                <img src="/images/neutrals/wood/forest.jpg" alt="forest" />
                <img src="/images/neutrals/wood/wood1.jpg" alt="wood" />
                <img src="/images/neutrals/wood/ground.jpg" alt="ground" />
                <img src="/images/neutrals/wood/wood2.jpg" alt="wood" />
            </div>

            <article>
                They can be the <b>grey</b> shades of the cloudy sky.
            </article>
            <div className="neutrals__images">
                <img src="/images/neutrals/clouds/clouds1.jpg" alt="clouds" />
                <img src="/images/neutrals/clouds/clouds4.jpg" alt="clouds" />
                <img src="/images/neutrals/clouds/clouds3.jpg" alt="clouds" />
            </div>

            <article>
                They can be the tones containing <b>brown</b> or <b>beige</b>, such as the color of earth, soil, clay, umber, ochre.
            </article>
            <div className="neutrals__images">
                <img src="/images/neutrals/nature/turtles.jpg" alt="turtles" />
                <img src="/images/neutrals/nature/sparrow.jpg" alt="sparrow" />
                <img src="/images/neutrals/nature/stones.jpg" alt="stones" />
                <img src="/images/neutrals/nature/coast.jpg" alt="coast" />
                <img src="/images/neutrals/nature/leaves.jpg" alt="leaves" />
                <img src="/images/neutrals/nature/duck.jpg" alt="duck" />
                <img src="/images/neutrals/nature/mushrooms.jpg" alt="mushrooms" />
                <img src="/images/neutrals/nature/sand.jpg" alt="sand" />
            </div>

            
            <article>
                Neutrals have different <b>temperature</b>, they can be warm or cold.
                <br />
                More black in the color or red, orange and yellow as a base
                makes the neutral color <b>warm</b> and emotional.
                <br />White is cool, pure and activating,
                so pastels or blue, green and purple undertones qualify neutrals as <b>cool</b> ones.
            </article>
            <div className="neutrals__images">
                <img src="/images/neutrals/temperature/autumn1.jpg" alt="autumn" />
                {/* <img src="/images/neutrals/temperature/autumn2.jpg" alt="autumn" /> */}
                <img src="/images/neutrals/temperature/winter.jpg" alt="winter" />
                {/* <img src="/images/neutrals/temperature/sea.jpg" alt="sea" /> */}
            </div>
            <article>
                The temperature also depends on the surrounding colors.
            </article>

            {/* why */}
            <h6>Why use neutrals while combining in color schemes?</h6>
            <article>
                Neutrals are not a part of the color wheel.
                That is why they can participate in any color combination without braking the harmony.
                They are an important part of the schemes as they are universal complements of any hue.
                <b> Neutrals are just the base</b> on which the true color stands out.
                They are a <b>perfect background</b> for attractive textures,
                contrasting details or artistic accents in interior design as well.
            </article>

            <article>
                One of the best features of neutrals is their ability
                to be <b>calm and pleasant for the eye</b>.
                They are not too cold or too warm, neither too active.
                Muted and flat, they create warm, relaxing and nature-friendly atmosphere.
            </article>
            <div className="neutrals__images">
                <img src="/images/neutrals/calm/shell.jpg" alt="shell" />
                <img src="/images/neutrals/calm/clouds2.jpg" alt="clouds" />
                <img src="/images/neutrals/calm/field.jpg" alt="field" />
                <img src="/images/neutrals/calm/stones.jpg" alt="stones" />
                <img src="/images/neutrals/calm/beach.jpg" alt="beach" />
            </div>

            <article>
                <b>Neutrals don't get old fashioned</b> in long term
                and can't get boring.
                They fit in any modern or classical style scheme.
                There are limitless possibilities of combining with bold contrast colors.
                And even if there is no bright color in the scheme, neutrals can be many together.
                Several base colors or different temperatures at the same time
                give richness and variety in the mood.
                Neutrals inspire.
            </article>


            {/* <article>
                Dark grays are commonly thought of dramatic, mysterious, and sophisticated.
                lighter grays are thought of as soothing and calming.
                grays are thought of as timeless neutrals
                commonly associated with being methodical, balanced, logical, or emotionless.
                Represent fairness, wisdom, practicality, responsibility, loyalty.
                conservative and elegant.
            </article>
            <article>
                White is most commonly associated with purity, peace and innocence, 
                it can be soft and elegant, classical and sophisticated.
            </article>
            <article>
                Black is the strongest neutral color
                It is associated with seriousness, authority, conservative, 
                sophistication, mystery, drama, the unknown.
            </article>
            <article>
                Brown is a neutral that is commonly seen in nature.
                It is considered a simple, inexpensive, and modest color. 
                It is associated with being stabilizing, approachable, authentic, warm, grounding, and wholesome.
                earthy, simple, and friendly.
            </article> */}


        </section>
    );
};

export default Neutrals;