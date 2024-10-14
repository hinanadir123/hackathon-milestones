// get reference to the display area
const form = document.getElementById("resume-form") as  HTMLFormElement;
const resumeDisplayelement = document.getElementById('resume-display') as HTMLDivElement;

// handle form submission
form?.addEventListener('submit', (event:Event) => {
    event.preventDefault();  //  prevent page reload
    // collect input values
    const name = (document.getElementById('name') as HTMLInputElement) .value
    const email = (document.getElementById('e-mail') as HTMLInputElement) .value
    const phone = (document.getElementById('phone') as HTMLInputElement) .value
    const education = (document.getElementById('education') as HTMLInputElement) .value
    const experience = (document.getElementById('experience') as HTMLInputElement) .value
    const skills = (document.getElementById('skills') as HTMLInputElement) .value

// generate the resume content dynamically
const resumeHtml= `
<h2><b>Editable Resume<b></h2>

<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>

<p><b>E-mail:</b><span contenteditable="true">${email}</span></p>
<p><b>phone:</b><span contenteditable="true">${phone}</span></p>

<h3>Education</h3>
<p contenteditable="true">${education}</p>

<h3>Experience</h3>
<p contenteditable="true">${experience}</p>

<h3>Skills</h3>
<p contenteditable="true">${skills}</p>
`;
// display the generated resume
if(resumeDisplayelement) {
    console.log("resume html ==>>", resumeHtml) 
    resumeDisplayelement.innerHTML = resumeHtml;
      
}else {
    console.error('The resume will display element is missing.');

}


})