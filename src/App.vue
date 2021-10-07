<template>
	<div>
<!-- <div :class="containerClass" @click="onWrapperClick"> -->
        <div>
        <EblogTopBar/>
		<!-- @menu-toggle="onMenuToggle" /> -->
          <Sidebar />
          <div :style="{ 'margin-left': sidebarWidth }">
            <router-view />
          </div>
            <!-- <EblogFooter /> -->
        </div>
	</div>
</template>

<script>
import EblogTopBar from './components/Elfinos1Topbar.vue';
import Sidebar from './components/Elfinos2Sidebar.vue';
import { sidebarWidth } from './components/state'

export default {
    components: { 
        EblogTopBar,
        Sidebar 
    },

    setup() {
      return { sidebarWidth }
    }
   

}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
