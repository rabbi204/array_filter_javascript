let users = [
    {
        name    : 'Asraful Haque',
        age     : 34,
        gender  : 'Male',
        location: 'Banani',
        cell    : '01729673492',
        photo   : '1.jpg',
        job     : 'Full Stack Developer',
        email   : 'asraful@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },{
        name    : 'Sarwar Jahan Sohan',
        age     : 27,
        gender  : 'Male',
        location: 'Uttara',
        cell    : '01724474492',
        photo   : '2.jpg',
        job     : 'Laravel Developer',
        email   : 'sohan@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },{
        name    : 'Mohsina Akter',
        age     : 30,
        gender  : 'Female',
        location: 'Banani',
        cell    : '01725473492',
        photo   : '3.jpg',
        job     : 'Laravel Developer',
        email   : 'mohsina@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },{
        name    : 'Sraboni Akter',
        age     : 28,
        gender  : 'Female',
        location: 'Dhanmondi',
        cell    : '01729873492',
        photo   : '4.jpg',
        job     : 'MERN Developer',
        email   : 'sraboni@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },{
        name    : 'Selim Hasan Riad',
        age     : 25,
        gender  : 'Male',
        location: 'Mirpur',
        cell    : '01754673492',
        photo   : '5.jpg',
        job     : 'Full Stack Developer',
        email   : 'selim@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },{
        name    : 'Milon Khan',
        age     : 27,
        gender  : 'Male',
        location: 'Dhanmondi',
        cell    : '01725673492',
        photo   : '6.jpg',
        job     : 'Full Stack Developer',
        email   : 'milon@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },{
        name    : 'Md.Rabbi',
        age     : 23,
        gender  : 'Male',
        location: 'Mirpur',
        cell    : '01729673491',
        photo   : '7.jpg',
        job     : 'Laravel Developer',
        email   : 'rabbi@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },{
        name    : 'Humaid Hasan',
        age     : 30,
        gender  : 'Male',
        location: 'Uttara',
        cell    : '01726753492',
        photo   : '8.jpg',
        job     : 'Wordpress Developer',
        email   : 'humaid@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },{
        name    : 'Armaan Haque',
        age     : 27,
        gender  : 'Male',
        location: 'Banani',
        cell    : '01753373492',
        photo   : '9.jpg',
        job     : 'Full Stack Developer',
        email   : 'araman@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },{
        name    : 'Tahmina Laboni',
        age     : 18,
        gender  : 'Female',
        location: 'Dhanmondi',
        cell    : '01724633492',
        photo   : '10.jpg',
        job     : 'Front End Developer',
        email   : 'laboni@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },{
        name    : 'Nahian Khondoker',
        age     : 34,
        gender  : 'Male',
        location: 'Savar',
        cell    : '01727873492',
        photo   : '1.jpg',
        job     : 'Full Stack Developer',
        email   : 'nahian@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },{
        name    : 'Coder Amit',
        age     : 26,
        gender  : 'Male',
        location: 'Savar',
        cell    : '01629673492',
        photo   : '2.jpg',
        job     : 'Front End Developer',
        email   : 'amit@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },{
        name    : 'Prince Mahmud Hridoy',
        age     : 25,
        gender  : 'Male',
        location: 'Savar',
        cell    : '01929673492',
        photo   : '3.jpg',
        job     : 'Java Developer',
        email   : 'hridoy@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },{
        name    : 'Yesmin Sima',
        age     : 27,
        gender  : 'Male',
        location: 'Uttara',
        cell    : '01342173492',
        photo   : '4.jpg',
        job     : 'JavaScript Developer',
        email   : 'sima@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },{
        name    : 'Khondokar Zarin Tasnim',
        age     : 28,
        gender  : 'Female',
        location: 'Banani',
        cell    : '01429673492',
        photo   : '5.jpg',
        job     : 'NodeJs Developer',
        email   : 'tasnim@gmail.com',
        desc    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore ea eaque eius',
    },
];

// get elements
let photo = document.querySelector('.slider-content img');
let stu_name = document.querySelector('.slider-content h2');
let job = document.querySelector('.slider-content h4');
let description = document.querySelector('.slider-content p');
let mail = document.querySelector('.slider-content h6');
let prev_btn = document.querySelector('.nav-link #prev');
let next_btn = document.querySelector('.nav-link #next');
let default_index = 0;

// show single data user
showUser();
function showUser( index = 0 ){
    photo.setAttribute('src','users/' + users[index].photo);
    stu_name.innerHTML = users[index].name;
    job.innerHTML = users[index].job;
    description.innerHTML = users[index].desc;
    mail.innerHTML = users[index].email;
}

// next button action 
next_btn.onclick = () =>{
    if( default_index > users.length -2 ){
        default_index =0;
    }else{
        default_index ++;
    }
    showUser(default_index);
}

// previous button action
prev_btn.onclick = () =>{
    if(default_index < 0 || default_index < users.length -2 ){
        default_index = users.length -1;
    }else{
        default_index --;
    }
    showUser(default_index);
}

// slider autoplay
let start_slider = setInterval( () =>{
    if(default_index > users.length - 1){
        default_index =0;
    }
    showUser(default_index);
    default_index ++;
}, 1000 );

// for stop slider and when click next then go next slide
next_btn.onclick = () =>{
    clearInterval(start_slider);
    next_btn.onclick = () =>{
        if( default_index > users.length -2 ){
            default_index =0;
        }else{
            default_index ++;
        }
        showUser(default_index);
    }
}

prev_btn.onclick = () =>{
    clearInterval(start_slider);
    prev_btn.onclick = () =>{
        if(default_index < 0  ){
            default_index = users.length -1;
        }else{
            default_index --;
        }
        showUser(default_index);
    }
}


// rendering
let alluser = document.querySelector('#alluser');
let gender = document.getElementsByName('gender');
let gender_tab = document.querySelector('.gender-tab');
let user_location = document.querySelector('#location');
let age = document.querySelector('#age');

// let allUserData ='';

// fetch all user

// allUsers();
// function allUsers(){
//     users.map( user =>{
//         allUserData += `<div class="col-md-4 col-sm-6 mb-4">
//         <div class="card shadow-sm">
//             <div class="card-body">
//                 <div class="team-item">
//                     <img class="shadow card-image" src="users/${user.photo}" alt="">
//                     <h2>${user.name}</h2>
//                     <h4>${user.job}</h4>
//                     <h6>${user.email}</h6>
//                     <span>Gender: ${user.gender}</span>&nbsp;
//                     <span>Age: ${user.age}</span>
//                     <p>${user.desc}</p>
//                 </div>
//             </div>
//         </div>
//     </div>`;
//     } );
//     alluser.innerHTML = allUserData;

// }


// function
showAllUser();
function showAllUser( gen = "", loc ="", age=""){
    let allUserData ='';
    // filter for gender
    if( gen != ""){
        users.map( user => {
            if(user.gender.toLocaleLowerCase() == gen){
                allUserData += `<div class="col-md-4 col-sm-6 mb-4">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <div class="team-item">
                                    <img class="shadow card-image" src="users/${user.photo}" alt="">
                                    <h2>${user.name}</h2>
                                    <h4>${user.job}</h4>
                                    <h6>${user.email}</h6>
                                    <span>Gender: ${user.gender}</span>&nbsp;
                                    <span>Age: ${user.age}</span>
                                    <p>${user.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
             }
        } );
      alluser.innerHTML = allUserData;
    }
    // filter for location
    else if( loc != ''){
        users.map( user =>{
            if(user.location.toLocaleLowerCase().includes(loc)){
                allUserData += `<div class="col-md-4 col-sm-6 mb-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <div class="team-item">
                            <img class="shadow card-image" src="users/${user.photo}" alt="">
                            <h2>${user.name}</h2>
                            <h4>${user.job}</h4>
                            <h6>${user.email}</h6>
                            <span>Gender: ${user.gender}</span>&nbsp;
                            <span>Age: ${user.age}</span>
                            <p>${user.desc}</p>
                        </div>
                    </div>
                </div>
            </div>`;
            }
        });
        alluser.innerHTML = allUserData;
    }
    // filter for age
    else if(age != ''){
        users.map( user => {
            if( user.age < age ){
                allUserData += `<div class="col-md-4 col-sm-6 mb-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <div class="team-item">
                            <img class="shadow card-image" src="users/${user.photo}" alt="">
                            <h2>${user.name}</h2>
                            <h4>${user.job}</h4>
                            <h6>${user.email}</h6>
                            <span>Gender: ${user.gender}</span>&nbsp;
                            <span>Age: ${user.age}</span>
                            <p>${user.desc}</p>
                        </div>
                    </div>
                </div>
            </div>`;
            }
        });
        alluser.innerHTML = allUserData;
    }
    else{
        users.map( user => {
            allUserData += `<div class="col-md-4 col-sm-6 mb-4">
            <div class="card shadow-sm">
                <div class="card-body">
                    <div class="team-item">
                        <img class="shadow card-image" src="users/${user.photo}" alt="">
                        <h2>${user.name}</h2>
                        <h4>${user.job}</h4>
                        <h6>${user.email}</h6>
                        <span>Gender: ${user.gender}</span>&nbsp;
                        <span>Age: ${user.age}</span>
                        <p>${user.desc}</p>
                    </div>
                </div>
            </div>
        </div>`;
        });
        alluser.innerHTML = allUserData;
    }
    
}

gender_tab.onclick = () =>{
    for(let i =0; i < gender.length; i++){
        if(gender[i].checked){
            showAllUser(gender[i].value);
        }
    }
}

age.onkeyup = () => {
    user_location.value = '';
    showAllUser("","", age.value );
}

user_location.onkeyup = () =>{
    age.value ="";
    showAllUser("",user_location.value);
}


