
// Nav Button "Mehr Infos"

function moreNav(){
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if (!event.target.matches(".dropdownButtonNav")){
        var dropdowns = document.getElementsByClassName("dropdownContent");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}


// Fetch Date from last Github commit and replace html element text with new date

function fetchLastCommitDate(repoName, elementId) {

    const apiUrl = `https://api.github.com/repos/NZivulovic/${repoName}/commits/main`; 

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`GitHub API error for ${repoName}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const commitDateStr = data.commit.committer.date; 
            
            const dateObj = new Date(commitDateStr);
            
    
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            const formattedDate = dateObj.toLocaleDateString('de-DE', options);

            const dateElement = document.getElementById(elementId);
            if (dateElement) {
                dateElement.textContent = formattedDate;
            }
        })
        .catch(error => {
            console.error('Error fetching commit date:', error);
            
            const dateElement = document.getElementById(elementId);
             if (dateElement) {
                dateElement.textContent = 'Date not available';
            }
        });
}

fetchLastCommitDate(
    `Slot-Machine-Demo_Godot-Engine`, 
    `datumMain1`
);

fetchLastCommitDate(
    '2D-Run-n-Gun-Platformer_Cuphead-Clone_Unity-Engine', 
    "datumMain2"
);