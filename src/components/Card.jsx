import React from 'react';

export function Card(props) {
    const {
        Poster: poster,
        Title: title,
        Type: type,
        Year: year,
        imdbID: id
    } = props;
    return <div id={id} className={'Card'}>
        {
            poster === 'N/A'
                ? <img src={`https://via.placeholder.com/300x400.png?text=${title}`}/>
                : <img
                    src={poster}
                    width={1600} height={1600} alt='image'/>
        }

        {/*<div style={{background: `url(${Poster}) no-repeat center/cover`, height: '451px'}}/>*/}
        <div className={'Card_text'}>
            <p className={'Card_title'}>{title}</p>
            <p>{year} <span className={'Card_type'}>{type}</span></p>
        </div>
    </div>
}