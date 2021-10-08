<template>
    <div class="card">
		<div class="">
		<h1>This is a board1 page</h1>
		</div>
        <DataView 
		:value="carDataCheck" 
		:paginator="true" 
		:rows="5" >
			<template #header>
                <div class="p-grid p-nogutter">
                    <div class="p-col-6" style="text-align: left">
                    </div>
                </div>
			</template>

			<!-- 리스트로 보기 -->
			<template  #list="listview">
				<div><b>{{listview.data.category}}</b></div>
				<div class="p-col-12">
					<div class="product-list-item">
						<div class="product-list-detail">
							<div class="product-name">{{listview.data.id}}</div>
							<div class="product-description">{{listview.data.date}}</div>							
							<i class="pi pi-tag product-category-icon"></i><span class="product-category">{{listview.data.description}}</span>
						</div>
						<div class="product-list-action">
							<span class="product-price">{{listview.data.title}}</span>
						</div>
					</div>
				</div>
			</template>
		</DataView>
	</div>
</template>

<script>
import { onMounted } from "vue";
import DataView from 'primevue/dataview';
import carData from '../../public/cars.json';

export default {
	components: {
        DataView		
    },

	setup() {		
        onMounted(() => {
			console.log(carDataCheck)
        })
		const carDataCheck = carData.data;
			return {
				carDataCheck
				
			}
		},


}
</script>

<style lang="scss" scoped>
.card {
    background: #ffffff;
    padding: 2rem;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-bottom: 2rem;
}
.p-dropdown {
    width: 14rem;
    font-weight: normal;
}

.product-name {
	font-size: 1.5rem;
	font-weight: 700;
}

.product-description {
	margin: 0 0 1rem 0;
}

.product-category-icon {
	vertical-align: middle;
	margin-right: .5rem;
}

.product-category {
	font-weight: 600;
	vertical-align: middle;
}


::v-deep(.product-list-item) {
	display: flex;
	align-items: center;
	padding: 1rem;
	width: 100%;

	img {
		width: 50px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		margin-right: 2rem;
	}

	.product-list-detail {
		flex: 1 1 0;
	}

	.p-rating {
		margin: 0 0 .5rem 0;
	}

	.product-price {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: .5rem;
		align-self: flex-end;
	}

	.product-list-action {
		display: flex;
		flex-direction: column;
	}

	.p-button {
		margin-bottom: .5rem;
	}
}
</style>