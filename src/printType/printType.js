import React from 'react';
import './printType.css';

export default class PrintType extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor='print-type'>Print type:</label>
                <select
                    name='print-type'
                    onChange={event => this.props.printFilter(event.target.value)}>
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>Magazines</option>
                </select>
            </div>
        )
    }
}