"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchSubmissionsByEmail = exports.updateSubmission = exports.deleteSubmission = exports.getSubmission = exports.addSubmission = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbPath = path_1.default.join(__dirname, '../db.json');
const readDatabase = () => {
    if (!fs_1.default.existsSync(dbPath)) {
        fs_1.default.writeFileSync(dbPath, JSON.stringify([]));
    }
    const data = fs_1.default.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
};
const writeDatabase = (data) => {
    fs_1.default.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};
const addSubmission = (submission) => {
    const submissions = readDatabase();
    submissions.push(submission);
    writeDatabase(submissions);
};
exports.addSubmission = addSubmission;
const getSubmission = (index) => {
    const submissions = readDatabase();
    return submissions[index] || null;
};
exports.getSubmission = getSubmission;
const deleteSubmission = (index) => {
    const submissions = readDatabase();
    if (index < 0 || index >= submissions.length) {
        return false;
    }
    submissions.splice(index, 1);
    writeDatabase(submissions);
    return true;
};
exports.deleteSubmission = deleteSubmission;
const updateSubmission = (index, updatedSubmission) => {
    const submissions = readDatabase();
    if (index < 0 || index >= submissions.length) {
        return false;
    }
    submissions[index] = updatedSubmission;
    writeDatabase(submissions);
    return true;
};
exports.updateSubmission = updateSubmission;
const searchSubmissionsByEmail = (email) => {
    const submissions = readDatabase();
    return submissions.filter(submission => submission.email === email);
};
exports.searchSubmissionsByEmail = searchSubmissionsByEmail;
