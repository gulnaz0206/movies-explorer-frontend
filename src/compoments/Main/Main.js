import HeaderPage from '../HeaderPage/HeaderPage';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import AuthedHeader from '../AuthedHeader/AuthedHeader';

function Main ({ isLogged }) {
    return (
        <>
            {isLogged ? (<AuthedHeader />) : (<HeaderPage />)}
            <main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
}
export default Main;
