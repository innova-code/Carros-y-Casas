const product = new Vue({
	el: '#products-content',
	data: {
		gridOrList: 'Grid View',
		view: false,
	},
	computed: {
		gridOrList2 () {
			if (this.gridOrList === "List View") {
				return 'list-view'
			} else {
				return 'grid-view'
			}
		},
		listView() {
			if (this.gridOrList === "List View") {
				return true
			}
		}
	}
})