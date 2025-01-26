const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear;

import { ghost } from "./Index.js";

document.getElementById("getIt").replaceAll("null",ghost);


/* document.querySelector(".btn").addEventListener('click', (event) => {
    document.getElementById("getIt").replaceWith(call);
}) */ 