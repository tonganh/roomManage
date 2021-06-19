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

  @ManyToOne(() => Contract, contract => contract.id)
  contract: Contract;

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
