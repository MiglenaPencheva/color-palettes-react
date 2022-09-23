import { useEffect } from 'react';

const GoToTop = () => {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let topArrow = document.getElementById('topArrow');
            if (window.scrollY > 200) {
                topArrow.style.display = 'block';
            } else {
                topArrow.style.display = 'none';
            }
        });
    }, []);

    const topFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <span onClick={topFunction} id="topArrow"></span>
    );
};

export default GoToTop;