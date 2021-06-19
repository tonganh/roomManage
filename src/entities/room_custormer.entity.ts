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
  id: number;

  @ManyToOne(() => Room, room => room.contracts)
  room: Room;

  @OneToOne(() => Contract, contract => contract.room_Custormer)
  contract: Contract;

  @OneToMany(() => Custormer, custormer => custormer.id)
  custormer: Custormer[];
}
