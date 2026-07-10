class candidate {
    constructor(name, area, skills, workStyle, monthsExperience) {
        this.name = name;
        this.area = area;
        this.skills = skills;
        this.workStyle = workStyle;
        this.monthsExperience = monthsExperience;
    };
    Presentation() {
        console.log (`
        Hi, my name is ${this.name},
        y work in the area ${this.area} whit a ${this.workStyle} work style,
        my skills are ${this.skills}, and y have ${this.monthsExperience} years of experience.
        `);
    };
}

const candidate_1 = new candidate("Ana", "Front-End", ["JavaScript", "GitHub", "Programming Logic"], "Hybrid", 3);

candidate_1.Presentation();

class jobPosting {
    constructor(id, company, position, requirements, salary, workStyle) {
        this.id = id;
        this.company = company;
        this.position = position;
        this.requirements = requirements;
        this.salary = salary;
        this.workStyle = workStyle;
    }
}


class techJob extends jobPosting {
    constructor(id, company, position, requirements, salary, workStyle, yearsExperience = 0) {
        super(id, company, position, requirements, salary, workStyle);
        this.yearsExperience = yearsExperience;
    }
}

const jobOpenings = [
    new techJob(1, "TechStart", "Junior Front-End Developer", ["JavaScript", "GitHub", "Programming Logic", "Objects"], 2800, "Remote", 1),
    new techJob(2, "CodeLab", "Front-End Internship", ["JavaScript", "Kanban", "GitHub"], 1800, "Hybrid"),
    new techJob(3, "WebSolutions", "Junior JavaScript Developer", ["JavaScript", "Arrays", "Objects", "Functions"], 3000, "On-site", 2)
];

//mostrar vagas
//perguntar
//usar id para fazer o código

const viewJobs = (jobOpenings) => {
    let i = 0;
    console.log(`
        =================== JOBS POSTINGS ====================
        `);
    while (i < jobOpenings.length) {
        let mensagem = `

            Job Posting Index ${i}:
            ID:${jobOpenings[i].id},
            COMPANY:${jobOpenings[i].company},
            POSITION:${jobOpenings[i].position},
            REQUIREMENTS:${jobOpenings[i].requirements},
            SALARY:${jobOpenings[i].salary},
            WORK-STYLE:${jobOpenings[i].workStyle},
            YEARS-EXPERIENCE:${jobOpenings[i].yearsExperience}.
        `
        console.log(mensagem);
        i++;
    }
}

console.log(viewJobs(jobOpenings));

//==============================Instances=========================================

const jobsRequirements = jobOpenings[0].requirements;

const candidateSkills = candidate_1.skills;

//==============================COMPARISON=========================================

const matchingSkills = candidateSkills.filter(skill =>
    jobsRequirements.includes(skill)
);

const missingSkills = jobsRequirements.filter(requirement =>
    candidateSkills.includes(requirement) === false
);

//==============================FORMATTING=========================================

const matchingFormated = matchingSkills.map(skill => ` ${skill}`);

const missingFormated = missingSkills.map(skill => `    -${skill}`);

//==============================APPLIED-LOGIC=====================================
// For each candidate skill that is included in the job posting requirements,
// return its name. If it does not match, do nothing.

const fulfilledRequirements = matchingSkills.length;

const totalRequirements = jobsRequirements.length;

const compatibilityCalculus = (valA, valB) => Math.round((valA / valB) * 100);

const compatibilityRate = compatibilityCalculus(fulfilledRequirements, totalRequirements);

const compatibilityMessage = `
=================== COMPATIBILITY MESSAGE ====================
    Company: ${jobOpenings[0].company}
    Position: ${jobOpenings[0].position}
    Compatibility: ${compatibilityRate}%
    Matching Skills:${matchingFormated}
    Missing Skills: ${("\n") + missingFormated.join("\n")}
`;

console.log(compatibilityMessage);

//==============================CLASSIFYING-COMPATIBILITY============================

const compatibilityClassification = (compatibilityRate) => {
    if (compatibilityRate === 100) {
        let Total = `Total compatibility`
        return Total;
    } else if (compatibilityRate <= 99 && compatibilityRate >= 80) {
        let High = `High compatibility`
        return High;
    } else if (compatibilityRate <= 79 && compatibilityRate >= 50) {
        let Moderate = `Moderate compatibility`
        return Moderate;
    } else if (compatibilityRate <= 49 && compatibilityRate >= 1) {
        let Low = `Low compatibility`
        return Low;
    } else if (compatibilityRate === 0) {
        let No = `No compatibility`
        return No;
    } else {
        let Error = `Error`
        return Error;
    }
}

const chekingCompatibility = compatibilityClassification(compatibilityRate)

const showingCompatibility = `
=================== CHEKING COMPATIBILITY ====================
    ${chekingCompatibility}
`;

console.log(showingCompatibility);

//==============================RECOMMENDED-STUDIES=========================================

const recommendedStudies = `
=================== STUDY RECOMMENDATION ====================
    Priotize study: ${("\n") + missingFormated.join("\n")} 
`;

console.log(recommendedStudies);

//==============================BETTER-JOB==================================================

const bestJob = (candidate, jobOpenings) => {   
    let bestMatch = "";
    let highestCompatibility = -1;

    for (const job of jobOpenings) {

        // Habilidades em comum
        const matchingSkills = candidate.skills.filter(skill => job.requirements.includes(skill));

        // Cálculo da compatibilidade
        const compatibility = compatibilityCalculus(matchingSkills.length, job.requirements.length);

        // Verifica se é a melhor até agora
        if (compatibility > highestCompatibility) {
            highestCompatibility = compatibility;

            bestMatch = {
                job,
                compatibility,
                matchingSkills,
                missingSkills: job.requirements.filter(requirement => !candidate.skills.includes(requirement))
            };
        }
    }

    return bestMatch;
};

const recommendation = bestJob(candidate_1, jobOpenings);

console.log(`
================= BEST JOB =================

Company: ${recommendation.job.company}
Position: ${recommendation.job.position}
Compatibility: ${recommendation.compatibility}%
Classification: ${compatibilityClassification(recommendation.compatibility)}

Matching Skills:
${recommendation.matchingSkills.join("\n")}

Missing Skills:
${recommendation.missingSkills.join("\n")}

`);