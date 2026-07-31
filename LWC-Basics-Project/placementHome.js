import { LightningElement } from 'lwc';

export default class PlacementHome extends LightningElement {

    studentName = 'Kommula Durga Aravind';

    rollNumber = '23PA1A0484';

    department = 'ECE';

    message='';

    status='Not Applied';

    showMessage(){

        this.message='Welcome to Salesforce Development';

    }

    applyJob(){

        this.status='Applied';

    }

}
