document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.getElementById('reviews-container');
    const productNameSelect = document.getElementById('productName');
    const reviewForm = document.getElementById('reviewForm');

    // Assuming you have a products array for reviews as well
    let products = [
        {
            id: "a",
            name: "Eesti kartul",
            reviews: []
        },
        {
            id: "b",
            name: "Läti kartul",
            reviews: []
        },
        {
            id: "c",
            name: "Briti kartul",
            reviews: []
        },
        {
            id: "d",
            name: "Hiina kartul",
            reviews: []
        },
        {
            id: "e",
            name: "Portugali kartul",
            reviews: []
        }
    ];

    // Populate product options in the form
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });

    // Display initial reviews
    displayReviews();

    // Function to display reviews
    function displayReviews() {
        reviewsContainer.innerHTML = '';

        // Iterate through products and display reviews
        products.forEach(product => {
            const productReviews = product.reviews.map(review => {
                return `
                    <div class="review">
                        <p>User: ${review.user}</p>
                        <p class="rating">Rating: ${review.rating}</p>
                        <p>Comment: ${review.comment}</p>
                    </div>
                `;
            }).join('');

            const productElement = document.createElement('div');
            productElement.innerHTML = `
                <h2>${product.name}</h2>
                ${productReviews}
            `;

            reviewsContainer.appendChild(productElement);
        });
    }

    // Function to submit a new review
    window.submitReview = function() {
        const productId = productNameSelect.value;
        const userName = document.getElementById('userName').value;
        const userRating = parseInt(document.getElementById('userRating').value);
        const userComment = document.getElementById('userComment').value;

        // Find the product by ID
        const product = products.find(p => p.id === productId);

        // Add the new review to the product
        product.reviews.push({
            user: userName,
            rating: userRating,
            comment: userComment,
        });

        // Display updated reviews
        displayReviews();

        // Reset the form
        reviewForm.reset();
    };
});