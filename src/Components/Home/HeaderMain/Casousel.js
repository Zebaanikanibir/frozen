import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../images/model.jpg';
import image2 from '../../../images/shopping.jpg';
import image3 from '../../../images/image10.jpg';
export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div className="caro">
                    <img src={image1} />
                </div>
                <div className="caro">
                    <img src={image2} />
                </div>
                <div className="caro">
                    <img src={image3} />
                </div>
            </Carousel>
        </div>
    );
}