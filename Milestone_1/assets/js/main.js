const root = new Vue({
    el : "#root",

    data : {

        query: "",

        results:{

        },
    },

    methods : {

        search(){
            axios
            .get("https://api.themoviedb.org/3/search/movie?api_key=1bfdbda745d1e41948e58b036aa6ea62&query=" + this.query)
            .then(response => {
                this.results = (response.data.results);
                console.log(this.results);
            })
        }
    },
})