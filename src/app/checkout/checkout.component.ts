import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CheckoutRequest} from "../../models/checkoutRequest";
import {BackendService} from "../services/backend-service.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutRequest: CheckoutRequest = {
    items: [],
    lastName: "",  address: "", country: "", district: "", email: "", message: "", name: "", phoneNumber: "", zipCode: ""
  };


  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
  }

  onSubmit(formDetails: NgForm) {
    console.log(formDetails.value.name);
    console.log(formDetails.value.email);
  }

  onCheckout() {
    console.log(this.checkoutRequest!.name);
    console.log(this.checkoutRequest!.lastName);
    this.checkoutRequest.items.push("1")
    this.checkoutRequest.items.push("2")
    this.checkoutRequest.items.push("3")
    this.backendService.checkout(this.checkoutRequest).subscribe();
  }


}
