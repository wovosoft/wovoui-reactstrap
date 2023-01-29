import {CarouselProps} from "./index";
import {toClasses} from "../../helpers";
import CarouselInner from "./CarouselInner";
import CarouselIndicators from "./CarouselIndicators";
import CarouselControl from "./CarouselControl";
import {Children, cloneElement, MouseEvent, MouseEventHandler, useRef, useState, createContext, useEffect} from "react";

export const CarouselContext = createContext<{
    currentItem?: number | null,
    targetItem?: number | null,
    slideDirection?: 'next' | 'prev' | null
}>({
    currentItem: null,
    targetItem: null,
    slideDirection: null
});

const ANIMATION_TIME = 600;

export default function Carousel(
    {
        tag = "div",
        slide = true,
        controlsEnabled = true,
        indicatorsEnabled = true,
        fade = false,
        dark = fade,
        interval = 5,
        direction = "next",
        className,
        children,
        onClickNext = null,
        onClickPrev = null,
        onSlideChange = null,
        active = 0,
        ...props
    }: CarouselProps
) {


    const attrs = {
        ...props,
        className: toClasses([
            className,
            "carousel",
            {
                slide: slide,
                "carousel-fade": fade,
                "carousel-dark": dark,
            }
        ])
    };

    const [currentItem, setCurrentItem] = useState(active);
    const [targetItem, setTargetItem] = useState<null | number>(null);
    const [slideDirection, setSlideDirection] = useState<'next' | 'prev' | null>(null);

    const isLast = () => currentItem === (children.length - 1);

    let timer = useRef(0);
    const toNext: MouseEventHandler<any> = (e?: MouseEvent<any> | null) => {
        toSlide(
            e,
            isLast() ? 0 : currentItem + 1,
            isLast() ? 'next' : null
        );
    };

    const toPrev: MouseEventHandler<any> = (e?: MouseEvent<any> | null) => {
        toSlide(
            e,
            currentItem === 0 ? children.length - 1 : currentItem - 1,
            currentItem === 0 ? 'prev' : null
        );
    };

    // @ts-ignore
    const toSlide = (e?: MouseEvent<any> | null, target: number, direction?: 'next' | 'prev' | null) => {
        if (e) {
            e.stopPropagation();
        }

        if (target === currentItem) {
            return;
        }

        if (target < children.length && currentItem >= 0) {
            setTargetItem(target);
            if (direction) {
                setSlideDirection(direction);
            } else {
                if (target > currentItem) {
                    setSlideDirection("next");
                } else {
                    setSlideDirection("prev");
                }
            }

            if (timer) {
                clearTimeout(timer.current);
                timer.current = 0;
            }

            timer.current = setTimeout(() => {
                setCurrentItem(target);
                // setTargetItem(null);
            }, ANIMATION_TIME);
        }
    };

    const getControls = () => (<>
        <CarouselControl type='prev' children="Previous" onClick={toPrev}/>
        <CarouselControl type='next' children="Next" onClick={toNext}/>
    </>);

    const getCarouselIndicators = () => {
        return (
            <CarouselIndicators>
                {Children.map(children, (child, child_index) =>
                    <button
                        onClick={(e) => toSlide(e, child_index)}
                        key={child_index}
                        data-bs-target
                        type="button"
                        className={toClasses({active: currentItem === child_index})}
                        aria-label={"Slide " + (child_index + 1)}>
                    </button>
                )}
            </CarouselIndicators>
        )
    }

    //looping
    // const intervalTimer = useRef<number | null>();
    // const clearIntervalTimer = () => intervalTimer.current && clearInterval(intervalTimer.current);
    // const setIntervalTimer = () => {
    //     clearIntervalTimer();
    //
    //     if (interval) {
    //         intervalTimer.current = setInterval(() => {
    //             // @ts-ignore
    //             toNext();
    //         }, interval * 1000);
    //     }
    // }
    //
    // useEffect(() => {
    //     setIntervalTimer();
    // }, [interval]);

    return (<div {...attrs}>
        <CarouselInner>
            <CarouselContext.Provider value={{
                currentItem: currentItem,
                targetItem: targetItem,
                slideDirection: slideDirection
            }}>
                {
                    Children.map(children, (child, index) => cloneElement(child, {
                        myIndex: index,
                    }))
                }
            </CarouselContext.Provider>
            {controlsEnabled && getControls()}
            {indicatorsEnabled && getCarouselIndicators()}
        </CarouselInner>
    </div>)
}