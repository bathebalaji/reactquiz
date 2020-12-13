import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';

export const Symbols = () => {
    console.log(getSymbolFromCurrency('GBP'))
 return (
     <div>
<h2>List of currencies</h2>
{getSymbolFromCurrency('GBP')}
{getSymbolFromCurrency('EUR')}
{getSymbolFromCurrency('INR')}
{getSymbolFromCurrency('NOT A VALID CODE')}
</div>
)
}

