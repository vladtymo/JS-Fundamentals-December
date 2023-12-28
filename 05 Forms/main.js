// -------------- get element from HTML
const form = document.forms.productForm;

const modelIn = form.elements.model;
const priceIn = form.elements.price;
const statusCb = form.elements.status;

const tBody = document.querySelector('#product-table tbody');

// -------------- Product class
class Product {

    static count = 1000;

    constructor(model, price, status) {
        this.model = model;
        this.price = price;
        this.status = status;

        this.number = Product.count++;
    }

    get statusLabel() {
        return this.status ? "In stock" : "Out of stock";
    }
}

// ---------- click event handler
form.onsubmit = (e) => {

    e.preventDefault();

    // const item = {
    //     number: 1000++,
    //     model: modelIn.value,
    //     price: priceIn.value,
    //     status: statusCb.checked
    // }
    const item = new Product(modelIn.value, priceIn.value, statusCb.checked);

    addProductToTable(item);
}

// ------------- add new product to table
function addProductToTable(item) {

    // 1 - using innerHTML
    tBody.innerHTML += `<tr class='${item.status ? 'available' : ''}'>
                            <td>${item.number}</td>
                            <td>${item.model}</td>
                            <td>${item.price}$</td>
                            <td>${item.statusLabel}</td>
                        </tr>`;

    // 2 - using methods
    // const row = document.createElement('tr');
    // row.createElement('')
    // ...
}

// TODO: implement clear all button function