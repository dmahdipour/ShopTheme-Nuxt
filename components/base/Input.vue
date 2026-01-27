<template>
    <div>
      <div class="form-element-row">
        <label class="label fs-7"> {{ label }} </label>
        <input 
            :type="type"
            :name="name"
            :value="modelValue"
            :placeholder="placeholder"
            :class="['form-control',{'error-input': errorMessage}]"
            @input="handleInputChange" />
      </div>
      <span v-if="errorMessage && !ignoreErrorMessage" class="text-danger"> {{ errorMessage }} </span>
    </div>
</template>

<script setup lang="ts">
    import {useField} from 'vee-validate'

    const props = defineProps({
        type:{
            default: 'text',
            type: String
        },
        name: {
            required: true,
            type: String
        },
        modelValue:{
            default:"",
        },
        label:{
            default:"",
            type: String
        },
        placeholder:{
            default:"",
            type: String
        },
        ignoreErrorMessage:{
            default: false,
            type: Boolean
        },
    });

    const {errorMessage, value: inputValue, handleChange, setValue}=useField(props.name, undefined, {
        initialValue: props.modelValue
    })

    const emit = defineEmits(['update:modelValue'])

    watch(
        () => props.modelValue,
        (val) => {
            setValue(val);
        }
    )

    const handleInputChange = (e: any) => {
        emit("update:modelValue", e.target.value);
        handleInputChange(e);
    }
</script>