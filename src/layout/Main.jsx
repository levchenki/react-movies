import React, {Component} from 'react';
import {Cards} from '../components/Cards';
import {Preloader} from '../components/preloader/Preloader';
import {Search} from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            loading: true,
        }
    }

    searchMovies = (filmName, filmType) => {
        this.setState({loading: true});
        const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${filmName ? `${filmName}` : 'matrix'}${filmType ? `&type=${filmType}` : ''}`
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
                return this.setState({movies: arr, loading: false});
            })
    }

    componentDidMount() {
        this.searchMovies();
    }

    render() {
        const {movies, loading} = this.state;
        return <div className='container content'>
            <Search searchMovies={this.searchMovies}/>
            {
                loading
                    ? (<Preloader/>)
                    : (<Cards movies={movies}/>)
            }
        </div>
    }
}