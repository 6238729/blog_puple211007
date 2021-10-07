import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import '@fortawesome/fontawesome-free/js/all'

import 'primevue/resources/primevue.min.css';
// import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/saga-blue/theme.css';

import Menu from 'primevue/menu';
import MegaMenu from 'primevue/megamenu';
import Menubar from 'primevue/menubar';
import PanelMenu from 'primevue/panelmenu';
import TabMenu from 'primevue/tabmenu';
import TieredMenu from 'primevue/tieredmenu';
import ToggleButton from 'primevue/togglebutton';
import InputText from 'primevue/inputtext';

const app = createApp(App);

app.use(router, PrimeVue).mount('#app')

app.component('Menu', Menu);
// app.component('ContextMenu', ContextMenu);
app.component('MegaMenu', MegaMenu);
app.component('Menubar', Menubar);
app.component('PanelMenu', PanelMenu);
app.component('TabMenu', TabMenu);
app.component('TieredMenu', TieredMenu);
app.component('ToggleButton', ToggleButton);
app.component('InputText', InputText);