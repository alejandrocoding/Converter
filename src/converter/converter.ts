import { UnitEnum, UnitFactory } from './index';

export class Converter {
  static convert(value: number, unitFrom: UnitEnum, unitTo: UnitEnum) {
    const _unitFrom = UnitFactory.getInstance(unitFrom);
    const _unitTo = UnitFactory.getInstance(unitTo);
    return value * _unitTo.weight / _unitFrom.weight;
  }
}
