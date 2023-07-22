<script setup>
    import { getToday } from '../constans/export'
    const props = defineProps({
        weatherInfo: {
            type: String,
            required: true
          }
    })
</script>

<template>
    <div 
        v-if="weatherInfo"
        class="summary"
    >
        <div
            :style="`background-image: url('/weather-main/${weatherInfo?.weather[0].description}.png');`"
            class="pic-main"
        ></div>
        <div class="weather">
            <div class="temp">
                {{ Math.round(weatherInfo?.main?.temp) }} °C
            </div>
            <div class="weather-desc text-block">
                {{ weatherInfo?.weather[0].main }}
            </div>
        </div>
        <div class="city text-block">
            {{ weatherInfo?.name }},
            {{ weatherInfo?.sys?.country }}
        </div>
        <div class="date text-block">
            {{ getToday() }}
        </div>
    </div>
</template>

<style lang="sass" scoped>
    @import '../assets/styles/main'
</style>