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
  @OneToOne(
    () => PayForMonthContract,
    payForMotnhContract => payForMotnhContract.contract_Id
  )
  @OneToOne(() => Room_Custormer, room_Custormer => room_Custormer.contract_Id)
  @OneToMany(
    () => PayForMonthContract,
    payForMonthContract => payForMonthContract.contract_Id
  )
  contract_Id: number;

  @ManyToOne(() => Custormer, custormer => custormer.custormer_Id)
  personalSigning_Id: number;

  @OneToOne(
    () => Room_Custormer,
    room_Custormer => room_Custormer.room_custormer_Id
  )
  room_custormer_Id: number;
}
