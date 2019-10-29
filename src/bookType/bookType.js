import React from 'react';

export default class PrintType extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor='book-type'>Book type:</label>
                <select
                    name='book-type'
                    onChange={event => this.props.bookFilter(event.target.value)}>
                    <option value=''>No Filter</option>
                    <option value='ebooks'>ebooks</option>
                    <option value='free-ebooks'>free-ebooks</option>
                    <option value='full'>full</option>
                    <option value='paid-ebooks'>paid-ebooks</option>
                    <option value='partial'>partial</option>
                </select>
            </div>
        )
    }
}