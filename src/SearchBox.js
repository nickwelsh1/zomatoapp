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
        <div className="SearchBox   pa2">
            <div className="category bn fl-l fl-m w-20-l w-30-m pa2">
                <fieldset id="category">
                    <div className="fl w-100">
                        <legend className="fw7 mb2">Category</legend>
                        {
                            // console.log(categories)
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
                    </div>
                </fieldset>
            </div>
            <div className="cuisine bn fl-l fl-m w-50-l w-70-m pa2">
                <fieldset id="cuisine">
                    <div>
                        <legend className="w-100 fw7 mb2">Cuisine</legend>
                    </div>
                    <div className="three-columns">
                        {
                            // console.log(cuisines)
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
                    </div>
                </fieldset>
            </div>
            <div className="sliders bn fl-l w-20-l w-100 pa2">
                <fieldset id="sliders">
                    <div className="fl w-100">
                        <legend className="fw7 mb2">Rating</legend>
                        <input className="w-100" type="range" id="start" name="rating" min="0" max="5"></input>
                        <p className="tl fl w-50">0</p> <p className="tr fl w-50">5</p>
                        <legend className="fw7 mb2">Cost</legend>
                        <input className="w-100" type="range" id="start" name="cost" min="0" max="4"></input>
                        <input
                            className='cf'
                            type='search'
                            placeholder='search restaurants'
                            onChange={searchChange}
                            />
                    </div>
                </fieldset>
            </div>
        </div>
    );
}

export default SearchBox;