import {BasicComponent} from "../../types";

export interface TabProps extends BasicComponent {
    /**
     * @description Active Tab
     * @type boolean
     * @default false
     */
    active?: boolean;

    /**
     * @description Tab Menu Title
     * @type string
     * @default null
     */
    title?: string;
}

export interface TabContentProps extends BasicComponent{

}