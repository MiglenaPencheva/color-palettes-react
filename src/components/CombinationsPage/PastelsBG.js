import { Link } from 'react-router-dom';

const PastelsBG = () => {

    return (
        <section id="schemeDetailsSection" className="ryb__details">
            <h5 className="ryb__info">Пастелни цветови комбинации</h5>

            <h6>Какво представляват пастелните цветове?</h6>

            {/* description */}
            <article>
                Пастелите са светли, бледи, слабо наситени цветове.
            </article>
            <article>
                Получават се при смесване на бяло с малко количество цвят.
                Това ги прави нежни и деликатни, фини и меки.
                Белотата им придава усещане за чистота и непорочност,
                чувство на хладна свежест.
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
                Пастелните цветове са слабо до средно наситени.
                Голямото количество бяло намалява наситеността и променя светлотата.
                Добавянето на бяло към основния цвят го изсветлява и се получава негов блед оттенък - нюанс.
            </article>

            {/* examples  */}
            <article className="pastels__colors">
                Сред най-известните пастелни цветове са <b>бонбонено розово</b> и <b>бебешко синьо</b>, <b>бледо жълто</b> и <b>ментово зелено</b>, <b>лавандула</b>, <b>праскова</b>, <b>светъл тюркоаз</b>.
                Както и неутралните <b>бежово</b>, <b>слонова кост</b>, <b>бледо сиво-кафяво</b>.
            </article>

            {/* name */}
            <article>
                Името на нюансните оттенъци идва от художественото средство <i>пастели</i>,
                тъй като восъчните пръчици са светли и с по-ниска наситеност,
                в сравнение с боите от същите пигменти.
            </article>

            {/* as neutrals */}
            <h6>Като част от неутралните</h6>
            <article>
                Голямата груа на <Link to="/combinations/neutrals" target="_blank"><b><i>неутралните цветове</i></b></Link> включва
                и светлите оттенъци - цветовете, смесени с голямо количесто бяло.
                Приглушени и не твърде активни, нюансите дават успокояващия ефект на неутралите.
            </article>
            <article>
                Тъй като пастелните оттенъци съществуват в природата,
                те са приятни за окото, балансирани и естествени.
            </article>
            <div className="pastels__images">
                <img src="/images/pastels/sea.jpg" alt="sparrow" />
                <img src="/images/pastels/roses.jpg" alt="stones" />
                <img src="/images/pastels/grass.jpg" alt="sparrow" />
                <img src="/images/pastels/hyacinth.jpg" alt="turtles" />
            </div>

            <h6>Пастелната тенденция</h6>
            <article>
                Светлите оттенъци са широко използвани в графичния и уеб дизайн, интериора, модата.
                Пастелите отдавна вече не се асоциират само с детското и женственото.
                Те имат висока естетична стойност както в изкуството, така и в ежедневието.
                Мекотата, която излъчват, подчертава минимализма и опростения дизайн.
            </article>
            <article>
                Пастелите са усещанията за нежност и светлина, изящност и изтънченост, приглушеност и лекота.
                Пастелите носят спокойствието на пясъка и перлите, пудрата и небето.
                Пастелите имат мекотата на млякото, сладоледа, капучиното, шоколада.
                Пастелите дават сладостта на пролетта, цветята и бонбоните.
            </article>

            <div className="pastels__images">
                <img src="/images/pastels/trend/shells.jpg" alt="sparrow" />
                <img src="/images/pastels/trend/yarn.jpg" alt="sparrow" />
                <img src="/images/pastels/trend/freesia.jpg" alt="turtles" />
                <img src="/images/pastels/trend/frappe.jpg" alt="stones" />
            </div>

            <h6>Комбинирането с пастели</h6>
            <article>
                Светлите пастелни оттенъци могат да се съчетават точно както и чистите цветове,
                с помощта на <Link to="/combinations/color-wheel" target="_blank"><b><i>цветното колело.</i></b></Link> Монохромната <Link to="/combinations/schemes" target="_blank"><b><i> цветова схема</i></b></Link> придава елегантност, нежна и успокояваща визия.
                Контраст и динамичност могат да бъдат постигнати
                както с използването по-светли и по-тъмни оттенъци от една цветна група,
                така и с комбинирането на взаимно допълващи се цветове.
                Съчетаването на много и различни нюанси е друг силен подход,
                разкриващ богатството в разнообразието и все пак запазващ хармонията в комозицията.
                Комбинирането с бяло или черно може да постигне баланс в атрактивните цветни палитри.
            </article>
            <article>
                А природата, като безкраен източник на примери и идеи, си остава най-добрият вдъхновител.
            </article>

        </section>
    );
};

export default PastelsBG;