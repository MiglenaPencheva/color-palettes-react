import { Link } from 'react-router-dom';

const NeutralsBG = () => {

    return (
        <section className="ryb__details">
            <h5 className="ryb__info">Комбиниране с неутрални цветове</h5>

            <h6>Какво представляват неутралните цветове?</h6>
            <article>
                Неутрални са онези приглушени тонове, които изглеждат почти безцветни.
            </article>
            <article>
                Основните неутрални са <b>бяло</b>, <b>черно </b>
                и вариантите, получени от тяхното смесване - гамата на <b>сивото</b>.
            </article>
            <img src="/images/neutrals/greys.jpg" alt="greys" className="neutrals__greys" />

            <article>
                Към неутралите се причисляват и всички онези оттенъци на чистия цвят,
                които са смесени с голямо количество бяло, черно или сиво -
                това са <Link to="/combinations/pastels" target="_blank"><b><i>пастелите</i></b></Link>, <b>сенките</b> и <b>тоновете</b>.
            </article>
            <div className="neutrals__teal">
                <img src="/images/neutrals/tealBG/teal+white.jpg" alt="pastels" />
                <img src="/images/neutrals/tealBG/teal+black.jpg" alt="shades" />
                <img src="/images/neutrals/tealBG/teal+grey.jpg" alt="tones" />
                <img src="/images/neutrals/tealBG/teal+white+grey.jpg" alt="white and grey" />
                <img src="/images/neutrals/tealBG/teal+black+grey.jpg" alt="black and grey" />
            </div>

            <article>
                Неутрален цвят може да се получи и от смесването на два допълващи се (противоположни) цвята 
                от цветното колело. Резултатът e в сиво-кафявата гама.
            </article>
            <span className="neutrals__gradient"></span>

            <article>
                Тоновете, които са <b>естествено срещани в природата</b>, също се приемат за неутрални.
                Всички натурални багри и разцветки в заобикалящата ни среда.
                <br />
                Те са в разнообразието от <b>дървесни</b> текстури.
            </article>
            <div className="neutrals__images">
                <img src="/images/neutrals/wood/forest.jpg" alt="forest" />
                <img src="/images/neutrals/wood/wood1.jpg" alt="wood" />
                <img src="/images/neutrals/wood/ground.jpg" alt="ground" />
                <img src="/images/neutrals/wood/wood2.jpg" alt="wood" />
            </div>

            <article>
                Те са в <b>сивия</b> диапазон на облачното небе.
            </article>
            <div className="neutrals__images">
                <img src="/images/neutrals/clouds/clouds1.jpg" alt="clouds" />
                <img src="/images/neutrals/clouds/clouds4.jpg" alt="clouds" />
                <img src="/images/neutrals/clouds/clouds3.jpg" alt="clouds" />
            </div>

            <article>
                Те са тоновете в <b>кафявото</b> или <b>бежовото</b>, като цвета на земята, пръстта, глината, кехлибара, охрата.
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
                Неутралните цветове се различават по своята <b>температура</b>, могат да бъдат топли или студени.
                <br />
                Повече черно в оттенъка или червен, оранжев или жълт цвят като негова основа, 
                правят неутрала <b>топъл</b> и емоционално въздействащ.
                <br />Бялото е студено, чисто и активиращо,
                затова и пастелните нюанси, както и синя, зелена или лилава основа на неутралния цвят, го превръщат в <b>студен</b>.
            </article>
            <div className="neutrals__images">
                <img src="/images/neutrals/temperature/autumn1.jpg" alt="autumn" />
                <img src="/images/neutrals/temperature/winter.jpg" alt="winter" />
            </div>
            <article>
                Температурата също зависи и се повлиява от околните цветове.
            </article>

            <h6>Защо с неутрални цветове се получават добри комбинации?</h6>
            <article>
                Неутралите не са част от цветното колело.
                Затова могат да участват във всяка цветова схема, без да нарушават хармонията.
                Те са важна част от съчетанията, тъй като са универсални допълващи цветове.
                <b> Неутралите са основата</b>, върху която чистият цвят изпъква.
                Могат да бъдат <b>перфектния фон</b> на контрастиращи детайли, 
                артистични акценти или атрактивни текстури.
            </article>

            <article>
                Едно от най-добрите качества на неутралите е сособността им 
                да са <b>успокояващи и приятни за окото</b>.
                Не са нито твърде студени или топли, нито прекалено активни.
                Приглушени и меки, те създават топла и отпускаща атмосфера, естествена и близка до природата.
            </article>
            <div className="neutrals__images">
                <img src="/images/neutrals/calm/shell.jpg" alt="shell" />
                <img src="/images/neutrals/calm/clouds2.jpg" alt="clouds" />
                <img src="/images/neutrals/calm/field.jpg" alt="field" />
                <img src="/images/neutrals/calm/stones.jpg" alt="stones" />
                <img src="/images/neutrals/calm/beach.jpg" alt="beach" />
            </div>

            <article>
                <b>Неутралите не излизат от мода</b> в дългосрочен план и не доскучaват.
                Те подхождат на всяка модерна тенденция, както и на комбинации в класически стил.
                Дават безкрайни възможности за съчетание с дръзки и контрастни цветове.
                И дори да няма ярък цвят в комозицията, неутралите могат да са по много заедно.
                А няколко водещи цвята или различни темератури едновременно
                внасят богатство и разнообразие в настроението.
                <br />Неутралите вдъхновяват.
            </article>

        </section>
    );
};

export default NeutralsBG;