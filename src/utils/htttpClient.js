const API = "https://api.themoviedb.org/3"

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWI1Mjc2MWQzYzVmYjcwZDg0Y2FhNjhjNzU1OWYwNiIsInN1YiI6IjYyODdjMTEwMWYzZTYwMDA1MmU3Y2MyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VUqObJHLiZxHcmFmD4tpbxtM0V8tFC5DdsXpe9A_vko",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json())
}