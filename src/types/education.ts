export type Education = {
    institution: string;
    degree: string;
    period: string;           // e.g. "2018 – 2022"
    description?: string;     // optional detail
    techStack?: string[];     // optional, e.g. "React, Node.js"
};