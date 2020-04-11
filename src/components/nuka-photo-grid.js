//React
import React from "react"

//Nuka Carousel
import Carousel from "nuka-carousel"

//React image gallery
// import ImageGallery from 'react-image-gallery';

// Assets
import IT from "../components/images/IT.jpeg"
import all_soc from "../components/images/all-soc.jpeg"
import heads from "../components/images/heads.jpeg"
import public_relations from "../components/images/public-relations.jpeg"
import welfare from "../components/images/welfare.jpeg"
import rightArrow from "../components/images/next.png"


class NukaPhotoGrid extends React.Component {
    render() {
        return (
            <Carousel 
        
                renderCenterLeftControls={({ previousSlide }) => (
                    <img onClick={previousSlide} src={rightArrow} width={50} alt={""} style={{transform: "scaleX(-1)", padding:"10px"}}/>
                )}

                renderCenterRightControls={({ nextSlide }) => (
                    <img onClick={nextSlide} src={rightArrow} width={50} alt={""} style={{padding:"10px"}}/>
                )}

                defaultControlsConfig={{
                    pagingDotsStyle: {
                        fill: "white"
                    }
                }}

                wrapAround={true}
                autoplayInterval={1000}
                autoplay={true}
                width="50%" 
                style={{marginLeft: "auto", marginRight: "auto", marginBottom: "50px"}}>

                <img src={IT} alt={""}/>
                <img src={all_soc} alt={""}/>
                <img src={heads} alt={""}/>
                <img src={public_relations} alt={""}/>
                <img src={welfare} alt={""}/>
            </Carousel>
        )
    }
}


export default NukaPhotoGrid