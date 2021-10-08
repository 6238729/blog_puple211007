<template>
	<div>
<!-- <div :class="containerClass" @click="onWrapperClick"> -->
        <div>
        <EblogTopBar/>
		<!-- @menu-toggle="onMenuToggle" /> -->
        <div class="layout-main-container">
          <div class="layout-main">
          <Sidebar />
          <div :style="{ 'margin-left': sidebarWidth }">
            <router-view />
          </div>
          </div>
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
.layout-main-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    padding: 7rem 2rem 2rem 4rem;
    /* transition: margin-left $transitionDuration; */
    background-color: #f3eff9;
}

.layout-main {
    flex: 1 1 auto;
}

</style>
