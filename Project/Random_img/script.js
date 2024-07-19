let card = document.getElementById("box");
let arr = 
[ "https://i.pinimg.com/236x/d5/f3/6e/d5f36ea5b60cda3882845711a8d5755e.jpg",
  "https://i.pinimg.com/736x/4a/c4/58/4ac458b8bc53756a40af5c1c947e4a5d.jpg",
  "https://i.pinimg.com/236x/65/b5/3d/65b53dd2bf30d0ba33cf055e021c2445.jpg",
  "https://i.pinimg.com/474x/be/20/c3/be20c3d591cc26bcfd9bc46b4bc74fbd.jpg",
  "https://i.pinimg.com/564x/93/1c/a7/931ca788202bd33f9b5cdede6bb35ecc.jpg"
    
];
let s = "";
for(let i = 1; i <= 120; i++) {
    let r = Math.floor(Math.random()*5);
    s += `<div class="card"><img src=${arr[r]}></div>`;
}
card.innerHTML = s;