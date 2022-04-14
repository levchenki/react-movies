import './Header.module.scss'

export function Header() {
    return <header>
        <div className={'container'}>
            <a href='#'>React Movies</a>
            <ul>
                <li><a href='#'>Repo</a></li>
            </ul>
        </div>
    </header>
}