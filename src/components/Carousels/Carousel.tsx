import {CarouselProps} from "./index";
import {toClasses} from "../../helpers";
import CarouselInner from "./CarouselInner";
import CarouselIndicators from "./CarouselIndicators";
import CarouselControl from "./CarouselControl";
import {Children, cloneElement, useState} from "react";

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
    //fill with children
    const [activeItem, setActiveItem] = useState(active);
    const [slides, setSlides] = useState<{ current: number, old: number | null }>({
        current: activeItem,
        old: null
    });

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

    const changeSlide = (current: number, old: number) => {
        setActiveItem(current);
        if (typeof onSlideChange === "function") {
            onSlideChange(current);
        }

        setSlides({current, old});
    }

    const getControls = () => <>
        <CarouselControl type='prev' children="Previous" onClick={(e) => {
            e.stopPropagation();
            let index = activeItem;
            if (activeItem > 0) {
                changeSlide(--index, activeItem);
            }
            if (typeof onClickPrev === "function") {
                onClickPrev(index);
            }
        }}/>

        <CarouselControl type='next' children="Next" onClick={(e) => {
            e.stopPropagation();
            let index = activeItem;
            if (activeItem < children.length - 1) {
                changeSlide(++index, activeItem);
            }

            if (typeof onClickNext === "function") {
                onClickNext(index);
            }
        }}/>
    </>


    const getCarouselIndicators = () => {
        return (
            <CarouselIndicators>
                {Children.map(children, (child, child_index) =>
                    <button
                        onClick={() => changeSlide(child_index, activeItem)}
                        key={child_index}
                        data-bs-target
                        type="button"
                        className={toClasses({active: activeItem === child_index})}
                        aria-label={"Slide " + (child_index + 1)}>
                    </button>
                )}
            </CarouselIndicators>
        )
    }


    return (<div {...attrs}>
        <CarouselInner>
            {
                Children.map(children, (child, index) => cloneElement(child, {
                    className: child.props.className,
                    active: index === active,
                    currentItem: slides.current,
                    oldItem: slides.old,
                    myIndex: index,
                }))
            }
            {controlsEnabled && getControls()}
            {indicatorsEnabled && getCarouselIndicators()}
        </CarouselInner>
    </div>)
}