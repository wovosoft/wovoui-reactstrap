import {CarouselItemProps} from "./index";
import {toClasses} from "../../helpers";
import {useEffect, useState} from "react";

export default function CarouselItem(
    {
        tag = "div",
        active = false,
        activeClass = "active",
        currentItem,
        oldItem,
        myIndex,
        className,
        onSlide,
        ...props
    }: CarouselItemProps
) {
    const [startClass, setStartClass] = useState(false);
    const [isActive, setIsActive] = useState(myIndex === currentItem);
    const [nextClass, setNextClass] = useState(false);
    const attrs = {
        ...props,
        className: toClasses([
            className,
            "carousel-item",
            {
                "carousel-item-start": startClass,
                "carousel-item-end": nextClass,
                [activeClass]: isActive,
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
        let timer: number | undefined;

        //to prevent initial transition both values should be set
        if (currentItem !== null && oldItem !== null) {
            //old item and current item both gets carousel-item-{start|end} class
            //carousel-item-{next|prev} should be added to the next item
            if (currentItem === myIndex || oldItem === myIndex) {

                //only next element should get carousel-item-{next|prev} class
                if (currentItem === myIndex) {
                    setNextClass(true);
                }
                setStartClass(true);

                //after 600 ms both loses carousel-item-{start|end} class
                //and active class should be moved to next item
                timer = setTimeout(() => {
                    setStartClass(false);

                    setNextClass(false);
                    if (currentItem === myIndex) {
                        setIsActive(true);
                    } else if (oldItem === myIndex) {
                        setIsActive(false);

                    }
                }, 600)
            }
        }

        return () => {
            if (timer) {
                //if timer exists, should be removed on unmount
                clearTimeout(timer)
            }
        }
    }, [currentItem, oldItem])


    return (<div {...attrs}/>)
}