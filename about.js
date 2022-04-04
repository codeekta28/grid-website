console.log("This is about.js")
let Data = [
    {
        name:"Ekta Mishra",
        Age:32,
        City:"Bangalore",
        Field:"Web-Development",
        Image:"https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
        name:"Abhishek Mishra",
        Age:34,
        City:"Khajuraho",
        Field:"Business-Management",
        Image:"https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name:"Kushagra Mishra",
        Age:32,
        City:"Bangalore",
        Field:"PHP Developer",
        Image:"https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
        name:"Nishi Mishra",
        Age:32,
        City:"Khajuraho",
        Field:"Team Planner",
        Image:"https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        name:"Pooja Singh",
        Age:32,
        City:"Gurgaon",
        Field:"Finance-Management",
        Image:"https://randomuser.me/api/portraits/women/55.jpg"
    },
    {
        name:"Gaurav Rana",
        Age:32,
        City:"Gurgaon",
        Field:"Software Developer",
        Image:"https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
        name:"Khushi Mishra",
        Age:22,
        City:"Khajuraho",
        Field:"Creative Designer",
        Image:"https://randomuser.me/api/portraits/women/35.jpg"
    },
    {
        name:"sunita Mishra",
        Age:42,
        City:"Lucknow",
        Field:"Planner",
        Image:"https://randomuser.me/api/portraits/women/25.jpg"
    },
    {
        name:"Kunwar Mishra",
        Age:52,
        City:"Bangalore",
        Field:"Team Leader",
        Image:"https://randomuser.me/api/portraits/men/25.jpg"
    }
]
// Iterator starts here
function employes(profiles){
    let index = 0;
    return{
        next:function(){
            return index<profiles.length?
            {value:profiles[index++],done:false}:
            {done:true}
        }
    };
}
let totalEmployes = employes(Data);
// console.log(currentEmployee.next());
nextstaff();
let next = document.getElementById("next");
next.addEventListener("click",nextstaff);

function nextstaff(){
console.log("next button clicked")
let currentEmploye = totalEmployes.next().value;
if(currentEmploye!=undefined){
let image = document.getElementById('image');
image.innerHTML = `<img src='${currentEmploye.Image}'>`;
let profile = document.getElementById("profile");
profile.innerHTML=`<ul class="list-group" id="employeeUL">
<li class="list-group-item employeeli">Name : ${currentEmploye.name}</li>
<li class="list-group-item employeeli">${currentEmploye.Age} years old</li>
<li class="list-group-item employeeli">Lives In : ${currentEmploye.City}</li>
<li class="list-group-item employeeli">Works As : ${currentEmploye.Field}</li>
</ul>`;
}
else{
    alert("End Of Our Precious Staff");
    window.location.reload();
}

}