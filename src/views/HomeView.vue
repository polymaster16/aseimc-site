<script setup lang="ts">
import { ref } from 'vue';
import logo from '../assets/logoAseimc.png'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s5.jpg'
import s6 from '../assets/s6.jpg'
import s7 from '../assets/s7.jpg'
import s8 from '../assets/s8.jpg'







import TopBar from '@/components/TopBar.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import BottomMediaIconst from '@/components/BottomMediaIconst.vue';

const slides = ref([
{
  id: '1',  
  link: logo,
},
{
  id: '2', 
  link: 'https://aseimc.org/wp-content/uploads/2022/10/IMG-20221007-WA0040.jpg '
},

{
  id: '3',  
  link: s2,
},
{
  id: '4',  
  link: s4,
},
{
  id: '5',  
  link: s5,
},
{
  id: '6',  
  link: s6,
},
{
  id: '7',  
  link: s7,
},
{
  id: '8',  
  link: s8,
},

])
</script>

<template>
<div class="img1">
  <div class="shade1">
    <div class="lg:mx-8">
<TopBar></TopBar>
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 justify-start mx-9">
  <div>
<carousel dir="rtl" :transition="500"  :autoplay="2000" v-bind:wrap-around="true">
    <slide v-for="x in slides" :key="x.id">
      <img class="circularLogo" :src="x.link">
    </slide>
  </carousel>
</div>

<div class="heroText">
  Association de Soutient aux enfants infirme moteurs cérébraux
</div>
</div>

<div class="centree mt-7 scara">
<v-btn size="x-large" rounded="pill" color="blue-darken-1"><strong> Nous Rejoindre</strong></v-btn>
</div>
</div>
</div>


<div class="grid lg:grid-cols-3 mx-8 lg:mx-14 my-8">
  <v-hover
        v-slot="{ isHovering, props }"
        close-delay="200"
      >
<v-card color="blue-lighten-5" rounded="large" 
 :elevation="isHovering ? 16 : 2"   v-bind="props"
          :class="{ 'on-hover': isHovering }" >
 <div class="text-2xl font-bold text-center mb-4 mt-5">A propos de nous</div>
  <img class="img2"
  src="https://cdn.pixabay.com/photo/2017/10/13/05/45/sunrise-2846882_960_720.jpg">

  <div class="centree mt-7 mb-8">
  <v-btn  color="red-lighten-1" rounded="pill"><strong>Voir Plus</strong> </v-btn>
</div>
</v-card>
  </v-hover>

  <v-hover
        v-slot="{ isHovering, props }"
        close-delay="200"
      >
<v-card :elevation="isHovering ? 16 : 2"   v-bind="props"
          :class="{ 'on-hover': isHovering }"
 color="blue-lighten-5" rounded="large">
 <div class="text-2xl font-bold text-center mb-4 mt-5">Nos Activités</div>
  <img class="img2"
  src="https://cdn.pixabay.com/photo/2016/03/27/21/55/girls-1284419_960_720.jpg">

  <div class="centree mt-7 mb-8">
  <v-btn  color="red-lighten-1" rounded="pill"><strong>Voir Plus</strong> </v-btn>
</div>
</v-card></v-hover>

<v-hover 
        v-slot="{ isHovering, props }"
        close-delay="200"
      >
<v-card :elevation="isHovering ? 16 : 2"   v-bind="props"
          :class="{ 'on-hover': isHovering }"
color="blue-lighten-5" rounded="large" >
 <div class="text-2xl font-bold text-center mb-4 mt-5">Nos Partenaires</div>
  <img class="img2"
  src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_960_720.jpg">

  <div class="centree mt-7 mb-8">
  <v-btn  color="red-lighten-1" rounded="pill"><strong>Voir Plus</strong> </v-btn>
</div>
</v-card></v-hover>
</div>

<div class="mt-14 text-4xl font-bold text-center">
  A Propos de nous
</div>

<div class="text-2xl font-bold text-left ml-4 mt-4 ">1- Qui sommes nous?</div>
<p class="text-xl text-left mx-4 mb-5">
  Une association camerounaise apolitique et a but non lucratif. Nous sommes spécialisée dans la paralysie cérébrale
</p>

<div class="text-2xl font-bold text-left ml-4 mt-4 ">2- Nos Objectifs!</div>
<p class="text-xl text-left mx-4 mb-5">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Suspendisse lobortis nisl et augue maximus lobortis.
    Pellentesque convallis nisl nulla, sit amet vestibulum 
    odio laoreet ac. Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit. Vestibulum ac ante dolor. Pellentesque a 
    libero sit amet massa interdum blandit nec ut mi. Morbi elementum
     ornare dui, ut ultrices leo dignissim sed. Vestibulum fringilla 
     tellus ante, viverra pretium arcu sodales nec. Aliquam pretium 
     orci nec nunc euismod gravida. Sed aliquet tempor nibh, in elementum 
     arcu consequat sed.


</p>

<div class="mt-9 mb-4">
  <BottomMediaIconst/>
</div>
</template>

<style scoped>
.heroText{
@apply flex flex-col justify-center text-3xl lg:text-6xl text-white font-bold text-center lg:text-left 
}

.circularLogo{
  width:350px;
  height:350px;
  margin-left: auto;
    margin-right: auto;
    margin-bottom: 4%;
  object-fit:cover;
  border-radius:50%;
  @apply mt-6 mb-7
}

.img1{
 width: auto ;
 height: 700px;
  background-image: url('../assets/aseimcLanding.jpg');
  background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow: hidden;
}

.img2{
  width:150px;
  height:150px;
  margin-left: auto;
    margin-right: auto;
  object-fit:cover;
  border-radius:50%;
  
}

.scara{
  animation: scara 2s ease-in-out infinite;
}

@keyframes scara{
from{
  transform: scale(01);
}
50%{
  transform: scale(1.2);
}
to{
  transform: scale(01);
}

}
@media (max-width:840px){
  .img1{
 width: auto ;
 height: 750px;
 background-image: url('../assets/aseimcLanding.jpg');
  background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow: hidden;
}

.circularLogo{
  width:250px;
  height:250px;
  margin-left: auto;
    margin-right: auto;
    margin-bottom: 4%;
  object-fit:cover;
  border-radius:50%;
  
}
}


</style>