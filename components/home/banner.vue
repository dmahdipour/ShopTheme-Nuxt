<template>
    <div v-if="filterdBanners.length>0">
        <div class="row mb-3 d-sm-block d-none" v-if="position===BannerPosition.SliderTop">
            <div class="col-12">
                <div class="banner-img" style="width: 100%;">
                    <a :href="filterdBanners[0]?.link" target="_blank">
                        <base-image :src="GetBannerImage(filterdBanners[0].imageName)" alt="banner"></base-image>
                    </a>
                </div>
            </div>
        </div>
        <div class="row" v-else-if="position===BannerPosition.SliderLeft">
            <div class="col-lg-12 col-6 mb-lg-3" v-for="item in filterdBanners.slice(0,2)">
                <div class="banner-img banner-side-main-slider bg-position-right">
                    <a :href="item.link"
                        :style="{'background-image': `url(${GetBannerImage(filterdBanners[0].imageName)})`, height:'220px'}">
                        <base-image :src="GetBannerImage(filterdBanners[0].imageName)" alt="banner"></base-image>
                    </a>
                </div>
            </div>
        </div>
        <div v-else-if="position===BannerPosition.SliderBelove">
            <div class="col-md-6 mb-lg-0 mb-3">
                <div class="banner-img" v-for="item in filterdBanners.slice(0,2)">
                    <a :href="item.link">
                        <base-image :src="GetBannerImage(filterdBanners[0].imageName)" alt="banner"></base-image>
                    </a>
                </div>
            </div>
        </div>
        <div v-else-if="position===BannerPosition.PageMiddle">
            <div class="col-md-3 col-6 mb-lg-0 mb-3" v-for="item in filterdBanners.slice(0,4)">
                <div class="banner-img">
                    <a :href="item.link">
                        <base-image :src="GetBannerImage(filterdBanners[0].imageName)" alt="banner"></base-image>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { BannerDto } from '~/models/home/homeDataDto';
    import { BannerPosition } from '~/models/home/homeDataDto';
    import { GetBannerImage } from '~/utilities/ImageUrls';

    const props = defineProps<{
        banners:BannerDto[],
        position:BannerPosition
    }>();

    const filterdBanners = props.banners.filter(f=>f.position == props.position)
</script>