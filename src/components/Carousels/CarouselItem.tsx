import {CarouselItemProps} from "./index";
import {toClasses} from "../../helpers";
import {useEffect, useState} from "react";

export default function CarouselItem(
    {
        tag = "div",
        active = false,
        activeClass = "active",
        myIndex,
        className,
        onSlide,
        currentItem,
        targetItem,
        slideDirection,
        ...props
    }: CarouselItemProps
) {

    const [isActive, setIsActive] = useState(currentItem === myIndex);
    const [transitionalClasses, setTransitionalClasses] = useState({
        direction: false,
        transition: false
    });

    const isToNext = () => slideDirection === "next";
    const isToPrev = () => slideDirection === "prev";

    const attrs = {
        ...props,
        className: toClasses([
            className,
            "carousel-item",
            {
                "active": isActive,
                [`carousel-item-${isToNext() ? 'start' : 'end'}`]: transitionalClasses.transition,
                [`carousel-item-${slideDirection}`]: myIndex === targetItem
            }
        ])
    };


    /**
     * on trigger
     * next item gets: carousel-item-next carousel-item-start
     * prev items gets: carousel-item-start
     *
     * after 600ms (transition end),
     * both next and prev items loses carousel-item-start,
     * next items loses carousel-item-next
     * active class is moved to next from prev
     */


    useEffect(() => {
        if ((myIndex === currentItem || myIndex === targetItem) && targetItem) {
            setTransitionalClasses({
                ...transitionalClasses,
                transition: true
            });
        }

        const timer = setTimeout(() => {
            setIsActive(currentItem === myIndex);

            setTransitionalClasses({
                ...transitionalClasses,
                transition: false
            });
        }, 600);

        return () => clearTimeout(timer);
    }, [targetItem]);


    return (<div {...attrs}/>)
}