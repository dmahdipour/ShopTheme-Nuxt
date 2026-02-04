<template>
    <div class="auth-container">
        <Head>
            <Title>ثبت نام در سایت</Title>
        </Head>
        <div class="auth-title mb-3">ثبت نام در سایت</div>
        <div class="auth-box ui-box">
            <Form @submit="register" :validation-schema="registerSchema" class="auth-form" v-slot="{meta}">
                <BaseInput
                    name="phoneNumber"
                    class="mb-3"
                    label="شماره موبایل"
                    placeholder="شماره موبایل خود را وارد کنید"
                    v-model="registerData.phoneNumber"
                ></BaseInput>
                <BaseInput
                    name="password"
                    type="password"
                    class="mb-3"
                    label="کلمه عبور"
                    placeholder="کلمه عبور خود را وارد کنید"
                    v-model="registerData.password"
                ></BaseInput>
                <BaseInput
                    name="confirmPassword"
                    type="password"
                    class="mb-3"
                    label="تکرار کلمه عبور"
                    placeholder="تکرار کلمه عبور خود را وارد کنید"
                    v-model="registerData.confirmPassword"
                ></BaseInput>
                <BaseButton
                    size='sm'
                    w-full
                    :disabled="!meta.valid || loading"
                    class="mb-3"
                    :loading="loading"
                >ثبت نام در سایت</BaseButton>

                <div class="text-center">
                    قبلا ثبت نام کردید؟
                    <nuxt-link to="/auth/login">ورود به حساب</nuxt-link>
                </div>
                <div class="form-element-row">
                    <hr>
                    <div>با ورود و یا ثبت نام در سایت شما <a href="#" class="link">شرایط و
                            قوانین</a> استفاده
                        از تمام سرویس های
                        سایت و <a href="#" class="link">قوانین حریم خصوصی</a> آن را می‌پذیرید.
                    </div>
                </div>
            </Form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Form } from 'vee-validate';
    import type { RegisterCommandDTo } from '~/models/auth/registerDTo';
    import { RegisterUser } from '~/services/auth.service';
    import * as Yup from 'yup';

    definePageMeta({
        layout: "auth",
    })

    const router = useRouter()

    const loading = ref(false);

    const registerSchema = Yup.object().shape({
        phoneNumber: Yup.string().required().min(11, 'شماره موبایل نامعتبر است').max(11, 'شماره موبایل نامعتبر است'),
        password: Yup.string().required().min(8, 'کلمه عبور باید حداقل ۸ کاراکتر باشد.'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'کلمه های عبور یکسان نیستند')
    })

    const registerData: RegisterCommandDTo = reactive({
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    })
    
    const register = async() => {
        loading.value = true;
        var result = await RegisterUser(registerData)
        loading.value = false
        if (result.isSuccess) {
            router.push("/auth/login")
            // Toast
        }
        else{
            // Toast
            alert(result.metaData.message)
        }
    }
</script>

<style>

</style>