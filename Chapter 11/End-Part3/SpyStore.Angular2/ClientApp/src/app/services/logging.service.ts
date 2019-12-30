import {Injectable} from '@angular/core';


@Injectable()
export class LoggingService {

    constructor() { }

    logError(message: string, err: any) {
        let msg = message;
        if (err && err.json) {
          msg += '\r\n' + err.json().Message;
        }
        this.showPopup(msg);
        console.log(err);
    }

    showPopup(message: string) {
        alert(message);
    }

    log(message: string) {
        console.log(message);
    }
}
