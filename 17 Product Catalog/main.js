const api = 'https://dummyjson.com/products';
const list = document.querySelector('.product-list');

const pagination = {
    limit: 5,
    skip: 0,
    total: null,
    next() {
        if (this.skip <= this.total)
            this.skip += this.limit;
    }
}

// ---------- get products from server
async function loadProducts(api) {
    const res = await fetch(api + `?skip=${pagination.skip}&limit=${pagination.limit}`);
    console.log("Response status:", res.status);

    const data = await res.json();
    console.log(console.log(data));

    // go to the next page
    pagination.total = data.total;
    pagination.next();

    renderProducts(data.products);
}

function renderProducts(items) {
    for (const i of items) {
        list.innerHTML += `<div class="col">
                                <div class="card h-100">
                                    <img height="200" src="${i.thumbnail}" class="card-img-top" alt="Product Image">
                                    <div class="card-body">
                                        <h5 class="card-title">${i.title}</h5>
                                        <p class="card-text">${i.price}$ - ${i.category}</p>
                                        <button type="button" class="btn btn-success">Buy Now</button>
                                    </div>
                                </div>
                            </div>`;
    }
}

loadBtn.onclick = () => {
    loadProducts(api);
}

// first page
loadProducts(api);