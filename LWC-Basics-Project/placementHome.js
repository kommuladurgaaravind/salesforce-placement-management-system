import { LightningElement } from 'lwc';

export default class PlacementHome extends LightningElement {
    todayDate = new Date().toLocaleDateString();
    studentName = 'Kommula Durga Aravind';
    rollNumber = '23PA1A0484';
    department = 'ECE';

    numCompanies = 25;
    numJobs = 63;
    numApplications = 5;

    welcomeMessage = '';
    applicationStatus = 'Not Applied';

    handleShowMessage() {
        this.welcomeMessage = 'Welcome to Salesforce Development.';
    }

    handleToggleStatus() {
        this.applicationStatus = this.applicationStatus === 'Not Applied' ? 'Applied' : 'Not Applied';
    }
}
