/*
  <template>
    <teleport to="body">
        <div ref="modal"
             v-if="shouldMount"
             @keyup.esc="onEsc"
             :id="id"
             :class="classes"
             :style="classStates.modalStyle"
             tabindex="-1"
             :aria-hidden="!shown"
             :aria-modal="shown"
             :role="shown?'dialog':null">
            <ModalDialog :size="size" :centered="centered" :scrollable="scrollable" :fullscreen="fullscreen">
                <div class="modal-content"
                     v-on-click-outside="clickOutside"
                     :class="contentClass" ref="modalContent">
                    <ModalHeader
                        :variant="headerVariant"
                        v-if="!noHeader && ($slots.header || header || title)"
                        :tag="headerTag"
                        :shrink="shrink"
                        :class="headerClass"
                        v-bind="headerAttrs">
                        <slot name="header" v-if="$slots.header || title">
                            <ModalTitle
                                v-if="$slots.title||title"
                                :tag="titleTag"
                                v-bind="titleAttrs"
                                :class="titleClass">
                                <slot name="title">
                                    {{ title }}
                                </slot>
                            </ModalTitle>
                        </slot>
                        <template v-else>
                            {{ header }}
                        </template>
                        <ButtonClose :white="closeBtnWhite" v-if="!noClose" @click="onClose"/>
                    </ModalHeader>
                    <ModalBody :variant="bodyVariant" v-if="!noBody" :class="bodyClass">
                        <slot/>
                    </ModalBody>
                    <template v-else>
                        <slot/>
                    </template>
                    <ModalFooter v-if="!noFooter"
                                 :shrink="shrink"
                                 :variant="footerVariant"
                                 :class="footerClass">
                        <slot name="prepend_buttons"/>
                        <slot name="footer">
                            <Button v-if="!noCloseButton"
                                    v-bind="closeButtonOptions"
                                    :size="shrink ? 'sm' : buttonSize"
                                    @click="onClose">
                                {{ closeTitle }}
                            </Button>
                            <Button v-if="!noOkButton"
                                    v-bind="okButtonOptions"
                                    :size="shrink ? 'sm' : buttonSize"
                                    @click="onOk">
                                <Spinner :size="shrink ? 'sm' : buttonSize" v-if="loading"/>
                                {{ okTitle }}
                            </Button>
                        </slot>
                        <slot name="append_buttons"/>
                    </ModalFooter>
                </div>
            </ModalDialog>
        </div>
        <div v-if="!noBackdrop && showBackdrop"
             :style="classStates.backdropStyle"
             :class="{show:classStates.backdropShow}"
             class="modal-backdrop fade"
        />
    </teleport>
</template>

 */

//
// const emit = defineEmits<{
//     (e: "update:modelValue", value: boolean): void;
//     (e: "close", value: boolean): void;
//     (e: "ok", value: boolean): void;
//     (e: "showing", value: boolean): void;
//     (e: "hiding", value: boolean): void;
//     (e: "shown", value: boolean): void;
//     (e: "hidden", value: boolean): void;
//     (e: "stateChanged", value: boolean): void;
// }>();

import {ModalProps} from "./index";
import {toClasses} from "../../helpers";
import {CSSProperties, useEffect, useMemo, useRef, useState} from "react";

export default function (
    {
        id,
        animation = "fade",
        shrink,
        loading,
        noClose,
        closeBtnWhite,
        noBody,
        lazy,
        bodyClass,
        bodyVariant,
        contentClass,

        title,
        titleTag = "h5",
        titleClass,
        titleAttrs,

        //header props
        noHeader,
        header,
        headerTag = "div",
        headerClass,
        headerAttrs,
        headerVariant,

        noFooter,
        footerClass,
        footerVariant,

        //buttons
        okTitle = "Ok",
        closeTitle = "Close",
        okButtonOptions,
        closeButtonOptions,
        noOkButton,
        noCloseButton,
        noCloseOnBackdrop,
        noCloseOnEsc,

        staticModal,
        noBackdrop,
        buttonSize,

        //modal dialog props
        scrollable,
        centered,
        size,
        fullscreen,
        className,
        ...props
    }: ModalProps
) {
    const TRANSITION_TIME = 150;
    const [showBackdrop, setShowBackdrop] = useState<boolean>(false);

    const [shown, setShown] = useState<boolean>(false);
    //May be triggering element
    const mayBeTriEl = useRef<HTMLElement>();
    const [classStates, setClassStates] = useState({
        modalStatic: false,
        modalShow: false,
        backdropShow: false,
        modalStyle: {} as CSSProperties,
        backdropStyle: {},
    });
    const classes = toClasses(["modal", {
        "fade": animation === "fade" || !animation,
        "modal-static": classStates.modalStatic,
        "show": classStates.modalShow
    }]);

    const modal = useRef<HTMLElement>();

    const [isMountable, setIsMountable] = useState<boolean>(false);
    const shouldMount = useMemo(() => !lazy || isMountable, [lazy, isMountable]);

    const show = () => setState(true);
    const hide = () => setState(false);
    const toggle = () => setState(!shown);
    // defineExpose({
    //     show,
    //     hide,
    //     toggle,
    // });

    useEffect(() => {
        startAnimation(shown);
    }, [shown]);


    function onClose(e) {
        // emit('close', true);
        if (!e.defaultPrevented) {
            hide();
        }
    }

    function onOk(e) {
        // emit('ok', e);
        if (!e.defaultPrevented) {
            hide();
        }
    }

    function onEsc(e) {
        if (!noCloseOnEsc && !e.defaultPrevented) {
            hide();
        }
    }


    function clickOutside(e) {
        if (shown && modal.current?.isSameNode(e.target)) {
            if (staticModal) {
                classStates.modalStatic = true;
                classStates.modalStyle['overflowY'] = "hidden";

                setTimeout(function () {
                    if (classStates.modalStatic) {
                        classStates.modalStatic = false;
                        classStates.modalStyle['overflowY'] = undefined;
                    }
                }, TRANSITION_TIME * 2)
            } else if (!noCloseOnBackdrop) {
                hide();
            }
        }
    }


    function setState(isShowing: boolean) {
        /**
         * before updating visibility state, emit showing/hiding event
         */

        if (isShowing) {
            emit("showing", true);
            //keep last focus element
            mayBeTriEl.value = document.activeElement;
        } else {
            emit("hiding", true);
        }

        nextTick(() => {
            /**
             * Events emitted, now update state
             */
            shown.value = isShowing;
            emit('stateChanged', isShowing)
        });
    }

    function setBodyAttrs() {
        document.body.classList.add("modal-open");
        document.body.style.paddingRight = "17px";
        document.body.style.overflow = "hidden";
    }

    function resetBodyAttrs() {
        document.body.classList.remove("modal-open");
        document.body.style.paddingRight = "";
        document.body.style.overflow = "";
    }

    function startAnimation(isShown: boolean) {
        if (isShown) {
            isMountable.value = true;

            let count = modalCount(true);
            if (count > 1) {
                classStates.modalStyle['zIndex'] = (1155 * count).toString();
                setTimeout(() => classStates.backdropStyle['zIndex'] = (1155 * count - 105).toString(), 0);
            }

            showBackdrop.value = true;
            setTimeout(() => {
                setBodyAttrs();
                classStates.backdropShow = true;
                classStates.modalStyle['display'] = "block";
            }, 0);

            setTimeout(afterModalIsShown, TRANSITION_TIME);
        } else {
            classStates.modalStyle['zIndex'] = "";
            classStates.backdropStyle["zIndex"] = "";

            let count = modalCount(false);
            if (count < 1) {
                resetBodyAttrs();
            }
            //add show class to modal first, this will add hiding transition
            classStates.modalShow = false;

            setTimeout(afterModalIsHidden, TRANSITION_TIME);
        }
    }


    function afterModalIsShown() {
        //without focusing the main modal element, esc event doesn't work.
        //so when it is shown, lets focus the element
        if (shown.value) {
            modal.value?.focus();
        }

        classStates.modalShow = true;
        emit("shown", true);
        emit('update:modelValue', true);
    }

    function afterModalIsHidden() {
        //MODAL HIDDEN: after transition completed, hide the modal which takes TRANSITION_TIME ms.
        classStates.modalStyle["display"] = "none";
        //add hiding transition to backdrop
        classStates.backdropShow = false;

        //after backdrop hiding transition, it can be removed
        setTimeout(() => {
            //Backdrop Hidden:
            showBackdrop.value = false;
            emit("hidden", true);
            emit('update:modelValue', false);
            isMountable.value = false;
            //@ts-ignore
            mayBeTriEl.value?.focus();
            //release memory: last focused element is no longer needed to be tracked
            mayBeTriEl.value = null;
        }, TRANSITION_TIME);
    }

    function globalShowHandler(e: CustomEvent) {
        if (e.detail === props.id) {
            show();
        }
    }

//for hide from global scope
    /**
     * document.dispatchEvent(new CustomEvent('bv-modal::trigger-hide',{detail:'#modal_id'}))
     * @param e
     */
    function globalHideHandler(e: CustomEvent) {
        if (e.detail === props.id) {
            hide();
        }
    }

    onBeforeMount(() => {
        document.addEventListener(EVENT_TRIGGER_SHOW_NAME, globalShowHandler);
        document.addEventListener(EVENT_TRIGGER_HIDE_NAME, globalHideHandler);
    });

    onBeforeUnmount(() => {
        document.removeEventListener(EVENT_TRIGGER_SHOW_NAME, globalShowHandler);
        document.removeEventListener(EVENT_TRIGGER_HIDE_NAME, globalHideHandler);
    });


}


