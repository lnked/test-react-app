import css from './styles.scss'
import React, { Component } from 'react'
import { Phone, Input, Button, DropDownList } from 'components'

export default class TestPage extends Component {
    render () {
        return (
            <div className={css.box}>
                <div className={css.header}>
                    <strong>Зарегистрируйтесь</strong> и начните продавать услуги через интернет сегодня
                </div>

                <div className={css.content}>
                    <div className={css.row}>
                        <div className={css.column}>
                            <Input name="name" label="Имя" value="Сергей" placeholder="Введите имя" />
                        </div>

                        <div className={css.column}>
                            <Input name="last_name" label="Фамилия" value="Миргород" placeholder="Введите фамилию" />
                        </div>
                    </div>

                    <div className={css.row}>
                        <DropDownList
                            name="profession"
                            label="Профессия"
                            placeholder="Введите профессию"
                            options={[
                                { value: 1, label: 'Астронавт' },
                                { value: 2, label: 'Архитектор' },
                                { value: 3, label: 'Бариста' },
                                { value: 4, label: 'Парикмахер' },
                                { value: 5, label: 'Парикмахер-Визажист' },
                                { value: 6, label: 'Программист' }
                            ]}
                        />
                    </div>

                    <div className={css.row}>
                        <Phone
                            name="phone"
                            label="Телефон"
                            country={[
                                { code: 'US', label: 'США', mask: '+1 999 999-99-99' },
                                { code: 'GB', label: 'Великобритания', mask: '+44 999 999-99-99' },
                                { code: 'FR', label: 'Франция', mask: '+33 999 999-99-99' },
                                { code: 'DE', label: 'Германия', mask: '+4\9 999 999-99-99' },
                                { code: 'RU', label: 'Россия', mask: '+7 999 999-99-99', selected: true }
                            ]}
                        />
                    </div>
                </div>

                <footer className={css.footer}>
                    <Button size="large" type="submit" variant="primary">Зарегистрироваться</Button>
                </footer>
            </div>
        )
    }
}
