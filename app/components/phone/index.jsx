import React, { Component } from 'react'
import { oneOfType, bool, string, array } from 'prop-types'
import css from './styles.scss'

import InputMask from 'react-input-mask'
import ReactFlagsSelect from 'react-flags-select'

export default class Phone extends Component {
    static propTypes = {
        name: string.isRequired,
        label: oneOfType([
            string,
            bool
        ]),
        country: array,
        placeholder: string,
        value: string,
        mask: string,
        maskChar: string
    }

    static defaultProps = {
        label: false,
        value: '',
        country: [],
        maskChar: '_',
        placeholder: ''
    }

    state = {
        value: '',
        phoneMask: ''
    }

    componentDidMount () {
        const { country } = this.props

        country.map((item) => {
            if (item.hasOwnProperty('selected') && item.selected) {
                this.setState({...this.state, phoneMask: item.mask})
            }
        })
    }

    handleChange = (countryCode) => {
        const { country } = this.props

        country.map((item) => {
            if (item.code === countryCode) {
                this.setState({...this.state, value: '', phoneMask: item.mask})
            }
        })
    }

    handlePhoneChange = (e) => {
        const changed = e.target.value
        this.setState({...this.state, value: changed})
    }

    render () {
        const { country } = this.props
        const { value, phoneMask } = this.state

        let selectedCountry = ''

        const label = []
        const countries = []
        const countriesLabels = []

        country.map((item) => {
            countries.push(item.code)
            countriesLabels[item.code] = item.label

            if (item.hasOwnProperty('selected') && item.selected) {
                selectedCountry = item.code
            }
        })

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
                <div className={css.masked}>
                    <div className={css.country}>
                        <ReactFlagsSelect
                            countries={countries}
                            customLabels={{
                                US: 'США',
                                GB: 'Великобритания',
                                FR: 'Франция',
                                DE: 'Германия',
                                RU: 'Россия'
                            }}
                            onSelect={this.handleChange}
                            defaultCountry={selectedCountry}
                            showSelectedLabel={false}
                            placeholder=""
                        />
                    </div>

                    <InputMask
                        name={this.props.name}
                        mask={phoneMask}
                        alwaysShowMask={true}
                        maskChar={this.props.maskChar}
                        value={value}
                        defaultValue={this.props.value}
                        onChange={this.handlePhoneChange}
                        placeholder={this.props.placeholder}
                        className={css.input}
                    />
                </div>
            </div>
        )
    }
}
