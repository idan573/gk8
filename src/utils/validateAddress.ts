import { Keccak } from "sha3";

function isChecksumAddress(address: string) {
  debugger;
  // Check each case
  address = address.replace("0x", "");
  const sha3 = new Keccak(256);
  sha3.update(address);
  const addressHash = sha3.digest("hex");
  for (let i = 0; i < 40; i++) {
    // the nth letter should be uppercase if the nth digit of casemap is 1
    if (
      (parseInt(addressHash[i], 16) > 7 &&
        address[i].toUpperCase() !== address[i]) ||
      (parseInt(addressHash[i], 16) <= 7 &&
        address[i].toLowerCase() !== address[i])
    ) {
      console.log("Error: Checksum failed!!");

      return false;
    }
  }
  return true;
}

export function validateEthAddress(address: string) {
  console.log("validating eth address!");

  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    // check if it has the basic requirements of an address
    console.log("Illegal eth address structure");
    return false;
  } else if (
    /^(0x)?[0-9a-f]{40}$/.test(address) ||
    /^(0x)?[0-9A-F]{40}$/.test(address)
  ) {
    // If it's all small caps or all all caps, return true
    return true;
  } else {
    // Otherwise check each case
    return isChecksumAddress(address);
  }
}
