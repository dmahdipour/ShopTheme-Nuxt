<template>
    <div class="auth-container">
        <Head>
            <Title>ورود به حساب</Title>
        </Head>
        <div class="auth-title mb-3">ورود به حساب</div>
        <div class="auth-box ui-box">
            <Form @submit="login" :validation-schema="loginSchema" class="auth-form" v-slot="{ meta }">
                <BaseInput 
                    name="phoneNumber" 
                    class="mb-3" 
                    label="شماره موبایل" 
                    placeholder="شماره موبایل خود را وارد کنید"
                    v-model="loginData.phoneNumber"
                ></BaseInput>
                <BaseInput 
                    type="password"
                    name="password" 
                    class="mb-3" 
                    label="کلمه عبور" 
                    placeholder="کلمه عبور خود را وارد کنید"
                    v-model="loginData.password"
                ></BaseInput>
                <BaseButton
                    size='sm'
                    w-full
                    :disabled="!meta.valid"
                    class="mb-3"
                    :loading="loading"
                >ورود به حساب کاربری</BaseButton>
                <div class="text-center">
                    حساب کاربری ندارید؟
                    <nuxt-link to="/auth/register">ثبت نام در سایت</nuxt-link>
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
    import { useRouter } from 'vue-router';
    import * as Yup from 'yup'
    import { ref, reactive } from 'vue';
    import type { LoginDTo } from '~/models/auth/loginDTo';
    import { LoginUser } from '~/services/auth.service';
    import { useAuthStore } from "~/stores/auhStore";

    definePageMeta({
        layout: "auth",
    })

    const authStore = useAuthStore();
    const router = useRouter()
    
    const loginSchema = Yup.object().shape({
        phoneNumber : Yup.string().required().min(11, 'شماره موبایل نامعتبر است').max(11, 'شماره موبایل نامعتبر است'),
        password: Yup.string().required().min(8, 'کلمه عبور باید حداقل ۸ کاراکتر باشد.'),
    })

    const loading = ref(false)

    const loginData: LoginDTo = reactive({
        phoneNumber: "",
        password: "",
    })
    
    const login = async(data:any, formEvent:any) => {
        loading.value = true;
        var result = await LoginUser(loginData)
        loading.value = false
        if (result.isSuccess) {
            localStorage.setItem("auth-data", JSON.stringify(result.data));
            authStore.SetCurrentUserValue();
            var returnTo = router.currentRoute.value.query.returnTo?.toString();
            if (returnTo) {
            await router.push(returnTo);
            } else {
            await router.push("/");
            }
        } else {
            formEvent.setFieldError(
            "phoneNumber",
            "کاربری با مشخصات وارد شده یافت نشد"
            );
        }
    }
</script>

<style>

</style>