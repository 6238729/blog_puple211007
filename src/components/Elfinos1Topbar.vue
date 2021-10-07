<template>
	<!-- <div class="layout-topbar">
        <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="p-mr-2">
		<router-link to="/" class="layout-topbar-logo"/>
			<span>Blog</span>
		<button class="p-link layout-menu-button layout-topbar-button">  -->
            <!-- @click="onMenuToggle"> -->
		<!-- <i class="pi pi-bars"></i>
		</button>
        <router-link to="/about">About</router-link>
		<button class="">
		<i class="pi pi-ellipsis-v"></i>
		</button>

		<ul class="layout-topbar-menu hidden lg:flex origin-top">
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-cog"></i>
					<span>About</span>
                    <router-link to="/about" />
				</button>
			</li>
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-user"></i>
					<span>Profile</span>
                    <router-link to="/" />
				</button>
			</li>
		</ul>
	</div> -->
    <div>
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="p-mr-2">
            </template>
            <template #end>
                <InputText placeholder="Search" type="text" />
            </template>
        </Menubar>
    </div>

</template>




<script>
import { ref } from 'vue';
import Menubar from 'primevue/menubar';

export default {
    components: {
        Menubar
    },
    setup() {
        const items = ref([
            {
               label:'About',
               icon:'pi pi-fw pi-file',
               to : '/about'
               
            },
            {
               label:'Menu2',
               icon:'pi pi-fw pi-user',
               items:[
                    {
                        label:'New',
                        icon:'pi pi-fw pi-user-plus',
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-user-minus',
                    },
                    {
                        label:'Search',
                        icon:'pi pi-fw pi-users',
                        items:[
                            {
                                label:'Filter',
                                icon:'pi pi-fw pi-filter',
                                items:[
                                    {
                                        label:'Print',
                                        icon:'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon:'pi pi-fw pi-bars',
                                label:'List'
                            }
                        ]
                    }
                ]
            },
            {
               label:'Menu3',
               icon:'pi pi-fw pi-power-off'
            }
        ]);

        return { items }
    }
}
</script>

<style lang="scss" scoped>

</style>