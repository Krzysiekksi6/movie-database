import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import './css/LoginPage.css';
import Footer from '../components/Footer';
import axios from 'axios';


const AddMovie = () => {

    const [form, setForm] = useState({
        title: "",
        image: "",
        content: "",
    });

    const  onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        }
        setForm(nextFormState);
    }

    const validate = () => {
      const errors = {}
        if(form.title.trim() === '') {
            errors.title = 'Email is required'
        }
        if(form.image.trim() === '') {
            errors.image = 'Login is required'
        }
        if(form.image.trim() === '') {
            errors.image = 'Login is required'
        }

        return Object.keys(errors).length === 0 ? null : errors
    }

    const onSubmitAddMovie = (e) => {
        e.preventDefault()

        axios({
            method: 'post',
            url: 'https://at.usermd.net/api/movies',
            data: {
            ...form
            }
        }).then((response) => {
            console.log(response);
            e.target.reset();
        }).catch((error) => {
            console.log(error);
        });
}
    return (
        <>
            <div className='login'>
                <NavigationBar />
                <h2 className='login-heading'>Dodaj Nowy Film</h2>

                <form className='login__form' onSubmit={onSubmitAddMovie}>
                    <div className='login__form-top'>
                        <label htmlFor='email' className='login__form-label'>
                            Tytuł filmu:
                        </label>
                        <input
                            type='text'
                            className='login__form-input'
                            id='title'
                            name='title'
                            placeholder='Zielona Mila'
                            onChange={onUpdateField}

                        />

                        <label htmlFor='login' className='login__form-label'>
                            Obrazek:
                        </label>
                        <input
                            type='text'
                            className='login__form-input'
                            id='image'
                            name='image'
                            placeholder='https://fwcdn.pl/fpo/91/36/9136/6908595.3.jpg'
                            onChange={onUpdateField}

                        />

                        <label htmlFor='password' className='login__form-label'>
                            Opis:
                        </label>
                        <input
                            type='text'
                            id='content'
                            name='content'
                            className='login__form-input'
                            placeholder='Zaawansowany opis...'
                            onChange={onUpdateField}
                        >
                        </input>

                        <div className='login__form-btns'>
                            <Link to='/'>
                                <button className='login__form-btn login__form-btn--register'>
                                    Anuluj
                                </button>
                            </Link>
                            <button type='submit' className='login__form-btn'>
                                Dodaj
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};
export default AddMovie;
