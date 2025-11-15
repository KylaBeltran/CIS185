const products = document.querySelectorAll('.product-card');
const countryTabs = document.querySelectorAll('.country-tabs .tab');
const filterButtons = document.querySelectorAll('.filter-buttons .filter-btn');


let selectedCountry = "all";
let selectedFilter = "all";

function updateDisplay() {
    products.forEach(product => {

        const matchesCountry =
            (selectedCountry === "all" || product.dataset.country === selectedCountry);

        const matchesFilter =
            (selectedFilter === "all" || product.dataset.filter === selectedFilter);

        if (matchesCountry && matchesFilter) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

countryTabs.forEach(tab => {
    tab.addEventListener("click", () => {

        countryTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        selectedCountry = tab.dataset.country;
        updateDisplay();
    });
});

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        selectedFilter = btn.dataset.filter;
        updateDisplay();
    });
});

document.addEventListener("DOMContentLoaded", updateDisplay);
