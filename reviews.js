function displayUserInput() {
  // Get the selected product from the dropdown
  var selectedProduct = document.getElementById("productDropdown").value;

  // Get the content entered by the user
  var userContent = document.getElementById("userText").innerText;

  // Retrieve existing reviews from localStorage
  var reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  // Display the selected product, review, and user content as a review
  if (selectedProduct.trim() !== "" && userContent.trim() !== "") {
    // Create a new review object
    var newReview = {
      product: selectedProduct,
      review: userContent,
    };

    // Add the new review to the reviews array
    reviews.push(newReview);

    // Save the updated reviews array to localStorage
    localStorage.setItem("reviews", JSON.stringify(reviews));

    // Create a new list item for the review
    var reviewItem = document.createElement("li");

    // Create a div as a box to style the review
    var reviewBox = document.createElement("div");
    reviewBox.classList.add("reviewBox");

    // Set the content inside the box
    reviewBox.innerHTML =
      "<strong>Product:</strong> " +
      selectedProduct +
      "<br><strong>Review:</strong> " +
      userContent;

    // Append the review box to the review list
    reviewItem.appendChild(reviewBox);
    document.getElementById("reviewList").appendChild(reviewItem);

    // Clear the selected product and content in the div
    document.getElementById("productDropdown").value = "";
    document.getElementById("userText").innerText = "";
  } else {
    alert("Please select a product and enter some text before submitting a review.");
  }
}

// Call this function on page load to retrieve and display stored reviews
function loadStoredReviews() {
  var reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  reviews.forEach(function (review) {
    var reviewItem = document.createElement("li");
    var reviewBox = document.createElement("div");
    reviewBox.classList.add("reviewBox");
    reviewBox.innerHTML =
      "<strong>Product:</strong> " + review.product + "<br><strong>Review:</strong> " + review.review;
    reviewItem.appendChild(reviewBox);
    document.getElementById("reviewList").appendChild(reviewItem);
  });
}

// Call the function to load stored reviews when the page loads
loadStoredReviews();