import React from 'react';
import Checkbox from './Checkbox';



const SearchBox = ({ handleChange, appState }) => {

    const categories = [
        {'Dining': 'false'},
        {'Take-Away': 'false'},
        {'Delivery': 'false'},
        {'Pubs & Bars': 'false'}
    ];

    const cuisines = [
        {'Cafe Food': 'false'},
        {'Coffee and Tea': 'false'},
        {'Pizza': 'false'},
        {'Fast Food': 'false'},
        {'Asian': 'false'},
        {'Bakery': 'false'},
        {'Italian': 'false'},
        {'Sandwich': 'false'},
        {'Chinese': 'false'},
        {'Pub Food': 'false'},
        {'Other': 'false'}
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
                                const name = Object.keys(item)
                                // console.log(item)
                                return (
                                    <Checkbox
                                        key={name}
                                        name={name}
                                        defaultChecked={item.value}
                                        inputGroup="category"
                                        handleChange={handleChange}
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
                                const name = Object.keys(item)
                                // console.log(Object.keys(item))
                                return (
                                    <Checkbox
                                        key={name}
                                        name={name}
                                        defaultChecked={item.value}
                                        inputGroup="cuisine"
                                        handleChange={handleChange}
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
                        <input
                            className="w-100"
                            type="range"
                            id="start"
                            name="rating"
                            inputGroup="rating"
                            onChange={handleChange}
                            min="0"
                            max="5"
                            value={appState.searchrating}>
                        </input>
                        <p className="tl fl w-50">0</p> <p className="tr fl w-50">5</p>
                        <legend className="fw7 mb2">Cost</legend>
                        <input
                            className="w-100"
                            type="range"
                            id="start"
                            name="cost"
                            inputGroup="cost"
                            onChange={handleChange}
                            min="0"
                            max="4"
                            value={appState.searchcost}>
                        </input>
                        <input
                            className='cf'
                            type='search'
                            name='textSearch'
                            placeholder='search restaurants'
                            onChange={handleChange}
                            />
                    </div>
                </fieldset>
            </div>
        </div>
    );
}

export default SearchBox;