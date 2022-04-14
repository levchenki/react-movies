import React, {Component} from 'react';
import style from './Search.module.scss'

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            type: '',
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleKeyEnter = event => {
        if (event.key === 'Enter') {
            this.searchRequest(this.state.search, this.state.type);
        }
    }

    searchRequest = (search, type) => {
        if (search) {
            this.props.searchMovies(search, type);
        }
    }

    render() {
        const {search} = this.state
        return (
            <div className={style['search']}>
                <input
                    className={'search_input'}
                    name={'search'}
                    placeholder={'search'}
                    type='search'
                    value={search}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyEnter}
                />
                <select
                    name='type'
                    onChange={this.handleChange}
                    // onBlur={this.setSelect}
                >
                    <option value=''>All types</option>
                    <option value='movie'>Movies</option>
                    <option value='series'>Series</option>
                    <option value='game'>Games</option>
                </select>
                <button
                    className={'search_button'}
                    onClick={() => this.searchRequest(search, this.state.type)}
                >find
                </button>
            </div>
        );
    }
}