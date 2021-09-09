var main1 = document.getElementById("main1");
var main2 = document.getElementById("main2");
var topButton = document.getElementById("top-button");
var subButton = document.getElementById("sub-button");
var entryBtn = document.getElementById("entry-btn");
var entry = document.getElementById("entry");
var cancelBtn = document.getElementById("cancel-btn");


subButton.onclick = function () {
    main1.classList.add("visi");
    main2.classList.remove("visi");
    subButton.classList.add("white");
    subButton.classList.remove("inner-shadow");
    subButton.classList.remove("gray");
    topButton.classList.remove("white");
    topButton.classList.add("gray");
    topButton.classList.add("inner-shadow");
}

topButton.onclick = function () {
    main1.classList.remove("visi");
    main2.classList.add("visi");
    subButton.classList.remove("white");
    subButton.classList.add("inner-shadow");
    subButton.classList.add("gray");
    topButton.classList.add("white");
    topButton.classList.remove("gray");
    topButton.classList.remove("inner-shadow");
}
entryBtn.onclick = function () {
    entry.classList.toggle("visi");
    cancelBtn.classList.toggle("visi");
}
cancelBtn.onclick = function () {
    
    entry.classList.toggle("visi");
    cancelBtn.classList.toggle("visi");
}