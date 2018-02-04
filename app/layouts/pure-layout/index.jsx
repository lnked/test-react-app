import React, { PureComponent } from 'react'
import { oneOfType, object, string, array } from 'prop-types'
import css from './styles.scss'

export default class PureLayout extends PureComponent {
    static propTypes = {
        children: oneOfType([
            object,
            string,
            array
        ])
    }

    state = {
        title: 'Test app'
    }

    componentWillMount () {
        document.title = this.state.title
        window.prerenderReady = true
    }

    render () {
        return (
            <div className={css.layout}>
                { this.props.children }
            </div>
        )
    }
}
