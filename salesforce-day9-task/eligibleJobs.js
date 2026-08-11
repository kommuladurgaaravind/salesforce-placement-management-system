import { LightningElement, wire } from 'lwc';
import getEligibleJobs from '@salesforce/apex/ApplicationController.getEligibleJobs';
import { refreshApex } from '@salesforce/apex';

export default class EligibleJobs extends LightningElement {
    jobs;
    wiredJobsResult;

    @wire(getEligibleJobs)
    wiredJobs(result) {
        this.wiredJobsResult = result;
        this.jobs = result.data;
    }

    handleApply() {
        refreshApex(this.wiredJobsResult);
    }
}
