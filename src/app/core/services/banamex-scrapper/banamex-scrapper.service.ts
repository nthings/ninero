import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class BanamexScrapperService {
    constructor() {}

    scrape(): void {
        console.log("scrape");
    }
}