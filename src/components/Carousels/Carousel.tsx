import {CarouselProps, CarouselStatesType} from "./index";
import {toClasses} from "../../helpers";
import CarouselInner from "./CarouselInner";
import CarouselIndicators from "./CarouselIndicators";
import CarouselControl from "./CarouselControl";
import {Children, cloneElement, MouseEvent, MouseEventHandler, useState} from "react";

export default function Carousel(
    {
        tag = "div",
        slide = true,
        controlsEnabled = true,
        indicatorsEnabled = true,
        fade = false,
        dark = fade,
        intervals = false,
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

    let [timer, setTimer] = useState(0);
    const toNext: MouseEventHandler<any> = (e) => {
        e.stopPropagation();
        if (currentItem < children.length) {
            const target = currentItem + 1;
            setTargetItem(target);
            setSlideDirection("next");

            if (timer) {
                clearTimeout(timer);
                setTimer(0);
            }

            setTimer(setTimeout(() => {
                setCurrentItem(target);
                setTargetItem(null);
            }, 600));
        }
    };

    const toPrev: MouseEventHandler<any> = (e) => {
        e.stopPropagation();
        if (currentItem > 0) {
            setTargetItem(currentItem - 1);
            setSlideDirection("prev");

            if (timer) {
                clearTimeout(timer);
                setTimer(0);
            }

            setTimer(setTimeout(() => {
                setCurrentItem(currentItem - 1);
                setTargetItem(null);
            }, 600));
        }
    };

    const toSlide = (e: MouseEvent<HTMLButtonElement>, index: number) => {
        e.stopPropagation();
        if (index < children.length && currentItem >= 0) {

        }
    };

    const getControls = () => <>
        <CarouselControl type='prev' children="Previous" onClick={toPrev}/>
        <CarouselControl type='next' children="Next" onClick={toNext}/>
    </>


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


    return (<div {...attrs}>
        <CarouselInner>
            <div className="position-absolute top-0" style={{zIndex: '9999'}}>{JSON.stringify({
                currentItem,
                targetItem
            })}</div>
            {
                Children.map(children, (child, index) => cloneElement(child, {
                    myIndex: index,
                    currentItem,
                    targetItem,
                    slideDirection
                }))
            }
            {controlsEnabled && getControls()}
            {indicatorsEnabled && getCarouselIndicators()}
        </CarouselInner>
    </div>)
}