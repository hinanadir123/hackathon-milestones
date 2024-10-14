// get reference to the display area
var form = document.getElementById("resume-form");
var resumeDisplayelement = document.getElementById('resume-display');
// handle form submission
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault(); //  prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('e-mail').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHtml = "\n<h2><b>Editable Resume<b></h2>\n\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n\n<p><b>E-mail:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n");
    // display the generated resume
    if (resumeDisplayelement) {
        console.log("resume html ==>>", resumeHtml);
        resumeDisplayelement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume will display element is missing.');
    }
});
