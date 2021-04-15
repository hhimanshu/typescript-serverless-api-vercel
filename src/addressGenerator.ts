import faker from "faker";

export type AllowedAddressTypes =
  | "zipCode"
  | "city" /*|
  | "zipCodeByState"
    "cityPrefix" |
    "citySuffix" |
    "streetName" |
    "streetAddress" |
    "streetSuffix" |
    "streetPrefix" |
    "secondaryAddress" |
    "county" |
    "country" |
    "countryCode" |
    "state" |
    "stateAbbr" |
    "latitude" |
    "longitude" |
    "direction" |
    "cardinalDirection" |
    "ordinalDirection" |
    "nearbyGPSCoordinate" |
    "timeZone"*/;

export interface AddressProps {
  total: number;
  type: AllowedAddressTypes;
}

export const addressGenerator = (total: number, type: AllowedAddressTypes) => {
  const f = getExecutable(type);
  return Array.from({ length: total }, () => f());
};

const getExecutable = (type: AllowedAddressTypes): Function => {
  const address = faker.address;
  const mapping: Map<AllowedAddressTypes, Function> = new Map<
    AllowedAddressTypes,
    Function
  >();
  mapping.set("zipCode", address.zipCode);
  mapping.set("city", address.city);
  return mapping.get(type);
};
