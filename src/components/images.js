/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import './images.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slideImages from '../assets/json/json.json'
import axios from 'axios';
export default function ImagesSlider(){
    useEffect(() => {
        axios.get(slideImages[0].url)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) =>{
            console.log(err);
        })
    }, [])
    return(
        <div className={"container"}>
            <div className={"img_container"}>
                <Carousel>
                    {slideImages.map((element) => {
                        return(
                            <img src={element.url} />
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}