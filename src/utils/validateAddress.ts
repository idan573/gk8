import Web3 from "web3";
function isChecksumAddress(address: string) {
  return Web3.utils.isAddress(address);
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
