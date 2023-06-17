import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

const defaultConfig = {
    theme: 'light',
    language: 'en'
};

export default function Settings() {

    const [config, setConfig] = useLocalStorage('config', defaultConfig)

    const handleChange = (e) => {
        e.preventDefault();
        setConfig({
            ...config,
            theme:'dark'
        })
    }

    return (
        <div>
            <h1>App Settings</h1>
            <button onClick={handleChange} type='button'>Change Theme</button>
        </div>
    )
}
