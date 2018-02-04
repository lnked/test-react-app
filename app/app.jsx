import 'core-js/es6/map'
import 'core-js/es6/set'

import 'app.scss'
import React from 'react'
import { render } from 'react-dom'

// Layouts
import { PureLayout } from 'layouts'

// Pages
import { TestPage } from 'containers'

render(<PureLayout><TestPage /></PureLayout>, document.getElementById('root'))

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        console.log('Accepting the updated printMe module!')
        module.hot.accept('containers/test-page', () => {
            render(PureLayout)
        })
    }
}
