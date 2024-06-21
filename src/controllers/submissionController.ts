import { Request, Response } from 'express';
import * as submissionService from '../services/submissionService';

export const ping = (req: Request, res: Response) => {
    res.send(true);
};

export const submit = (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;

    if (!name || !email || !phone || !github_link || !stopwatch_time) {
        return res.status(400).send('Missing required fields');
    }

    submissionService.addSubmission({ name, email, phone, github_link, stopwatch_time });
    res.status(201).send('Submission saved');
};

export const read = (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string, 10);

    if (isNaN(index)) {
        return res.status(400).send('Invalid index');
    }

    const submission = submissionService.getSubmission(index);
    if (!submission) {
        return res.status(404).send('Submission not found');
    }

    res.json(submission);
};

export const deleteSubmission = (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string, 10);

    if (isNaN(index)) {
        return res.status(400).send('Invalid index');
    }

    const success = submissionService.deleteSubmission(index);
    if (!success) {
        return res.status(404).send('Submission not found');
    }

    res.status(200).send('Submission deleted');
};

export const editSubmission = (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string, 10);
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

export const searchByEmail = (req: Request, res: Response) => {
    const email = req.query.email as string;

    if (!email) {
        return res.status(400).send('Missing email');
    }

    const submissions = submissionService.searchSubmissionsByEmail(email);
    if (submissions.length === 0) {
        return res.status(404).send('No submissions found');
    }

    res.json(submissions);
};
