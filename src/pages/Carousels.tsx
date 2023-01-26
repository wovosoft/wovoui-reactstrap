import Carousel from "../components/Carousels/Carousel";
import CarouselItem from "../components/Carousels/CarouselItem";
import Card from "../components/Cards/Card";
import {useState} from "react";
import {colorVariants} from "../helpers";

export default function Carousels() {
    const [activeSlide, setActiveSlide] = useState(0);
    return <>
        <h4 className="mt-3">Default Carousel ={activeSlide}</h4>
        <Carousel active={activeSlide} onSlideChange={slide => setActiveSlide(slide)}>
            {colorVariants.map((variant, index) => (
                <CarouselItem key={index}>
                    <Card style={{minHeight: '250px'}} className="text-center" variant={variant}>
                        <h1 className="mt-5"> {index} . {variant}</h1>
                    </Card>
                </CarouselItem>
            ))}
        </Carousel>
    </>
}