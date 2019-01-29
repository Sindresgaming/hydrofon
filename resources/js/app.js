import Events from './modules/events';

import flashMessages from './modules/flashMessages';
import impersonation from './modules/impersonation';

const app = new Vue({
    el: '#app',

    data: {
        categories: [],
        resources: [],
        bookings: []
    },

    computed: {
        selectedResources: function() {
            return this.resources.filter(resources => resources.selected)
        }
    },

    methods: {
        fetchData: function() {
            this.categories = window.HYDROFON.categories || [];
            this.resources = window.HYDROFON.resources || [];
            this.bookings = [];

            this.categories.forEach(category => category.expanded = false);
        }
    },

    components: {
        'resourcelist-root': require('./components/ResourceList').default,
    },

    created: function() {
        this.fetchData();

        Events.$on('resources-selected', event => {
            // Find index of updated booking.
            let index = this.resources.findIndex(function(stored) {
                return stored.id === event.id;
            });

            // Replace object with copy of object with new status.
            this.$set(this.resources, index, Object.assign(this.resources[index], {
                selected: event.selected
            }));
        });
    }
});