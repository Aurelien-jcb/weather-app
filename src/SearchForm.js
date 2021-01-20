import React from 'react';

export default function SearchForm({api_call, city, updateCity}) {
    return (
        <div>
        <form onSubmit={api_call} >
            <input onChange={updateCity} value={city} className="weather__input" type="text" name="city" id="city" placeholder="Entrez votre ville"/>
          </form>
        </div>
    )
}
