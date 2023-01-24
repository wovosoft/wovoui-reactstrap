import {BasicComponent, ClassTypes} from "../../types";

export interface TabProps extends BasicComponent {
    /**
     * @description Active Tabs
     * @type boolean
     * @default false
     */
    active?: boolean;

    /**
     * @description Tabs Menu Title
     * @type string
     * @default null
     */
    title?: string;
}

export interface TabContentProps extends BasicComponent {

}

export interface TabsProps extends BasicComponent {

    /**
     * @description defines if the tabs should be styled as card
     * @type boolean
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/card/#navigation
     */
    card?: boolean;

    /**
     * @description defines if the tabs should be styled as pilled
     * @type boolean
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/navs-tabs/#pills
     */
    pills?: boolean;

    /**
     * @description defines if the tabs should fill the whole available width
     * @type boolean
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/navs-tabs/#fill-and-justify
     */
    fill?: boolean;

    /**
     * @description defines if the tabs should be justified
     * @type boolean
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/navs-tabs/#fill-and-justify
     */
    justified?: boolean;

    /**
     * @description Defines tabs links alignment
     * @default null
     */
    align?: 'center' | 'end';

    /**
     * @description Defines if Tab Menus should be at before or after the content area
     * This feature is not supported by bootstrap yet.
     * So, rendering Menus at the end of the content, won't style it properly.
     * In case when value is true, proper styling actions should be taken.
     * @type boolean
     * @default false
     */
    end?: boolean;

    /**
     * @description Defines if menu should be vertical or not.
     * When card is enabled, styling doesn't work properly.
     * @type boolean
     * @default false
     */
    vertical?: boolean;

    /**
     * @type any
     * @default null
     * @description Tab Header Classes
     */
    headerClass?: ClassTypes;

    /**
     * @type any
     * @default null
     * @description Tab Content Classes
     */
    contentClass?: ClassTypes;
}