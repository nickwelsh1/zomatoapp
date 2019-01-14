import React from 'react';
import Checkbox from './Checkbox';



const SearchBox = ({ searchfield, searchChange }) => {
    const categories = [
        {'name': 'Dining'},
        {'name': 'Take-Away'},
        {'name': 'Delivery'},
        {'name': 'Pubs & Bars'}
    ];

    const cuisines = [
        'Cafe Food',
        'Coffee and Tea',
        'Pizza',
        'Fast Food',
        'Asian',
        'Bakery',
        'Italian',
        'Sandwich',
        'Chinese',
        'Pub Food',
        'Other'

    ];

    return (
        <div >
            <fieldset id="category" className="category bn fl w-20 pa2">
                <legend className="fw7 mb2">Category</legend>
                {
                    console.log(categories)
                }
                {
                    categories.map( (item, i) => {
                        console.log(item)
                        return (
                            <Checkbox
                                key={item.name}
                                name={item.name}
                            />
                        )
                    })
                }
            </fieldset>
            <fieldset id="cuisine" className="cuisine bn fl w-60 pa2">
                <legend className="fw7 mb2">Cuisine</legend>
                {
                    console.log(cuisines)
                }
                {
                    cuisines.map( (item, i) => {
                        console.log(item)
                        return (
                            <Checkbox
                                key={item}
                                name={item}
                            />
                        )
                    })
                }
            </fieldset>
            <input
                className='cf'
                type='search'
                placeholder='search restaurants'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;