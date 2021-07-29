// Get price in desired format. If we were to extend this application globally we would refactor this to 
// account for different localities
const getFormattedPrice = (price) => {
    let formatted = price.toLocaleString("en-us", { minimumFractionDigits: 0});
    return `$${formatted}`;
};

// Get date in desired format. See above about locality.
// Note that spec doc showed format MM/DD/YY but mock
// showed M/d/yyyy (no leading zeros on month or date and full year)
// I choose to follow mock to simplify visual comparison
const getFormattedDate = (dateString) => {
    let date = new Date(dateString);
    return date.toLocaleDateString("en-us");
}

// Get address in desired format
const getFullAddress = (address) => {
    return `${address.full}, ${address.city}, ${address.state}`;
}

export { getFormattedPrice, getFormattedDate, getFullAddress };