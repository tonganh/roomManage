import { Custormer } from "./custormer.entity";
import {
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PayForMonthContract } from "./payForMonthContract.entity";
import { Room_Custormer } from "./room_custormer.entity";

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Custormer, custormer => custormer.contracts)
  custormerSignContract: Custormer;

  @OneToMany(
    () => PayForMonthContract,
    payForMonthContract => payForMonthContract.contract
  )
  payforMonthContract: PayForMonthContract[];

  @OneToOne(() => Room_Custormer, room_Custormer => room_Custormer.contract)
  room_Custormer: Room_Custormer;
}
