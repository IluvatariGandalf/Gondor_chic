import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Client } from '../../model/client/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

    constructor(private http: HttpClient) { }

    public sIdentifier(client: Client){
        return this.http.post(`${environment.API_BASE_URL}/connexion`, client);
    }
}
