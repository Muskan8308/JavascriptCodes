let x = document.querySelector(".card");
let s = "";
let arr = ["https://i.pinimg.com/474x/00/9b/f3/009bf3acc306645251d0b91fd5855b12.jpg",
"https://i.pinimg.com/236x/96/54/db/9654db03cb568d0238647429cb59c7d6.jpg",
"https://i.pinimg.com/236x/45/3b/ea/453bea22cc739b7d861ce1128f86f7f2.jpg",
"https://i.pinimg.com/236x/c6/33/31/c63331aca6f74ef0d2f4e23b96419dc1.jpg",
"https://i.pinimg.com/236x/3b/32/4b/3b324be37806558aa32709a98be8c9ec.jpg",
"https://i.pinimg.com/236x/5a/a7/98/5aa79858ac3e44b32bdb4d7e5abfb57b.jpg",
"https://i.pinimg.com/474x/ec/d9/5d/ecd95d50e4a994ada5b1eebb617f97ff.jpg"]

for(let i = 0; i < 27; i++)
{
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class = "card" ><img src = ${arr[r]}></div>`;
}

main.innerHTML = s;


