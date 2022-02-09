import { BigDecimal, BigInt } from '@graphprotocol/graph-ts';

function scaleDown(num: BigInt, decimals: i32): BigDecimal {
  return num.divDecimal(BigInt.fromI32(10).pow(u8(decimals)).toBigDecimal());
}

export function scaleDownBPT(num: BigInt): BigDecimal {
  return scaleDown(num, 18);
}