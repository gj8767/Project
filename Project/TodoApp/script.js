let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener('click', function() {
    let list = document.createElement("li");
    list.innerText = inp.value;
    let debtn = document.createElement("button");
    debtn.innerText = 'delete';
    debtn.classList.add("delete");
    list.appendChild(debtn);
    ul.appendChild(list);
    inp.value = '';
    

});

ul.addEventListener('click', function(e) {
    if(e.target.nodeName == "BUTTON") {
        let item = e.target.parentElement;
        item.remove();
    }
});
