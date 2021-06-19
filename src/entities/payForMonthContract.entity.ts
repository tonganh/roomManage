import { Contract } from "./contract.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class PayForMonthContract {
  @PrimaryGeneratedColumn()
  payMonth_Id: number;

  @ManyToOne(() => Contract, contract => contract.contract_Id)
  contract_Id: number;

  @Column()
  totalElectric: number;

  @Column()
  totalWater: number;

  @Column()
  serviceChange: number;

  @Column()
  notePayForNextMonth: number;

  @Column({ type: "timestamptz" })
  from: Date;

  @Column({ type: "timestamptz" })
  to: Date;
}
