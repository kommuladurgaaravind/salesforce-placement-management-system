import { LightningElement, api } from 'lwc';
import submitApplication from '@salesforce/apex/ApplicationController.submitApplication';

export default class JobCard extends LightningElement {
    @api job;
    state = 'ready';
    errorMessage = '';

    get isReady() { return this.state === 'ready'; }
    get isSubmitting() { return this.state === 'submitting'; }
    get isSuccess() { return this.state === 'success'; }
    get isError() { return this.state === 'error'; }

    async handleApply() {
        this.state = 'submitting';
        try {
            await submitApplication({ jobId: this.job.Id });
            this.state = 'success';
            this.dispatchEvent(new CustomEvent('apply', { detail: { jobId: this.job.Id } }));
        } catch (error) {
            this.state = 'error';
            this.errorMessage = error.body?.message || 'We could not submit your application. Please try again.';
        }
    }
}
