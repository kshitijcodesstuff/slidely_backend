import fs from 'fs';
import path from 'path';
import { Submission } from '../models/submission';

const dbPath = path.join(__dirname, '../db.json');

const readDatabase = (): Submission[] => {
    if (!fs.existsSync(dbPath)) {
        fs.writeFileSync(dbPath, JSON.stringify([]));
    }
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
};

const writeDatabase = (data: Submission[]) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

export const addSubmission = (submission: Submission) => {
    const submissions = readDatabase();
    submissions.push(submission);
    writeDatabase(submissions);
};

export const getSubmission = (index: number): Submission | null => {
    const submissions = readDatabase();
    return submissions[index] || null;
};

export const deleteSubmission = (index: number): boolean => {
    const submissions = readDatabase();
    if (index < 0 || index >= submissions.length) {
        return false;
    }
    submissions.splice(index, 1);
    writeDatabase(submissions);
    return true;
};

export const updateSubmission = (index: number, updatedSubmission: Submission): boolean => {
    const submissions = readDatabase();
    if (index < 0 || index >= submissions.length) {
        return false;
    }
    submissions[index] = updatedSubmission;
    writeDatabase(submissions);
    return true;
};

export const searchSubmissionsByEmail = (email: string): Submission[] => {
    const submissions = readDatabase();
    return submissions.filter(submission => submission.email === email);
};
