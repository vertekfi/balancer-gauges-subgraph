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
  goerli: '0x10320e8318bFF7259ecf94f9aF03ceA62B1B30D0',
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
  '0xD8a14084e92d6187F1945cB31995d67de54906cD',
);
// TODO: update
export const MAINNET_GAUGE_V2_FACTORY = Address.fromString(
  '0x3a31977D0901bC227cd42b310E3B97B3c971e33A',
);

export function isV2Factory(factory: Address): boolean {
  return [MAINNET_GAUGE_V2_FACTORY].includes(factory);
}
