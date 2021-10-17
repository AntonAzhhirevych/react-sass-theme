import { useState } from "react";
import { connect } from 'react-redux'

import { setTheme } from '../../redux/theme/themeActions'
import { themeSelector } from '../../redux/theme/themeSelector'

import "./styles.scss";

const Switch = ({ setTheme, theme }) => {
    const [status, setStatus] = useState(theme);

    const handleCheckboxClick = ({ target: { checked } }) => {
        setStatus(checked);
        setTheme(checked ? 'dark' : 'default')
    };

    return (
        <div className="switch__wrapper">
            <div className="switch__checkbox-wrapper">
                <input
                    type="checkbox"
                    checked={status}
                    onChange={handleCheckboxClick}
                    className="switch__checkbox"
                    id="checkbox"
                />
                <label for="checkbox" className="switch__label">
                    <div className="switch__ball"></div>
                </label>
            </div>
            <p className="switch__description">
                {theme === 'dark' ? "Dark" : "Light"} mode
            </p>
        </div>
    );
};



const mapStateToProps = (state) => ({
    theme: themeSelector(state)
})

const mapDispatchToProps = {
    setTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(Switch);
