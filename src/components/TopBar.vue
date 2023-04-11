<script setup lang="ts">
import { ref,onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

import { useDark, useToggle } from '@vueuse/core';

const darkMode = useDark();
const toggleDark = useToggle(darkMode);
const router = useRouter()
const isMobile = ref(false);
const isTablet = ref(false);
const isDesktop = ref(false);
const menuVisible = ref(false);

const barMargin = computed(()=>{return (isDesktop.value===true)?"bigM":"ml-4";}) 
function openMenu(){
  menuVisible.value = true
  console.log("menu is visible")
}

    onMounted(() => {

    });
</script>

<template>
     <div class="pt-4">
    <v-toolbar
      dark
      height="70"
      color="transparent"
    >
    <v-btn icon @click="openMenu" size="large">
    <font-awesome-icon  icon="fa-solid fa-bars"
     class="font-bold text-slate-50 text-4xl ml-6 lg:ml-1  mr-9 bigM" /> 
    </v-btn>   
      <div class="text-4xl font-bold text-white ">A S E I M C</div>

      <v-spacer></v-spacer>

      <v-btn size="large" @click="toggleDark()" icon>
        <font-awesome-icon class="text-3xl text-slate-50"
         icon="fa-solid fa-circle-half-stroke" />      </v-btn>
    </v-toolbar>
  </div>
  <v-dialog v-model="menuVisible"
        transition="dialog-bottom-transition"
        width="300"
      >
      <v-card class="bg-slate-50 dark:bg-slate-800">

          <p class="bg-slate-50 dark:bg-slate-800 text-2xl pt-4
          font-bold text-center mx-4 text-slate-900 dark:text-slate-50">
            Menu</p>
           <ul class="menux">
            <li v-on:click="{router.push('/'); menuVisible=false}" class="menu-item">
              <span><font-awesome-icon class="mr-2" icon="fa-solid fa-home" bounce /></span> Home
            </li> 

            <li v-on:click="{router.push('/categories'); menuVisible=false}" class="menu-item">
              <span ><font-awesome-icon class="mr-2" icon="fa-solid fa-puzzle-piece" bounce /></span> Categories
            </li>
            <li v-on:click="{router.push('/all'); menuVisible=false}" class="menu-item">
              <span><font-awesome-icon class="mr-2" icon="fa-solid fa-book" bounce /></span> All articles</li>
            <li class="menu-item" v-on:click="{router.push('/search'); menuVisible=false}">
              <span><font-awesome-icon class="mr-2" icon="fa-solid fa-magnifying-glass" bounce /></span> Search </li>
            <li class="menu-item" v-on:click="{router.push('/login'); menuVisible=false}">
              <span><font-awesome-icon class="mr-2" icon="fa-solid fa-blog" bounce /></span> Post an article</li>
           </ul>


            
          </v-card>
     
      </v-dialog>

</template>

<style scoped>
    .bigM{
        margin-left: 3%;
    }

    @media screen and (max-width: 850px) {
        .bigM{
        margin-left: 3%;
    }
    }

    .menux{
      @apply mb-4 mt-2 text-slate-900 dark:text-slate-50
    }
    .menu-item{
  @apply mx-5 font-bold text-lg  my-4 border-b-2 
    }
</style>
