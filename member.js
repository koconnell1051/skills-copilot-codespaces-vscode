function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsBtn = document.getElementById("memberSkillsBtn");
    var memberSkillsBtnClose = document.getElementById("memberSkillsBtnClose");
    var memberSkillsBtnOpen = document.getElementById("memberSkillsBtnOpen");

    memberSkillsBtn.addEventListener("click", function() {
        memberSkills.classList.toggle("memberSkillsOpen");
        memberSkillsBtnOpen.classList.toggle("memberSkillsBtnOpen");
        memberSkillsBtnClose.classList.toggle("memberSkillsBtnClose");
    });
}