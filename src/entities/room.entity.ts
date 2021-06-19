import { Contract } from "./contract.entity";
import { Room_Custormer } from "./room_custormer.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Building } from "./building.entity";
import { Accessories } from "./accessories.entity";

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  money: string;

  @ManyToOne(() => Building, building => building.rooms)
  building_Id: Building;

  @OneToMany(() => Room_Custormer, roomCustormer => roomCustormer.room)
  contracts: Contract[];

  // @ManyToOne(() => Accessories, accessories => accessories.room)
  // accessories: Accessories[];
}
