"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchByEmail = exports.editSubmission = exports.deleteSubmission = exports.read = exports.submit = exports.ping = void 0;
const submissionService = __importStar(require("../services/submissionService"));
const ping = (req, res) => {
    res.send(true);
};
exports.ping = ping;
const submit = (req, res) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    if (!name || !email || !phone || !github_link || !stopwatch_time) {
        return res.status(400).send('Missing required fields');
    }
    submissionService.addSubmission({ name, email, phone, github_link, stopwatch_time });
    res.status(201).send('Submission saved');
};
exports.submit = submit;
const read = (req, res) => {
    const index = parseInt(req.query.index, 10);
    if (isNaN(index)) {
        return res.status(400).send('Invalid index');
    }
    const submission = submissionService.getSubmission(index);
    if (!submission) {
        return res.status(404).send('Submission not found');
    }
    res.json(submission);
};
exports.read = read;
const deleteSubmission = (req, res) => {
    const index = parseInt(req.query.index, 10);
    if (isNaN(index)) {
        return res.status(400).send('Invalid index');
    }
    const success = submissionService.deleteSubmission(index);
    if (!success) {
        return res.status(404).send('Submission not found');
    }
    res.status(200).send('Submission deleted');
};
exports.deleteSubmission = deleteSubmission;
const editSubmission = (req, res) => {
    const index = parseInt(req.query.index, 10);
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    if (isNaN(index)) {
        return res.status(400).send('Invalid index');
    }
    if (!name || !email || !phone || !github_link || !stopwatch_time) {
        return res.status(400).send('Missing required fields');
    }
    const success = submissionService.updateSubmission(index, { name, email, phone, github_link, stopwatch_time });
    if (!success) {
        return res.status(404).send('Submission not found');
    }
    res.status(200).send('Submission updated');
};
exports.editSubmission = editSubmission;
const searchByEmail = (req, res) => {
    const email = req.query.email;
    if (!email) {
        return res.status(400).send('Missing email');
    }
    const submissions = submissionService.searchSubmissionsByEmail(email);
    if (submissions.length === 0) {
        return res.status(404).send('No submissions found');
    }
    res.json(submissions);
};
exports.searchByEmail = searchByEmail;
