import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    constructor() { }
    
    setItem(key: string, value: string): void {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem(key, value);
        }
    }

    getItem(key: string) {
        var data = '{}';
        if (typeof window !== 'undefined' && window.localStorage) {
            data = localStorage.getItem(key) || '{}';
        }
        return data;
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    clear(): void {
        localStorage.clear();
    }
}
