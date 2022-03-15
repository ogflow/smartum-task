import AddressType from "../core/AddressType";

type VenuesType = {
  id: string;
  name: string;
  address: AddressType;
  accepted_benefits: string[];
  accepted_payment_methods: string[];
  phone: string;
  email: string;
  website: string;
  description: string;
};

export default VenuesType;