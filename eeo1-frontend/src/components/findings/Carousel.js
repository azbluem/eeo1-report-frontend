import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const GraphCarousel = ({imgList}) => {
    const slides = imgList.map((entry)=> {
        return <div>
            <img src={entry.img} alt={entry.desc}/>
            <p className='legend'>{entry.desc}</p>
        </div>
    })
    return(
        <Carousel>
            {slides}
        </Carousel>
    )
}
export default GraphCarousel