<template>
    <div class="page-wrapper">
        <main class="page-content page-auth">
            <slot></slot>
        </main>
        <footer class="page-mini-footer">
            <div class="copy-right bg-light py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mb-md-0 mb-4">
                            <div class="text-muted text-md-start text-center">کليه حقوق اين سايت متعلق به داریوش مهدی پور یقینی می‌باشد.
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="text-muted text-md-end text-center">Dmahdipour - 2026 © Copyright</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
    useHead({
        link:[{rel:"stylesheet", href:"/css/dependencies.css"}]
    })
</script>

<style>
</style>