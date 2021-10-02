/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import './images.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classes from './images.module.css';
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
        <div className={classes["container"]}>
            <div className={classes["img_container"]}>
                <Carousel>
                    {slideImages.map((element) => {
                        return(
                            <div>
                                <img src={element.url} />
                                <p className="legend">{element.caption}</p>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}