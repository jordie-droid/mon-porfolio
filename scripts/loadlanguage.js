// btn.addEventListener("click", function () {
//   fetch("http://localhost:3000/contacts")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (let contact of data) {
//         const li = document.createElement("li");
//         const content = document.createTextNode(
//           `${contact.id} ${contact.nom} ${contact.prenom}`
//         );
//         li.appendChild(content);
//         contacts.appendChild(li);
//       }
//     });
// });

//Load languages
window.addEventListener("load", function(event) {
    const skillsContainer = document.querySelector('.flex-box__speak');
    fetch("http://localhost:3000/person")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for (let person of data){
            for(let i = 0; i < person.idiomskills.length; i++){
                //create paragraphe language
                const language = document.createElement('p');
                //add text
                language.innerText=`${person.idiomskills[i].language}`;
                //create the container of progressBar
                const containerProgressBar = document.createElement('div');
                //add our class for this element
                containerProgressBar.classList.add('progress-bar-container');
                // containerProgressBar.style.height = "20px"
                //create  the progressBar
                const progressBar = document.createElement('div');
                //add the class of this element
                progressBar.classList.add('progress-content');
                //add the text in our progressBar
                progressBar.innerText = `${person.idiomskills[i].percent}%`;
                //add the color of progressBar tex
                progressBar.style.color='#fff';
                //center the text of progressBar
                progressBar.style.textAlign="center";
                //put all percent in the percentCondition
                const percentCondition = person.idiomskills[i].percent;
                // determine the width of our progressBar
                const progressBarValue = `${percentCondition}%`;
                progressBar.style.width = progressBarValue;
                //add the progressBar in it container 
                containerProgressBar.appendChild(progressBar);
                //add the language in it container
                skillsContainer.append(language);
                //add containerProgressBar in it container
                skillsContainer.append(containerProgressBar);
            }
            //for of tech skills
            for(let i = 0; i < person.computerSkills.length; i++){
                //add programming languages
                const techSkillsContainer = document.querySelector('.flex-box__tech-skills');
                //create tech-skills container
                const techSkills = document.createElement('div');
                //add it a class
                techSkills.classList.add('tech-skills__grid');
                //create grid__skills-container
                const skillsContainer = document.createElement('div');
                //add it a class
                skillsContainer.classList.add('grid__skills-container');
                //create round-container
                const roundContainer = document.createElement('div');
                //add it a class
                roundContainer.classList.add('skills-container__round-container');
                //create a img
                const imgRound = document.createElement('img');
                //add a image source
                imgRound.src = `${person.computerSkills[i].logo}`;
                //create skillsDescription
                const techDes = document.createElement('div');
                // add it a class
                techDes.classList.add('skills-container__description');
                //create label
                const label = document.createElement('h3');
                //create a text
                label.innerText = `${person.computerSkills[i].designation}`;
                //aad it a class
                label.classList.add('sub--title2');
                //append imgroun in the roundContainer
                roundContainer.appendChild(imgRound);
                //append roundContainer in the skillsContainer
                skillsContainer.appendChild(roundContainer);
                //apend label in techDes
                techDes.appendChild(label);
                //append techDes in the skillsContainer
                skillsContainer.appendChild(techDes);
                //append skillsContainer in the tech-skills
                techSkills.appendChild(skillsContainer);
                //add to the main parent
                techSkillsContainer.appendChild(techSkills);
                console.log(techSkills);
            }
        }
    });
  });