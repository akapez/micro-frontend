import faker from "faker";

const mount = (el) => {
    let products = "";

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
};

//Situation #1
// We are running the file in development in isolation
if (process.env.NODE_ENV === "development") {
    const el = document.querySelector('#dev-products');
    if (el) {
        mount(el);
    }
}


//Situation #2
// We are running this file in development or production
export { mount };