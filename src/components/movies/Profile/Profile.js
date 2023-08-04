// import Header from '../../Header/Header';
import './Profile.css';

function Profile() {
    return (
        <>
            <section className='section profile'>
                <h2 className='profile__title'>Привет, Гульназ!</h2>
                <form className='profile__form'>
                    <fieldset className='profile__form-fieldset'>
                        <div className='profile__container'>
                            <label className='profile__label' htmlFor='name'>Имя</label>
                            <input className='profile__input' id='name' name='name' type='text' value='Гульназ'></input>
                        </div>
                        <div className='profile__container'>
                            <label className='profile__label' htmlFor='name'>Email</label>
                            <input className='profile__input' id='email' name='email' type='email' value='pochta@yandex.ru'></input>
                        </div>
                    </fieldset>
                    <button className='profile__button' type='submit' title='Редактировать'>Редактировать</button>
                </form>
                <button className='profile__button-exit' type='submit' title='Выйти из аккаунта'>Выйти из аккаунта</button>
            </section>
        </>
    );
}

export default Profile;