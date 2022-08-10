// find the chepest phone form the arry 

const phones = [
    { name: 'smssung', model: 'Md004', price: '22000', color: 'silver' },
    { name: 'iphone', model: 'Md006', price: '50000', color: 'silver' },
    { name: 'xomi', model: 'Md009', price: '30000', color: 'silver' },
    { name: 'vivo', model: 'Md014', price: '28000', color: 'silver' },
    { name: 'nokia', model: ' Md025', price: '15000', color: 'silver ' },
];

function cheapestphone(phones) {
    let chepeast = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < chepeast.price) {
            chepeast = phone
        }
    }
    return chepeast;
}


const findphone = cheapestphone(phones);
console.log(findphone);


