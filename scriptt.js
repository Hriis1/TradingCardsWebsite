//Purchase form

var purchaseForm = document.querySelector('.purchase-form');

purchaseForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var name = purchaseForm.querySelector('#name').value;

  var message = name + ', благодарим за поръчката!';
  
  alert(message);
});

//Review form

// Select the form
var reviewForm = document.querySelector('.review-form');

// Select the reviews-container
var reviewsContainer = document.querySelector('.reviews-container');

//Generate a key for the current page
var pageKey = 'reviews_' + window.location.href;


//Load thw saved reviews from localStorage
window.addEventListener('DOMContentLoaded', function() {
  var savedReviews = localStorage.getItem(pageKey);
  if (savedReviews) {
    reviewsContainer.innerHTML = savedReviews;
  }
});

reviewForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var comment = reviewForm.querySelector('#comment').value;

  //Create the new review
  var newReview = document.createElement('div');
  newReview.classList.add('review');
  var newReviewText = document.createElement('p');
  newReviewText.classList.add('review-text');
  newReviewText.textContent = comment;
  newReview.appendChild(newReviewText);

  // Insert the review
  reviewsContainer.insertBefore(newReview, reviewsContainer.firstChild);
  
  //Save the reviews into localStorage for the current page
  var allReviews = reviewsContainer.innerHTML;
  localStorage.setItem(pageKey, allReviews);
  
  //Reset the form
  reviewForm.reset();
});
