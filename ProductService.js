const N1 = 'Amazon GiftCard'
const N2 = 'Starbucks GiftCard'
const N3 = 'iTunes GiftCard'

const P1 = 1000
const P2 = 750
const P3 = 500




const PRODUCTS = [
    {
        id: 100,
        name: N1,
        price: P1,
        image: require('../assets/products/Amzlogo.png'),
        description: 'Gift Card that is redeemable at amazon.com; Provides access code on purchase'
    },
    {
        id: 101,
        name: N2,
        price: P2,
        image: require('../assets/products/starbucks.jpg'),
        description: 'Gift Card that is redeemable at qualifying StarBucks Locations; Process Bar Code on purchase'
    },
    {
        id: 102,
        name: N3,
        price: P3,
        image: require('../assets/products/apple.jpeg'),
        description: 'Gift card that is redeemable on the Apple Store for IOS devices; Process access code on purchase'
    },
    {
        id: 103,
        name: N3,
        price: P3,
        image: require('../assets/products/apple.jpeg'),
        description: 'Gift card that is redeemable on the Apple Store for IOS devices; Process access code on purchase'
    },
    {
        id: 104,
        name: N1,
        price: P1,
        image: require('../assets/products/Amzlogo.png'),
        description: 'Gift Card that is redeemable at amazon.com; Provides access code on purchase'
    },

];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}
