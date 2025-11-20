// Quest data restructured by zone
const zones = {
    "Blooming Cora": [
        { zone: "Coral Town (Indiana John)", requirement: "Collect 2 Crystal", location: "Beach Areas", image: "assets/Indiana Jhones Daily (Pop Up).png" },
        { zone: "Coral MG (Hunter Yuri)", requirement: "MG Quest", location: "Cora", image: "assets/Blooming Cora Hunter Yuri (Pop Up).png" },
        { zone: "Cora MG (Assistant Hunter)", requirement: "MG Quest", location: "Cora", image: "assets/Blooming Cora Assistant Hunter (Pop Up).png" }
    ],
    "Megalopolis": [
        { zone: "Megalopolis (Star Gazer Stella)", requirement: "Collect 1 Shtella's Profile", location: "Megalopolis", image: "assets/Megalopolis Stela (Pop Up).png" },
        { zone: "Megalopolis (Dev)", requirement: "Collect 10 Acorn Bracelet - Obtained from Green Yamu, Southeast Forest", location: "Megalopolis", image: "assets/Megalopolis Dev (Pop Up).png" },
        { zone: "Megalopolis MG (Hunter Yuri)", requirement: "MG Quest", location: "Megalopolis", image: "assets/Megalopolis Hunter Yuri (Pop Up).png" },
        { zone: "Megalopolis MG (Assistant Hunter)", requirement: "MG Quest", location: "Megalopolis" , image: "assets/Megalopolis Assistant Hunter (Pop Up).png" },
        { zone: "Megalopolis MG (Master Hunter)", requirement: "MG Quest", location: "Megalopolis" , image: "assets/Megalopolis Hunter Master (Pop Up).png" }
    ],
    "Caballa Relics (Azteca)": [
        { zone: "Caballa Relics (Pharaoh Boy)", requirement: "Collect 1 Staff of Purification", location: "Caballa Relics", image: "assets/Azteca Pharaoh Boy (Pop Up).png"  },
        { zone: "Caballa Relics (Dev)", requirement: "Collect 1 Silver Bracelet and 1 Golden Bracelet - Obtained from Mimic, Caballa Fields", location: "Caballa Relics", image: "assets/Azteca Dev (Pop Up).png"  },
        { zone: "Azteca MG (Hunter Yuri)", requirement: "MG Quest", location: "Caballa Relics" , image: "assets/Azteca MG Hunter Yuri (Pop Up).png"  },
        { zone: "Azteca MG (Assistant Hunter)", requirement: "MG Quest", location: "Caballa Relics" , image: "assets/Azteca MG Assistant Hunter (Pop Up).png" },
        { zone: "Azteca MG (Master Hunter)", requirement: "MG Quest", location: "Caballa Relics" , image: "assets/Azteca MG Hunter Master (Pop Up).png" }
    ],
    "Oops Wharf": [
        { zone: "Oops Wharf (Marinel)", requirement: "Drill 2 Thick Rope", location: "Oops Wharf" },
        { zone: "Oops Wharf (Dev)", requirement: "Drill 1 Portable Sunshade - Obtained drilling Oops Wharf Fields", location: "Oops Wharf" }
    ],
    "Mermaid Palace": [
        { zone: "Mermaid Palace (Entertainer Elicia)", requirement: "Collect 2 Executioner's Gills", location: "Mermaid Palace" },
        { zone: "Mermaid Palace (Dev)", requirement: "Drill 2 Topaz - Obtained drilling Oops Wharf Fields (There are other sources)", location: "Mermaid Palace" }
    ],
    "Ghost Blue": [
        { zone: "Ghost Blue (Star Gazer Stella)", requirement: "Collect 1 Stela's Profile", location: "Ghost Blue" },
        { zone: "Ghost Blue (Dev)", requirement: "Drill 1 Rusty Nail - Obtained drilling Ghost Blue Fields", location: "Ghost Blue" },
        { zone: "GB MG (Hunter Yuri)", requirement: "MG Quest", location: "Ghost Blue" },
        { zone: "GB MG (Assistant Hunter)", requirement: "MG Quest", location: "Ghost Blue" },
        { zone: "GB MG (Master Hunter)", requirement: "MG Quest", location: "Ghost Blue" }
    ],
    "Rose Garden": [
        { zone: "Rose Garden (Homeless Ian)", requirement: "Collect 2 Punisher B.V Claws", location: "Rose Garden" },
        { zone: "Rose Garden (Dev)", requirement: "Collect 1 Copper Tight, 1 Silver Tight and 1 Gold Tight - Obtained from Captains(Rose Garden Field 2)", location: "Rose Garden" },
        { zone: "RoseField 3 (Hunter Yuri)", requirement: "MG Quest", location: "Rose Garden" },
        { zone: "RoseField 3 (Assistant Hunter)", requirement: "MG Quest", location: "Rose Garden" }
    ],
    "Black Swamp": [
        { zone: "Black Swamp (Hair of Rosetta)", requirement: "Drill 2 Swamp Leaf", location: "Black Swamp" },
        { zone: "Black Swamp (Dev)", requirement: "Drill 1 Pottery Doll - Obtained drilling in Swamp Fields", location: "Black Swamp" },
        { zone: "BlackSwamp MG (Hunter Yuri)", requirement: "MG Quest", location: "Black Swamp" },
        { zone: "BlackSwamp MG (Assistant Hunter)", requirement: "MG Quest", location: "Black Swamp" },
        { zone: "BlackSwamp MG (Master Hunter)", requirement: "MG Quest", location: "Black Swamp" }
    ],
    "Laplanoel": [
        { zone: "Laplanoel (Winnie)", requirement: "Collect 2 Iciclers Crystal", location: "Laplanoel" },
        { zone: "Snow Hill (Dev)", requirement: "Collect 2 Sweet Chestnut and 2 Toasty Walnut - Obtained from Trees in Lapanoel", location: "Laplanoel" },
        { zone: "Snowhill MG (Hunter Yuri)", requirement: "MG Quest", location: "Laplanoel" },
        { zone: "Snowhill MG (Assistant Hunter)", requirement: "MG Quest", location: "Laplanoel" },
        { zone: "Snowhill MG (Master Hunter)", requirement: "MG Quest", location: "Laplanoel" }
    ],
    "Techichi Volcano": [
        { zone: "Techichi Volcano (Star Gazer Stella)", requirement: "Collect 2 Stellar's Profile", location: "Techichi Volcano" },
        { zone: "Techichi Volcano (Dev)", requirement: "Collect 2 Plaster Powder and 2 Ponchichi Statue - Obtained from Ponchichi, Techichi Fields", location: "Techichi Volcano" },
        { zone: "Techichi NeilCamp (Hunter Yuri)", requirement: "MG Quest", location: "Techichi Volcano" },
        { zone: "Techichi NeilCamp (Assistant Hunter)", requirement: "MG Quest", location: "Techichi Volcano" },
        { zone: "Techichi NeilCamp (Master Hunter)", requirement: "MG Quest", location: "Techichi Volcano" }
    ],
    "Tapasco Volcano": [
        { zone: "Tapasco Volcano (Guardian Kerberos)", requirement: "Collect 2 HP Recovery Potion", location: "Tapasco Volcano" },
        { zone: "Tapasco Volcano (Dev)", requirement: "Collect 3 Orc Bats - Obtained from Red Orcs, Tapasco Fields", location: "Tapasco Volcano" },
        { zone: "Gate of Tapasco Volcano (Hunter Yuri)", requirement: "MG Quest", location: "Tapasco Volcano" },
        { zone: "Gate of Tapasco Volcano (Assistant Hunter)", requirement: "MG Quest", location: "Tapasco Volcano" },
        { zone: "Gate of Tapasco Volcano (Master Hunter)", requirement: "MG Quest", location: "Tapasco Volcano" }
    ],
    "Paradise": [
        { zone: "Desert Beach (Monkey T)", requirement: "Collect 1 Sleeping Socks", location: "Beach Areas", image: "assets/Paradise Monkey T (Pop Up).png" },
        { zone: "Paradise MG (Hunter Yuri)", requirement: "MG Quest", location: "Paradise", image: "assets/Paradise Hunter Yuri (Pop Up).png" },
        { zone: "Paradise MG (Assistant Hunter)", requirement: "MG Quest", location: "Paradise", image: "assets/Paradise Assistant Hunter (Pop Up).png" }
    ],
    "Beach Areas": [
        { zone: "Gate Desert Beach (Hunter Yuri)", requirement: "MG Quest", location: "Beach Areas", image: "assets/Gate Desert Beach Hunter Yuri (Pop Up).png" },
        { zone: "Path Desert Beach (Hunter Yuri)", requirement: "MG Quest", location: "Beach Areas", image: "assets/Path Desert Beach Hunter Yuri (Pop Up).png" }
    ],
    "Southeast Forest": [
        { zone: "SouthEast Forest (Hunter Yuri)", requirement: "MG Quest", location: "Southeast Forest", image: "assets/Southeast Forest Hunter Yuri (Pop Up).png" }
    ],
    "Vampire Dungeon": [
        { zone: "Gate Vamp Dungeon (Master Hunter)", requirement: "MG Quest", location: "Vampire Dungeon" }
    ],
    "Dev Room": [
        { zone: "Dev Room (Hunter Yuri) (Developer)", requirement: "MG Quest", location: "Dev Room" },
        { zone: "Dev Room (Assistant Hunter) (Developer)", requirement: "MG Quest", location: "Dev Room" },
        { zone: "Dev Room (Master Hunter) (Developer)", requirement: "MG Quest", location: "Dev Room" }
    ],
    "Gate of Abyss": [
        { zone: "Gate of Abyss (Hunter Yuri)", requirement: "MG Quest", location: "Gate of Abyss" },
        { zone: "Gate of Abyss (Assistant Hunter)", requirement: "MG Quest", location: "Gate of Abyss" },
        { zone: "Gate of Abyss (Master Hunter)", requirement: "MG Quest", location: "Gate of Abyss" },
        { zone: "Platonia (Dev)", requirement: "Missing a lvl 400 (Sadge)", location: "Platonia" }
    ]
};

const lastResetSpan = document.getElementById('lastReset');

// MG = Monster Guild, Dev = Developer coupon Quest

// Function to open modal
function openModal(zoneName, questImage = null) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');

    // Set modal content
    modalTitle.textContent = zoneName;
    
    // Use quest-specific image if provided, otherwise use default zone image
    if (questImage) {
        modalImage.src = questImage;
    } else {
        modalImage.src = `assets/images/${zoneName.replace(/\s+/g, '_')}.png`;
    }
    modalImage.alt = `${zoneName} Image`;

    // Show modal
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Function to toggle card open/close (accordion style: only one open at a time)
function toggleCard(zoneId) {
    const allContainers = document.querySelectorAll('.quests-container');
    const currentContainer = document.getElementById(`quests-${zoneId}`);

    // Close all containers
    allContainers.forEach(container => {
        container.style.maxHeight = '0px';
    });

    // If the current one was closed, open it with a max height of 400px
    if (currentContainer.style.maxHeight === '0px' || currentContainer.style.maxHeight === '') {
        const maxHeight = Math.min(currentContainer.scrollHeight, 400);
        currentContainer.style.maxHeight = maxHeight + 'px';
    }
}

// Render zone card
function renderZoneCard(zoneName, quests) {
    const zoneId = zoneName.replace(/\s+/g, '-');
    const cardDiv = document.createElement('div');
    cardDiv.className = 'zone-card';
    cardDiv.innerHTML = `
        <h3 onclick="toggleCard('${zoneId}')">${zoneName}</h3>
        <div class="zone-counter" id="counter-${zoneId}">0/${quests.length} completed</div>
        <progress class="zone-progress" id="progress-${zoneId}" value="0" max="1"></progress>
        <div class="quests-container" id="quests-${zoneId}">
        </div>
    `;
    zonesContainer.appendChild(cardDiv);

    const questsContainer = document.getElementById(`quests-${zoneId}`);
    quests.forEach((quest, index) => {
        const questDiv = document.createElement('div');
        questDiv.className = 'quest';
        questDiv.id = `${zoneId}-${index}`;
        questDiv.onclick = () => toggleQuest(zoneId, index);
        
        // Create button with quest-specific image if available
        const imageParam = quest.image ? `, '${quest.image}'` : '';
        
        questDiv.innerHTML = `
            <span class="zone">${quest.zone}</span>
            <span class="requirement">${quest.requirement}</span>
            <button class="quest-link" onclick="openModal('${quest.zone}'${imageParam})">💡</button>
            <input type="checkbox" class="checkbox" id="checkbox-${zoneId}-${index}" onchange="updateQuest('${zoneId}', ${index})">
        `;
        questsContainer.appendChild(questDiv);
    });
}


// Define the order of zones
const zoneOrder = [
    "Blooming Cora",
    "Beach Areas",
    "Paradise",
    "Southeast Forest",
    "Megalopolis",
    "Caballa Relics (Azteca)",
    "Oops Wharf",
    "Mermaid Palace",
    "Ghost Blue",
    "Rose Garden",
    "Vampire Dungeon",
    "Dev Room",
    "Black Swamp",
    "Laplanoel",
    "Techichi Volcano",
    "Tapasco Volcano",
    "Gate of Abyss"
];

// Render all zones as cards in the specified order
const zonesContainer = document.getElementById('zones-container');
zoneOrder.forEach(zoneName => {
    if (zones[zoneName]) {
        renderZoneCard(zoneName, zones[zoneName]);
    }
});

// Removed renderByLocation as per user feedback

// Toggle quest by clicking anywhere on the row
function toggleQuest(sectionId, index) {
    const checkbox = document.getElementById(`checkbox-${sectionId}-${index}`);
    checkbox.click();
}

// Load state from localStorage
function loadState() {
    Object.keys(zones).forEach(zoneName => {
        const zoneId = zoneName.replace(/\s+/g, '-');
        zones[zoneName].forEach((_, index) => {
            const checkbox = document.getElementById(`checkbox-${zoneId}-${index}`);
            if (checkbox) {
                const isChecked = localStorage.getItem(`${zoneId}-${index}`) === 'true';
                checkbox.checked = isChecked;
                updateQuest(zoneId, index, false);
            }
        });
    });
}

// Update quest
function updateQuest(sectionId, index, save = true) {
    const questDiv = document.getElementById(`${sectionId}-${index}`);
    const checkbox = document.getElementById(`checkbox-${sectionId}-${index}`);
    if (checkbox.checked) {
        questDiv.classList.add('completed');
    } else {
        questDiv.classList.remove('completed');
    }
    if (save) {
        localStorage.setItem(`${sectionId}-${index}`, checkbox.checked);
        updateCounter(sectionId);
        updateLocationCompletion();
    }
}

// Update counter
function updateCounter(sectionId) {
    const zoneName = sectionId.replace(/-/g, ' ');
    const quests = zones[zoneName];
    const completed = quests.filter((_, index) => document.getElementById(`checkbox-${sectionId}-${index}`).checked).length;
    document.getElementById(`counter-${sectionId}`).textContent = `${completed}/${quests.length} completed`;
    updateProgress(sectionId);
}

// Update progress bar
function updateProgress(sectionId) {
    const zoneName = sectionId.replace(/-/g, ' ');
    const quests = zones[zoneName];
    const completed = quests.filter((_, index) => document.getElementById(`checkbox-${sectionId}-${index}`).checked).length;
    const progress = document.getElementById(`progress-${sectionId}`);
    if (progress) {
        progress.value = quests.length > 0 ? completed / quests.length : 0;
    }
}

// Update location completion status
function updateLocationCompletion() {
    // Group quests by location
    const locationGroups = {};
    Object.keys(zones).forEach(zoneName => {
        const zoneId = zoneName.replace(/\s+/g, '-');
        zones[zoneName].forEach((quest, index) => {
            const location = quest.location || 'Other';
            if (!locationGroups[location]) {
                locationGroups[location] = [];
            }
            locationGroups[location].push({ zoneId, index });
        });
    });

    // Update each location group
    Object.keys(locationGroups).forEach(location => {
        const locationDiv = document.getElementById(`location-${location.replace(/\s+/g, '-').toLowerCase()}`);
        if (locationDiv) {
            const quests = locationGroups[location];
            const completed = quests.filter(({ zoneId, index }) => document.getElementById(`checkbox-${zoneId}-${index}`).checked).length;
            const total = quests.length;
            const isCompleted = completed === total;
            locationDiv.classList.toggle('completed', isCompleted);
        }
    });
}



// Daily reset
function checkReset() {
    const now = new Date();
    const uruguayTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Montevideo"}));
    const lastReset = localStorage.getItem('lastReset') || 'Never';
    lastResetSpan.textContent = lastReset;

    if (uruguayTime.getHours() >= 20 && lastReset !== uruguayTime.toDateString()) {
        Object.keys(zones).forEach(zoneName => {
            const zoneId = zoneName.replace(/\s+/g, '-');
            zones[zoneName].forEach((_, index) => {
                localStorage.setItem(`${zoneId}-${index}`, 'false');
            });
        });
        localStorage.setItem('lastReset', uruguayTime.toDateString());
        loadState();
    }
}

// Countdown timer function
function updateCountdown() {
    const now = new Date();
    const uruguayTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Montevideo"}));
    const resetHour = 20; // 8 PM
    const resetMinute = 0;
    const resetSecond = 0;

    let resetTime = new Date(uruguayTime);
    resetTime.setHours(resetHour, resetMinute, resetSecond, 0);

    // If current time is past 9 PM, set to next day
    if (uruguayTime >= resetTime) {
        resetTime.setDate(resetTime.getDate() + 1);
    }

    let timeDiff = resetTime - uruguayTime;

    // If countdown reaches 0, trigger reset and restart countdown
    if (timeDiff <= 0) {
        // Reset all quests
        Object.keys(zones).forEach(zoneName => {
            const zoneId = zoneName.replace(/\s+/g, '-');
            zones[zoneName].forEach((_, index) => {
                localStorage.setItem(`${zoneId}-${index}`, 'false');
            });
        });
        localStorage.setItem('lastReset', uruguayTime.toDateString());
        loadState();
        // Set resetTime to next day
        resetTime.setDate(resetTime.getDate() + 1);
        timeDiff = resetTime - uruguayTime;
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    const countdownSpan = document.getElementById('countdown');
    if (countdownSpan) {
        countdownSpan.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Render statistics
function renderStatistics() {
    let totalCompleted = 0;
    let totalQuests = 0;
    Object.keys(zones).forEach(zoneName => {
        const zoneId = zoneName.replace(/\s+/g, '-');
        zones[zoneName].forEach((_, index) => {
            totalQuests++;
            if (localStorage.getItem(`${zoneId}-${index}`) === 'true') {
                totalCompleted++;
            }
        });
    });
    const completionRate = totalQuests > 0 ? Math.round((totalCompleted / totalQuests) * 100) : 0;

    // Calculate streak: consecutive days where all quests were completed
    let streak = 0;
    const lastReset = localStorage.getItem('lastReset');
    if (lastReset && lastReset !== 'Never') {
        const lastResetDate = new Date(lastReset);
        const now = new Date();
        const uruguayTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Montevideo"}));
        const daysDiff = Math.floor((uruguayTime - lastResetDate) / (1000 * 60 * 60 * 24));
        // Simple streak calculation: if all quests completed and reset happened, assume streak of 1 for now
        // For full streak, we'd need historical data, but for simplicity, show 1 if completed today
        const allCompleted = totalCompleted === totalQuests;
        streak = allCompleted ? 1 : 0;
    }

    document.getElementById('totalCompleted').textContent = totalCompleted;
    document.getElementById('completionRate').textContent = `${completionRate}%`;
    document.getElementById('streak').textContent = streak;
}

// Initialize
loadState();
checkReset();
renderStatistics();
setInterval(checkReset, 60000);
updateCountdown();
setInterval(updateCountdown, 1000);
