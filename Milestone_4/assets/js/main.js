const root = new Vue({
    el : "#root",

    data : {

        query: "",

        movieResults:null,

        tvResults:null,
        
    },

    methods : {

        search(){
            const movieQuery = axios.get("https://api.themoviedb.org/3/search/movie?api_key=1bfdbda745d1e41948e58b036aa6ea62&query=" + this.query)
            const tvQuery = axios.get("https://api.themoviedb.org/3/search/tv?api_key=1bfdbda745d1e41948e58b036aa6ea62&query=" + this.query)

            movieQuery.then(response =>{
                this.movieResults = (response.data.results);
                console.log(this.movieResults);
            })
            
            tvQuery.then(response =>{
                this.tvResults = (response.data.results);
                console.log(this.tvResults);
            })
        },

        fiveStarsVote(number) {
            const roundedNumber = Math.ceil(number);
            return Math.ceil(roundedNumber / 2);
        },

        getShortOverview(string) {
            const plot = string.substr(0 , 200)
            return plot + "..."
        }
    },
})







// hhhhhhhhhhhhhhhhhhhh
// axios.all([movieQuery, tvQuery])
// .then(axios.spread((...responses) => {
//     const movieResults = responses[0].data.results;
//     const tvResults = responses[1].data.results;

//     this.results = [...movieResults, ...tvResults];
// }))