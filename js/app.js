// The link to the

restURL = "http://d8.dev/api/movies_list"

new Vue({
    el: '#app',

    ready: function(){
        this.fetchMovies();
    },

    methods: {
        fetchMovies: function(){
            this.$http.get(restURL, function(movies){
                this.$set('movies', movies);
            });
        }
    }
})
