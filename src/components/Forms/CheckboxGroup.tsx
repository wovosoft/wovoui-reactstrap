/*
<template>
    <div role="group">
        <Checkbox
            v-for="(option,option_key) in options"
            :key="option_key"
            :inline="inline"
            :switch="$props.switch"
            :reverse="reverse"
            :disabled="option.disabled===true"
            @update:modelValue="v=>$emit('update:modelValue',v)"
            :value="valueField?option[valueField]:option">
            {{ textField ? option[textField] : option }}
        </Checkbox>
    </div>
</template>
 */

import {CheckboxGroupProps} from "./index";
import Checkbox from "./Checkbox";
import {Key} from "react";

export default function CheckboxGroup(
    {
        options = [],
        textField = 'text',
        valueField = 'value',
        inline = false,
        isSwitch = false,
        reverse = false
    }: CheckboxGroupProps
) {
    const getEntity = (op: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }, field?: string) => {
        if (typeof op === "object" && !Array.isArray(op)) {
            if (field && op.hasOwnProperty(field)) {
                return op[field];
            }
        }
        return JSON.stringify(op);
    }
    return (
        <div>
            {
                options.map((op: any, op_key: Key | null | undefined) => (
                    <Checkbox key={op_key}>
                        {getEntity(op, textField)}
                    </Checkbox>
                ))
            }
        </div>
    )
}