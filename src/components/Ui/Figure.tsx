import {FigureProps} from "./index";
import {toClasses} from "../../helpers";

export default function Figure(
    {
        caption,
        children,
        imgUrl,
        imgFluid = false,
        imgAlt,
    }: FigureProps
) {
    return (<figure className="figure">
        {children}
        <img
            className={toClasses(['figure-img', {'img-fluid': imgFluid}])}
            src={imgUrl}
            alt={imgAlt}
        />
        {caption && <figcaption className="figure-caption">
            {caption}
        </figcaption>}
    </figure>)
}