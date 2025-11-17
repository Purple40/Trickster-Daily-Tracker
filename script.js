// Quest data
const questsData = {
    zoneDaily: [
        { zone: "Coral Beach (NPC: Indiana Jhones)", requirement: "Collect 2 Crystal" },
        { zone: "Desert Beach (NPC: Monkey T)", requirement: "Collect 1 Sleeping Socks" },
        { zone: "Megalopolis (NPC: Star Gazer Stella)", requirement: "Collect 1 Shtella's Profile" },
        { zone: "Caballa Relics (NPC: Pharaoh Boy)", requirement: "Collect 1 Staff of Purification" },
        { zone: "Oops Wharf (NPC: Marinel)", requirement: "Drill 2 Thick Rope" },
        { zone: "Mermaid Palace (NPC: Entertainer Elicia)", requirement: "Collect 2 Executioner's Gills" },
        { zone: "Ghost Blue (NPC: Star Gazer Stella)", requirement: "Collect 1 Stela's Profile" },
        { zone: "Rose Garden (NPC: Homeless Ian)", requirement: "Collect 2 Punisher B.V Claws" },
        { zone: "Black Swamp (NPC: Hair of Rosetta)", requirement: "Drill 2 Swamp Leaf" },
        { zone: "Techichi Volcano (NPC: Star Gazer Stella)", requirement: "Collect 2 Stellar's Profile" },
        { zone: "Tapasco Volcano (NPC: Guardian Kerberos)", requirement: "Collect 2 HP Recovery Potion" }
    ],
    developerH: [
        { zone: "Megalopolis", requirement: "Collect 10 Acorn Bracelet - Obtained from Green Yamu, Southeast Forest" },
        { zone: "Caballa Relics", requirement: "Collect 1 Silver Bracelet and 1 Golden Bracelet - Obtained from Mimic, Caballa Fields" },
        { zone: "Oops Wharf", requirement: "Drill 1 Portable Sunshade - Obtained drilling Oops Wharf Fields" },
        { zone: "Mermaid Palace", requirement: "Drill 2 Topaz - Obtained drilling Oops Wharf Fields (There are other sources)" },
        { zone: "Ghost Blue", requirement: "Drill 1 Rusty Nail - Obtained drilling Ghost Blue Fields" },
        { zone: "Rose Garden", requirement: "Collect 1 Copper Tight, 1 Silver Tight and 1 Gold Tight - Obtained from Captains(Rose Garden Field 2)" },
        { zone: "Black Swamp", requirement: "Drill 1 Pottery Doll - Obtained drilling in Swamp Fields" },
        { zone: "Snow Hill", requirement: "Collect 2 Sweet Chestnut and 2 Toasty Walnut - Obtained from Trees in Lapanoel" },
        { zone: "Techichi Volcano", requirement: "Collect 2 Plaster Powder and 2 Ponchichi Statue - Obtained from Ponchichi, Techichi Fields" },
        { zone: "Tapasco Volcano", requirement: "Collect 3 Orc Bats - Obtained from Red Orcs, Tapasco Fields" },
        { zone: "Platonia", requirement: "Missing a lvl 400 (Sadge)" }
    ],
    monsterGuild: [
        { zone: "Cora MonsterGuild (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "Cora MonsterGuild (NPC: Assistant Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Gate Desert Beach (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "Paradise MonsterGuild (NPC: Assistant Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Beach Field 3 (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "Path Desert Beach (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "Mega MonsterGuild (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "Mega MonsterGuild (NPC: Assistant Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Mega MonsterGuild (NPC: Master Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "SouthEast Forest (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "Azteca MonsterGuild (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "Azteca MonsterGuild (NPC: Assistant Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Azteca MonsterGuild (NPC: Master Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "GB MonsterGuild (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "GB MonsterGuild (NPC: Assistant Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "GB MonsterGuild (NPC: Master Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "RoseField 3 (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "RoseField 3 (NPC: Assistant Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Gate Vamp Dungeon (NPC: Master Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Dev Room (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "Dev Room (NPC: Assistant Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Dev Room (NPC: Master Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "BlackSwamp MonsterGuild (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "BlackSwamp MonsterGuild (NPC: Assistant Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "BlackSwamp MonsterGuild (NPC: Master Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Snowhill MonsterGuild (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "Snowhill MonsterGuild (NPC: Assistant Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Snowhill MonsterGuild (NPC: Master Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Techichi NeilCamp (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "Techichi NeilCamp (NPC: Assistant Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Techichi NeilCamp (NPC: Master Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Gate of Tapasco Volcano (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "Gate of Tapasco Volcano (NPC: Assistant Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Gate of Tapasco Volcano (NPC: Master Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Gate of Abyss (NPC: Hunter Yuri)", requirement: "Complete Monster Guild Quest" },
        { zone: "Gate of Abyss (NPC: Assistant Hunter)", requirement: "Complete Monster Guild Quest" },
        { zone: "Gate of Abyss (NPC: Master Hunter)", requirement: "Complete Monster Guild Quest" }
    ]
};

const lastResetSpan = document.getElementById('lastReset');

// Function to show section
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

// Render quests for a section
function renderSection(sectionId, quests) {
    const container = document.getElementById(`quests-${sectionId}`);
    quests.forEach((quest, index) => {
        const questDiv = document.createElement('div');
        questDiv.className = 'quest';
        questDiv.id = `${sectionId}-${index}`;
        questDiv.onclick = () => toggleQuest(sectionId, index);
        questDiv.innerHTML = `
            <span class="zone">${quest.zone}</span>
            <span class="requirement">${quest.requirement}</span>
            <input type="checkbox" class="checkbox" id="checkbox-${sectionId}-${index}" onchange="updateQuest('${sectionId}', ${index})">
        `;
        container.appendChild(questDiv);
    });
}

// Render all sections
Object.keys(questsData).forEach(sectionId => {
    renderSection(sectionId, questsData[sectionId]);
});

// Toggle quest by clicking anywhere on the row
function toggleQuest(sectionId, index) {
    const checkbox = document.getElementById(`checkbox-${sectionId}-${index}`);
    checkbox.click();
}

// Load state from localStorage
function loadState() {
    Object.keys(questsData).forEach(sectionId => {
        questsData[sectionId].forEach((_, index) => {
            const checkbox = document.getElementById(`checkbox-${sectionId}-${index}`);
            if (checkbox) {
                const isChecked = localStorage.getItem(`${sectionId}-${index}`) === 'true';
                checkbox.checked = isChecked;
                updateQuest(sectionId, index, false);
            }
        });
        updateCounter(sectionId);
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
    }
}

// Update counter
function updateCounter(sectionId) {
    const quests = questsData[sectionId];
    const completed = quests.filter((_, index) => document.getElementById(`checkbox-${sectionId}-${index}`).checked).length;
    document.getElementById(`counter-${sectionId}`).textContent = `${completed}/${quests.length} completed`;
    updateProgress(sectionId);
}

// Update progress bar
function updateProgress(sectionId) {
    const quests = questsData[sectionId];
    const completed = quests.filter((_, index) => document.getElementById(`checkbox-${sectionId}-${index}`).checked).length;
    const progress = document.getElementById(`progress-${sectionId}`);
    if (progress) {
        progress.value = quests.length > 0 ? completed / quests.length : 0;
    }
}



// Daily reset
function checkReset() {
    const now = new Date();
    const uruguayTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Montevideo"}));
    const lastReset = localStorage.getItem('lastReset') || 'Never';
    lastResetSpan.textContent = lastReset;

    if (uruguayTime.getHours() >= 21 && lastReset !== uruguayTime.toDateString()) {
        Object.keys(questsData).forEach(sectionId => {
            questsData[sectionId].forEach((_, index) => {
                localStorage.setItem(`${sectionId}-${index}`, 'false');
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
    const resetHour = 21; // 9 PM
    const resetMinute = 0;
    const resetSecond = 0;

    let resetTime = new Date(uruguayTime);
    resetTime.setHours(resetHour, resetMinute, resetSecond, 0);

    // If current time is past 9 PM, set to next day
    if (uruguayTime >= resetTime) {
        resetTime.setDate(resetTime.getDate() + 1);
    }

    const timeDiff = resetTime - uruguayTime;
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
    Object.keys(questsData).forEach(sectionId => {
        questsData[sectionId].forEach((_, index) => {
            totalQuests++;
            if (localStorage.getItem(`${sectionId}-${index}`) === 'true') {
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
