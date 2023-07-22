<script setup>
  import { ref, onMounted, onBeforeMount } from 'vue'
  import { API_KEY, API_URL } from './constans/api-key'
  import WeatherSummary from './components/WeatherSummary.vue'
  import Highlights from './components/Highlights.vue'
  import Coordinates from './components/Coordinates.vue'
  import Humidity from './components/Humidity.vue'

  const city = ref('London')  //ref превращает в объект со свойством value, city.value = 'London'
  let weatherInfo = ref(null)

  async function getCityInfo() {
    let response = await fetch(`${API_URL}?q=${city.value}&units=metric&appid=${API_KEY}`);

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      
      let json = await response.json();
      console.log(json)
      weatherInfo.value = json
      console.log(weatherInfo.value)
    } else {
      alert('Название города введено не верно!')
      console.log("Ошибка HTTP: " + response.status);
    }
  }
  
  onBeforeMount(getCityInfo)
</script>

<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <section class="section section-left">
              <div class="info">
                <div class="city-inner">
                  <input 
                    v-model="city" 
                    type="text" 
                    class="search"
                    @keyup.enter="getCityInfo"
                  >
                </div>
                <p>Enter city name and click Enter button</p>
                <WeatherSummary :weatherInfo="weatherInfo" />
              </div>
            </section>
            <section class="section section-right">
              <Highlights :weatherInfo="weatherInfo" />
            </section> 
          </div>
          <div class="sections">
            <section class="section-bottom">
              <Coordinates :weatherInfo="weatherInfo" />
            </section>
            <section class="section-bottom">
              <Humidity :weatherInfo="weatherInfo" />
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="sass" scoped>
  @import './assets/styles/main'
</style>
