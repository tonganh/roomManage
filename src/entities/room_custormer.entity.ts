import { Contract } from "./contract.entity";
import { Custormer } from "./custormer.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Room } from "./room.entity";

@Entity()
export class Room_Custormer {
  @PrimaryGeneratedColumn()
  @ManyToOne(() => Custormer, custormer => custormer.custormer_Id)
  room_custormer_Id: number;

  @ManyToOne(() => Room, room => room.room_Id)
  room_Id: number;

  @OneToOne(() => Contract, contract => contract.contract_Id)
  contract_Id: number;

  @OneToMany(() => Custormer, custormer => custormer.custormer_Id)
  custormers: Custormer[];
}
