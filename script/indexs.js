// link ; - https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=YYWjySqQLYFxaPrnGhDRkXz7cIhI05PO8_l_UFW_Es0

const API = "YYWjySqQLYFxaPrnGhDRkXz7cIhI05PO8_l_UFW_Es0"
import { navbar } from "../component/navbar.js"

let n = document.getElementById("navbar");

n.innerHTML = navbar();

import { searchimages, append } from "./fetch.js"



let search = (e) => {

    let query = document.getElementById("query").value;

    if (e.key === "Enter") {
        searchimages(API, query).then((data) => {
            console.log(data)

            let container = document.getElementById("container")
            container.innerHTML = null
            append(data.results, container)
        })


    }
}

document.getElementById("query").addEventListener("keydown", search)

let categories = document.getElementById("categories").children



function csearch() {
    console.log(this.id);
    searchimages(API, this.id).then((data) => {
        console.log(data)

        let container = document.getElementById("container")
        container.innerHTML = null
        append(data.results, container)
    });

}

for (let el of categories) {
    el.addEventListener("click", csearch);
}
// let searchimages = async() => {

//     let query = document.getElementById("query").value;



//     try {

//         let res = await fetch(`https://api.unsplash.com/search/photos/?query=${query}}&per_page=20&client_id=${API}`)

//         let data = await res.json()

//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }