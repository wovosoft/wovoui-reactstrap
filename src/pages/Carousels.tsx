import Carousel from "../components/Carousels/Carousel";
import CarouselItem from "../components/Carousels/CarouselItem";
import Card from "../components/Cards/Card";
import {colorVariants} from "../helpers";

export default function Carousels() {
    return <>
        <h4 className="mt-3">Default Carousel</h4>
        <Carousel active={0}>
            {colorVariants.map((variant, index) => (
                <CarouselItem key={index} className={'text-bg-' + variant} style={{minHeight: '250px'}}>
                    <h1 className="mt-5 text-center"> {index} . {variant}</h1>
                </CarouselItem>
            ))}
        </Carousel>
    </>
}