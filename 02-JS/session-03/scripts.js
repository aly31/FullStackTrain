function analyseFunction() {
    let age = document.getElementById('age').value;
    let ageBlock = document.querySelector('#myAgeDisplayBlock');
    let myAge = document.getElementById('myAge');
    if (!age || isNaN(age)) {
        alert('Please enter your age');
    } else {
        ageBlock.style.display = 'block';
        // debugger; this is to stop the execution and wto see what mess you have made
        myAge.innerText = age;

        let schoolAge = document.getElementById('schoolPhase');
        let collegeAge = document.getElementById('collegePhase');
        let adultAge = document.getElementById('adultPhase');
        if(age <= 0) {
            alert(`Not a valid age.`);
        } else if ( age > 0 && age <= 5){
            alert(`too young for anything!`);
        } else if ( age > 5 && age <= 18){
            schoolAge.style.display = 'block';
            collegeAge.style.display = 'none';
            adultAge.style.display = 'none';
        } else if ( age > 18 && age <= 22){
            schoolAge.style.display = 'none';
            collegeAge.style.display = 'block';
            adultAge.style.display = 'none';
        } else {
            schoolAge.style.display = 'none';
            collegeAge.style.display = 'none';
            adultAge.style.display = 'block';
        } 
    }
}
