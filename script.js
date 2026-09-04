const typingTitle = document.getElementById("typing-title");
const roles = [
    'Computer Science Student',
    'Aspiring Software Developer',
    'Programming Learner',
    'Web Development Learner',
    'Tech Enthusiast'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
function typeRole(){
    const currentRole = roles[roleIndex];
    typingTitle.textContent=isDeleting?currentRole.slice(0,charIndex-1):currentRole.slice(0,charIndex+1);
    charIndex+=isDeleting?-1:1;
    let delay = isDeleting?70:110;
    if(!isDeleting && charIndex===currentRole.length){
        delay=1400;
        isDeleting=true;
    }else if(isDeleting && charIndex===0){
        isDeleting=false;
        roleIndex=(roleIndex+1)%roles.length;
        delay=500;
    }
    setTimeout(typeRole,delay);
}
typeRole();
