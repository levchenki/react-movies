import React from 'react';
import style from './Footer.module.scss'

export function Footer() {
    return <footer>
        <div className={`container ${style.container}`}>
            © {new Date().getFullYear()} Copyright Text
            <a href='#'>Repo</a>
        </div>
    </footer>
}