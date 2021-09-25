import React, { useEffect, useState } from 'react';
import Collection from '../Collection/Collection';
import { Spinner } from 'react-bootstrap';
import Slider from "react-slick";
const Collections = () => {
    let thumbnails = document.getElementsByClassName('thumbnail')

    let activeImages = document.getElementsByClassName('active')

    for (var i = 0; i < thumbnails.length; i++) {

        thumbnails[i].addEventListener('mouseover', function () {
            console.log(activeImages)

            if (activeImages.length > 0) {
                activeImages[0].classList.remove('active')
            }


            this.classList.add('active')
            document.getElementById('featured').src = this.src
        })
    }

    const handleRight = () => {
        document.getElementById('slider').scrollLeft += 180
    }
    const handleLeft = () => {
        document.getElementById('slider').scrollLeft -= 180
    }






    const [collections, setCollections] = useState([])
    useEffect(() => {
        fetch('http://localhost:5011/collection')
            .then(res => res.json())
            .then(data => setCollections(data))
        console.log('collections', collections)
    }, [])
    console.log('collections2', collections)
    return (
        <section className="collections">
            <p className="text-center text-white mb-5 review-head">OUR AMAZING PRODUCTS</p>
            {
                collections.length === 0 &&
                (
                    <div>
                        <Spinner animation="border" variant="secondary" />
                    </div>
                )
            }
            <div id="content-wrapper">


                <div className="collection-column">


                    <div id="collection-slide-wrapper" >
                        <button onClick={handleLeft} id="slideLeft">left</button>

                        <div id="slider">
                            {
                                collections?.map(collection => <Collection key={collection._id} collection={collection} />)
                            }
                        </div>

                        <button onClick={handleRight} id="slideRight" >right</button>
                    </div>
                </div>


            </div>












        </section>
    );
};

export default Collections;