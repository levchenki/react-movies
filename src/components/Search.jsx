import React, {useState} from 'react';
import style from './Search.module.scss'

export function Search(props) {
    const [search, changeSearch] = useState('');
    const [type, changeType] = useState('');

    const searchRequest = (search, type) => {
        if (search) {
            props.searchMovies(search, type);
        }
    };

    const handleKeyEnter = (event) => {
        if (event.key === 'Enter') {
            searchRequest(search, type);
        }
    }

    const inputHandlers = new Map([['search', changeSearch], ['type', changeType]]);
    const handleChange = (event) => {
        inputHandlers.get(event.target.name)(event.target.value)
    }

    return <div className={style['search']}>
        <input
            className={'search_input'}
            name={'search'}
            placeholder={'search'}
            type='search'
            value={search}
            onChange={handleChange}
            onKeyDown={handleKeyEnter}
        />
        <select
            name='type'
            onChange={(event) => changeType(event.target.value)}
        >
            <option value=''>All types</option>
            <option value='movie'>Movies</option>
            <option value='series'>Series</option>
            <option value='game'>Games</option>
        </select>
        <button
            className={'search_button'}
            onClick={() => searchRequest(search, type)}
        >find
        </button>
    </div>
}