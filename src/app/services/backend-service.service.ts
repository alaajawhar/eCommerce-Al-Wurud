import { Injectable } from '@angular/core';

import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CheckoutRequest, CheckoutResponse} from "../../models/checkoutRequest";

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

  checkout(checkoutRequest: CheckoutRequest) {
    return this.http.post<CheckoutResponse>(environment.baseUrl + '/clientOrder', checkoutRequest);
  }
}
