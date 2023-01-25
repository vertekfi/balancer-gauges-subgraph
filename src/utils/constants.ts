import { Address, BigInt, dataSource } from '@graphprotocol/graph-ts';

export const ZERO = BigInt.fromI32(0);
export const ONE = BigInt.fromI32(1);
export const ZERO_BD = ZERO.toBigDecimal();
export const ONE_BD = ZERO.toBigDecimal();

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export class AddressByNetwork {
  public mainnet: string;
  public goerli: string;
}

let network: string = dataSource.network();

let controllerAddressByNetwork: AddressByNetwork = {
  mainnet: '',
  goerli: '0x7bC6C2bF0c730E03285f673806586C60AC0B3205',
};

function forNetwork(
  addressByNetwork: AddressByNetwork,
  network: string,
): Address {
  if (network == 'mainnet') {
    return Address.fromString(addressByNetwork.mainnet);
  }
  return Address.fromString(addressByNetwork.goerli);
}

export const CONTROLLER_ADDRESS = forNetwork(
  controllerAddressByNetwork,
  network,
);

// TODO: update
export const VAULT_ADDRESS = Address.fromString(
  '0xBA5CE8dFcB1E077B4537aCaD17400D843842c520',
);
// TODO: update
export const MAINNET_GAUGE_V2_FACTORY = Address.fromString(
  '0x70Bb570d76b3c83bcE8C36993fFC1aF7Ac407a63',
);

export function isV2Factory(factory: Address): boolean {
  return [MAINNET_GAUGE_V2_FACTORY].includes(factory);
}
