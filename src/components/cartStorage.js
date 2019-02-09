export class CartStorage {
    saveCart(Cart) {
        let cartStateString = JSON.stringify(Cart);
        sessionStorage.setItem('cart', cartStateString);
    }
    getCart() {
        let cartStateString = sessionStorage.getItem('cart');
        return JSON.parse(cartStateString);
    }
    getAllProducts() {
        return [
            { id: 1, name: 'Jablko', price: 600, count_in_stock: 27, unit: 'Ks' },
            { id: 2, name: 'Hruška', price: 100, count_in_stock: 26, unit: 'Kg' },
            { id: 3, name: 'Banán', price: 300, count_in_stock: 29, unit: 'Ks' },
            { id: 4, name: 'Mandarinka', price: 700, count_in_stock: 28, unit: 'Kg' },
            { id: 5, name: 'Batata', price: 800, count_in_stock: 25, unit: 'Ks' },
            { id: 6, name: 'Cibule', price: 500, count_in_stock: 256, unit: 'Kg' },
        ];
    }
}
