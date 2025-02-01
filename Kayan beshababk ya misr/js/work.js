const personnelData = [

    {
        name: "المستشارة ايمان جمال",
        role: " رئيس الكيان",
        image: "./images/Team Member - Eman Gamal.jpeg",
        social: {
            facebook:"https://www.facebook.com/share/19pTVrwyU8/"
        }
    },

    {
        name: "الاعلامي ايمن ناصر",
        role: " امين الاعلام للكيان",
        image: "./images/Team Member - Aimen Naser.jpeg",
        social: {
            facebook:"https://www.facebook.com/share/198GaxoCuG/"
           
        }
    },

    {
        name: "المهندس عمرو حلمي ",
        role: "نائب رئيس الكيان",
        image: "./images/Team Member - Amro Helmy.jpeg",
        social: {
            facebook:"https://www.facebook.com/share/1F6cWSvoTu/"
        }
    },

    {
        name: "المهندس محمد حمزة",
        role: "المدير التنفيذي للكيان",
        image: "./images/Team Member - Muhamed hamza.jpeg",  
        social: {
            facebook:"https://www.facebook.com/share/1FiGURuc39/"
        }
    },
   
];

function createPersonnelCard(person) {
    return `
        <div class="personnel-card">
            <img src="${person.image}" alt="${person.name}" class="personnel-image">
            <div class="personnel-info">
                <h3>${person.name}</h3>
                <p class="role">${person.role}</p>
                  <div class="personnel-social">
                    <a href="${person.social.linkedin}" class="social-icon" target="_blank">facebook</a>
                   
                </div>
            </div>
        </div>
    `;
}

function renderPersonnel() {
    const grid = document.getElementById('personnelGrid');
    grid.innerHTML = personnelData.map(person => createPersonnelCard(person)).join('');
}

document.addEventListener('DOMContentLoaded', renderPersonnel);


function renderProjects() {
    const grid = document.querySelector('.card-grid');
    grid.innerHTML = projectData.map(project => createProjectCard(project)).join('');
    
    // Add click event listeners
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.id;
            const project = projectData.find(p => p.id === parseInt(projectId));
            showProjectDetails(project);
        });
    });
}

function showProjectDetails(project) {
    // You can implement a modal or redirect to a detailed view
    console.log(`Viewing project: ${project.title}`);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);
