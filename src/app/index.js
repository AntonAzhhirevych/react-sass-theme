
import { connect } from 'react-redux'

import Switch from '../modules/switch'

import { themeSelector } from '../redux/theme/themeSelector'

import './styles.scss'



const App = ({ theme }) => {
  return (
    <div className={`theme theme--${theme}`}>
      <Switch />
      <div className='app__wrapper'>
        <p className='app__text'>mode</p>
      </div>
    </div>
  )
}


const mapStateToPops = (state) => ({
  theme: themeSelector(state)
})

export default connect(mapStateToPops, null)(App)