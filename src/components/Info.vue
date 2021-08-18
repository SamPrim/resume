<template>
  <div class="p-4">
      <!-- Picture profile -->
      <div class="w-2/4 m-4 mx-auto overflow-hidden rounded-full">
          <img src="@/assets/avatar.jpeg" alt="">
      </div>
      <!-- Personal informations -->
      <div>
          <div class="flex items-center gap-3 mt-1">
              <font-awesome-icon icon="at" />
              <p>ndoprime@gmail.com</p>
          </div>
          <div class="flex items-center gap-3 mt-1">
              <font-awesome-icon icon="phone" />
              <p>+237 695043831</p>
          </div>
          <div class="flex items-center gap-3 mt-1">
              <font-awesome-icon icon="map-marker-alt" />
              <p>Cameroon, Yaounde</p>
          </div>
      </div>

      <!-- skills -->
      <div class="my-8">
          <div class="flex items-center gap-3 mt-1">
              <font-awesome-icon icon="award" size="lg" />
              <h2 class="text-xl font-bold">Skills</h2>
          </div>
          <ul class="list-disc list-inside">
              <li>fullstack django developer</li>
              <li>frontend developer VueJS / NuxtJs</li>
              <li>react native mobile developer</li>
          </ul>
      </div>

      <!-- Language -->
      <div class="my-8">
          <div class="flex items-center gap-3 mt-1">
              <font-awesome-icon icon="language" size="lg" />
              <h2 class="text-xl font-bold">Language</h2>
          </div>
          <ul class="list-disc list-inside">
              <li>English</li>
              <li>French</li>
          </ul>
      </div>

      <!-- User info -->
      <div class="my-8">
          <div class="flex items-center gap-3 mt-1">
              <font-awesome-icon icon="user" size="lg" />
              <h2 class="text-xl font-bold">Informations</h2>
          </div>
          <ul class="list-disc list-inside">
              <li>Name: NDO Samy Stephan</li>
              <li>birth date: 04/08/1994</li>
              <li>Country: Cameroon</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>