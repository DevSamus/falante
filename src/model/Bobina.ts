import {
  BobinaType,
  Enrolamento,
  Impedance,
  Materiais,
  Tipo,
} from "../types/bobina";
class Bobina implements Product {
  valor: number;
  discretion!: string;
  estoque?: number;
  bobina!: BobinaType;

  constructor(valor: number, discretion?: string, bobina?: BobinaType) {
    this.valor = valor;
    if (discretion) this.discretion = discretion;
    if (bobina) this.bobina = bobina;
  }
}
