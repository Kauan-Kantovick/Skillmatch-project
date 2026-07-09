class candidate {
    constructor(name, area, skills, workStyle, monthsExperience) {
        this.name = name;
        this.area = area;
        this.skills = skills;
        this.workStyle = workStyle;
        this.monthsExperience = monthsExperience;
    }
}

const candidate_1 = new candidate("Ana", "Front-End", ["JavaScript", "GitHub", "Programming Logic"], "Hybrid", 3);

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
/*
const jobsLength = jobOpenings.length;

const viewJobs = (jobsLength, jobOpenings) => {
    let i = 0
    while (i < jobsLength){
        let mensagem = `
            Vaga Indice ${i}:
            ID:${jobOpenings[i].id},
            COMPANY:${jobOpenings[i].company},
            POSITION:${jobOpenings[i].position},
            REQUIREMENTS:${jobOpenings[i].requirements},
            SALARY:${jobOpenings[i].salary},
            WORK-STYLE:${jobOpenings[i].workStyle},
            YEARS-EXPERIENCE:${jobOpenings[i].yearsExperience}.
        `
        console.log(mensagem);
        operator++;
    }
}

const dwadwad = viewJobs(jobOpenings);

console.log(dwadwad);
*/

const frutas = ["Maçã", "Banana", "Uva"];

function mostrarFrutas(frutas){
    let i = 0;
    while(i < frutas.length) {
        return `${("\n") + frutas[i]}`
        i++;
    }
}

console.log(mostrarFrutas(frutas));

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

const matchingFormated = matchingSkills.map (skill => ` ${skill}`);

const missingFormated = missingSkills.map (skill => `    -${skill}`);

//==============================APPLIED-LOGIC=====================================
// For each candidate skill that is included in the job posting requirements,
// return its name. If it does not match, do nothing.

const fulfilledRequirements = matchingSkills.length;

const totalRequirements = jobsRequirements.length;

const compatibilityCalculus = (valA, valB) => (valA / valB) * 100;

const compatibilityRate = compatibilityCalculus(fulfilledRequirements, totalRequirements);

const compatibilityMessage = `
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
    Checking Compatibility:
    ${chekingCompatibility}
`;

console.log(showingCompatibility);



//==============================RECOMMENDED-STUDIES=========================================

const recommendedStudies = `
    Recommendation for further study:
    Priotize study: ${("\n") + missingFormated.join("\n")} 
`;

console.log(recommendedStudies);

//==============================BETTER-COMPATIBILITY=========================================

function matchingJobs(jobOpenings, candidateSkills) {
    let sldla = jobOpenings[1].requirements;

    let matchingSkills = candidateSkills.filter(skill =>
        sldla.includes(skill)
    );

    let missingSkills = sldla.filter(requirement =>
        candidateSkills.includes(requirement) === false
    );

    const daiwoid = matchingSkills.length;

    const dawda =  candidateSkills.length;

    const compatibilitywdadRate = compatibilityCalculus(daiwoid, dawda);

    console.log (`ndawndaoi ${compatibilitywdadRate}`);

}

matchingJobs(jobOpenings, candidateSkills);