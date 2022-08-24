const currencyFormat = (value, currencyCode, currencyDisplay) => {
    return new Intl.NumberFormat('uk', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
        currencyDisplay: currencyDisplay // 'code' , 'name' , 'symbol'
    }).format(value);
}

export default currencyFormat
