export interface CheckoutRequest {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  district: string;
  address: string;
  zipCode: string;
  message: string;
  items: string[]
}

export interface CheckoutResponse {
  isError: boolean;
  errorMessage: string;
}
