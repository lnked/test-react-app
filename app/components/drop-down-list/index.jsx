import css from './styles.scss'
import React, { Component } from 'react'
import { oneOfType, string, array, bool, number } from 'prop-types'

import Select from 'react-select'

export default class DropDownList extends Component {
    static propTypes = {
        name: string.isRequired,
        label: oneOfType([
            string,
            bool
        ]),
        options: array,
        placeholder: string,
        value: oneOfType([
            string,
            number
        ])
    }

    static defaultProps = {
        options: []
    }

    state = {
        value: ''
    }

    handleChange = (value) => {
        this.setState({...this.state, value})
    }

    render () {
        const { value } = this.state
        const { options } = this.props

        const label = []

        if (this.props.label) {
            label.push(
                <span className={css.label__name} key={[this.keyPrefix, 'label'].join('.')}>
                    {this.props.label}
                </span>
            )
        }

        return (
            <div className={css.label}>
                { label }
                <Select
                    name={this.props.name}
                    value={value}
                    options={options}
                    clearable={false}
                    autosize={false}
                    className={css.select}
                    placeholder={this.props.placeholder}
                    noResultsText="Нет совпадений"
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
