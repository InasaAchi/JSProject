let shippingIsPossible = false;

const shipping = shippingIsPossible && "თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი არის" || 
                !shippingIsPossible && "თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი არ არის";

console.log(shipping);