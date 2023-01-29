import {CarouselItemProps} from "./index";
import {toClasses} from "../../helpers";
import {useContext, useEffect, useRef, useState} from "react";
import {CarouselContext} from "./Carousel";

export default function CarouselItem(
    {
        tag = "div",
        myIndex,
        className,
        onSlide,
        ...props
    }: CarouselItemProps,
) {
    const carousel = useContext(CarouselContext);
    const [isActive, setIsActive] = useState(carousel.currentItem === myIndex);

    const [transition, setTransition] = useState({
        direction: false,
        begin: false
    });

    const isToNext = () => carousel.slideDirection === "next";

    const attrs = {
        ...props,
        className: toClasses([
            className,
            "carousel-item",
            {
                active: isActive,
                [`carousel-item-${isToNext() ? 'start' : 'end'}`]: transition.begin,
                [`carousel-item-${carousel.slideDirection}`]: transition.direction
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

    const startTimer = useRef<number | null>(null);

    function start() {
        if (carousel.targetItem === myIndex) {
            setTransition(transition => ({
                ...transition,
                direction: true
            }));
        }

        if (startTimer.current) {
            clearTimeout(startTimer.current);
            startTimer.current = null;
        }

        /**
         * This should be rendered on next render.
         * After directional classes 'carousel-item-{next|prev}' is added,
         * then 'carousel-item-{start|end}' should be added
         * TODO: I didn't find a good solution yet.
         * So implementing with 10ms delay, which works.
         * But this is not a solution
         */
        startTimer.current = setTimeout(() => {
            if (carousel.currentItem === myIndex || carousel.targetItem === myIndex) {
                setTransition(transition => ({
                    ...transition,
                    begin: true
                }));
            }
        }, 10);
    }

    function end() {
        setIsActive(myIndex === carousel.currentItem);
        setTransition(transition => ({
            ...transition,
            begin: false,
            direction: false
        }));
    }

    function animate() {
        if (typeof carousel.targetItem === "number") {
            if (carousel.currentItem !== carousel.targetItem) {
                start();
            } else if (carousel.currentItem === carousel.targetItem) {
                end();
            }
        }
    }


    useEffect(animate, [carousel.currentItem, carousel.targetItem])

    return (<div {...attrs}/>)
}