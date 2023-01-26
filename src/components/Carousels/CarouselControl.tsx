import {CarouselControlProps} from "./index";

export default function CarouselControl(
    {
        type,
        children,
        ...props
    }: CarouselControlProps
) {
    return (
        <button {...props} className={'carousel-control-' + type} type="button" data-bs-slide={type}>
            <span className={'carousel-control-' + type + '-icon'} aria-hidden="true"></span>
            <span className="visually-hidden">
                {children || type}
            </span>
        </button>
    )
}