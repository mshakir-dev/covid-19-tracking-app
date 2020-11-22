import React, {useState, useEffect} from 'react';
import {fetchCountries} from '../../api';

const CountryPicker = ( {handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect( () => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <div className="container">
            <div className="col-md-8 mx-auto my-3">
                <form>
                    <select className="custom-select" defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                        <option value="">Global</option>
                        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                    </select>
                </form>
            </div>
        </div>
    )
}
export default CountryPicker;