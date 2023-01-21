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
  goerli: '0x88FA9a8887DdB5d7F27d5a9A10fb70aEf47dd2F1',
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
  '0x1F56FDcB9E3a818E4BB2E6Fe2cb73F7385D3Aeac',
);
// TODO: update
export const MAINNET_GAUGE_V2_FACTORY = Address.fromString(
  '0x2CDc11df05f38b76B1F19989Edb5691EF3B7f732',
);

export function isV2Factory(factory: Address): boolean {
  return [MAINNET_GAUGE_V2_FACTORY].includes(factory);
}
