const candidate = {
    name: "Ana",
    area: "Front-End",
    skills: ["JavaScript", "GitHub", "Programming Logic", "Kanban"],
    monthsOfExperience: 3
};

const jobPostings = [
    {
        id: 1,
        company: "TechStart",
        position: "Junior Front-End Developer",
        requirements: ["JavaScript", "GitHub", "Programming Logic", "Objects"],
        salary: 2800,
        workStyle: "Remote"
    },
    {
        id: 2,
        company: "CodeLab",
        position: "Front-End Internship",
        requirements: ["JavaScript", "Kanban", "GitHub"],
        salary: 1800,
        workStyle: "Hybrid"
    },
    {
        id: 3,
        company: "WebSolutions",
        position: "Junior JavaScript Developer",
        requirements: ["JavaScript", "Arrays", "Objects", "Functions"],
        salary: 3000,
        workStyle: "On-site"
    }
];

//==============================INITIALIZATION=========================================

const jobRequirements = jobPostings[0].requirements;

const candidateSkills = candidate.skills;

//==============================COMPARISON=========================================

const matchingSkills = candidateSkills.filter(skill =>
    jobRequirements.includes(skill)
);

const missingSkills = jobRequirements.filter(requirement =>
    candidateSkills.includes(requirement) === false
);

const fulfilledRequirements = matchingSkills.length;

//==============================APPLIED LOGIC=====================================
// For each candidate skill that is included in the job posting requirements,
// return its name. If it does not match, do nothing.

const totalRequirements = jobRequirements.length;

// console.log(totalRequirements);

const compatibility = (fulfilledRequirements / totalRequirements) * 100;

const compatibilityMessage = `
    Company: ${jobPostings[0].company}
    Position: ${jobPostings[0].position}
    Compatibility: ${compatibility}%
    Matching Skills: ${matchingSkills}
    Missing Skills: ${missingSkills}
`;

console.log(compatibilityMessage);