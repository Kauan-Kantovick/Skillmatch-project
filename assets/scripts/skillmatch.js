//==============================CLASS-CANDIDATE=========================================
class candidate {
    constructor(name, area, skills, workStyle, monthsExperience) {
        this.name = name;
        this.area = area;
        this.skills = skills;
        this.workStyle = workStyle;
        this.monthsExperience = yearsExperience;
    };
    Presentation() {
        console.log(`Hi, my name is ${this.name}, y work in the area ${this.area} whit a ${this.workStyle} work style, my skills are ${this.skills}, and y have ${this.yearsExperience} years of experience.`);
    };
}

const candidate_1 = new candidate("Ana", "Front-End", ["JavaScript", "GitHub", "Programming Logic"], "Hybrid", 3);

candidate_1.Presentation();

//==============================CLASS-JOBS=========================================

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

//==============================VIEW-JOBS=========================================

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

viewJobs(jobOpenings);

//==============================INSTANCES=========================================

const prompt = require("prompt-sync")();

let jobSelected = prompt("Enter the job ID of the position you want to compare with the candidate's profile: ");

const jobsRequirements = jobOpenings[jobSelected].requirements;

const candidateSkills = candidate_1.skills;

//==============================COMPARISON=========================================

const matchingSkills = candidateSkills.filter(skill => jobsRequirements.includes(skill));

const missingSkills = jobsRequirements.filter(requirement => candidateSkills.includes(requirement) === false);

//==============================FORMATTING=========================================

const matchingFormated = matchingSkills.map(skill => ` ${skill}`);

const missingFormated = missingSkills.map(skill => `    -${skill}`);

//==============================ANALYSES-COUNTER==============================

const createAnalysisCounter = (() => {
    let counter = 0;

    return {
        countAnalysis() {
            counter++;
            return counter;
        },

        analysisInfo() {
            return console.log(`Total analyses ${counter}`);
        }
    }
})();

//==============================COMPATIBILITY-CALCULUS-AND-MESSAGE=====================================

const fulfilledRequirements = matchingSkills.length;

const totalRequirements = jobsRequirements.length;

const compatibilityCalculus = (valA, valB) => Math.round((valA / valB) * 100);

const compatibilityRate = compatibilityCalculus(fulfilledRequirements, totalRequirements);

const compatibilityMessage = `
=================== COMPATIBILITY MESSAGE ====================
    Company: ${jobOpenings[jobSelected].company}
    Position: ${jobOpenings[jobSelected].position}
    Compatibility: ${compatibilityRate}%
    Matching Skills:${matchingFormated}
    Missing Skills: ${("\n") + missingFormated.join("\n")}
`;

const messageVerification = (compatibilityRate, createAnalysisCounter, compatibilityMessage) => {
    if (compatibilityRate >= 0){
        createAnalysisCounter.countAnalysis();
        return console.log(compatibilityMessage);
    } else {
        console.log(`ERROR`);
    }
} 

messageVerification(compatibilityRate, createAnalysisCounter, compatibilityMessage);
//==============================CLASSIFYING-COMPATIBILITY============================

const compatibilityClassification = (compatibilityRate) => {
    if (compatibilityRate === 100) {
        let total = `Total compatibility`
        return total;
    } else if (compatibilityRate <= 99 && compatibilityRate >= 80) {
        let high = `High compatibility`
        return high;
    } else if (compatibilityRate <= 79 && compatibilityRate >= 50) {
        let moderate = `Moderate compatibility`
        return moderate;
    } else if (compatibilityRate <= 49 && compatibilityRate >= 1) {
        let low = `Low compatibility`
        return low;
    } else if (compatibilityRate === 0) {
        let no = `No compatibility`
        return no;
    } else {
        let error = `Error`
        return error;
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
        
        createAnalysisCounter.countAnalysis();

        const matchingSkills = candidate.skills.filter(skill => job.requirements.includes(skill));

        const compatibility = compatibilityCalculus(matchingSkills.length, job.requirements.length);

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
createAnalysisCounter.analysisInfo();

//==============================CALLBACK==================================================

const finalAnalysis = "Analysis finalyzed.";
const candidateName = candidate_1.name;

function finalMensage (name, analyse) {
  console.log(`${name}, review your missing skills and atualize your studies plan.`);
  console.log(analyse);
}

function finalizingAnalysis(callback) {
  callback(candidateName, finalAnalysis);
}

finalizingAnalysis(finalMensage);

//==============================PROMISE-ASYNC/AWAIT==================================================

function seartingSimulations() {
    return new Promise((resolve, reject) => {

        console.log("Searting for job openings");

        setTimeout(() => {

            if(true) {
                resolve(jobOpenings.length)
            } else {
                reject("Job Openings not found");
            }
        }, 2000);
    });
}

async function iniciatingSearch() {
    const jobsUploaded = await seartingSimulations();
    console.log(`
        Jobs openings are uploaded whith success!
        Total of ${jobsUploaded} jobs are founded.
        `);
}

iniciatingSearch();

// jobOpenings.find(item => item.id === o que usuario selecionou)

// const jobSelected = Number(prompt('Informe o id'))

// const jobEncontrado = jobOpenings.find(job => job.id === jobSelected)

// if (!jobEncontrado) {
//   alert('Vaga não encontrada')
//   return
// }

// const { requirements, company } = jobEncontrado
// const requirements = jobEncontrado.requirements
// const company = jobEncontrado.company
// padronizar em PascalCase
