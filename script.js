const typingTitle = document.getElementById("typing-title");
const roles = ['Gen AI Engineer', 'AI Application Builder','Full Stack Developer', 'EdTech Instructor','Entrepreneur'];
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
