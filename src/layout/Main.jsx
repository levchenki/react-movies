import React, {useEffect, useState} from 'react';
import {Cards} from '../components/Cards';
import {Preloader} from '../components/preloader/Preloader';
import {Search} from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, changeLoading] = useState(true);

    const searchMovies = (filmName, filmType) => {
        changeLoading(true);
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${filmName ? `${filmName}` : 'matrix'}${filmType ? `&type=${filmType}` : ''}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let arr = data['Search'] || []
                let st = new Set();
                arr = arr.reduce((result, item) => {
                    if (!st.has(item['imdbID'])) {
                        st.add(item['imdbID']);
                        return [...result, item];
                    }
                    return result;
                }, [])
                setMovies(arr);
                return changeLoading(false);
            })
            .catch((err) => {
                    console.log(err);
                    changeLoading(false);
                }
            );
    }

    useEffect(() => {
        searchMovies();
    }, [])

    return <div className={'container content'}>
        <Search searchMovies={searchMovies}/>
        {
            loading
                ? (<Preloader/>)
                : (<Cards movies={movies}/>)
        }
    </div>

}