import React, { useEffect, useState } from 'react';
import Review from '../../Review/Review';
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('http://localhost:5011/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    console.log('reviews',reviews)

    return (
        <section className="reviews-box">
             <p className="text-center text-white mb-5 review-head">OUR CUSTOMERS</p>
                <div className="row container-fluid">
                    {
                     reviews.map(review => <Review review={review}></Review>)
                    }
                    
                </div>
        </section>
    );
};

export default Reviews;