import React from 'react';
import {Card} from './Card';
import './Cards.scss'

export function Cards({movies}) {
    console.log(movies);
    return <div className={'Cards'}>
        {movies.length
            ? movies.map(movie => <Card key={movie['imdbID']} {...movie}/>)
            : <h4>Ничего не найдено...</h4>}
    </div>
}