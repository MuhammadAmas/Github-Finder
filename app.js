// Init Github 
const github = new GitHub;

//Init UI   
const ui = new UI;


// Search input 
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;
    if (userText !== '') {
        // Make http call
        github.getUser(userText).then(data => {
            console.log(data);
            if (data.profile.message === 'Not Found') {
                // Show Alert
                ui.showAlert('user not found', 'alert alert-danger')
            } else {
                // Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
        })
    } else {
        // Clear Profile
        ui.clearProfile();

    }
})


