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

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Room_Custormer, roomCustormer => roomCustormer.room_Id)
  room_Id: number;

  @Column()
  money: string;

  @ManyToOne(() => Building, building => building.rooms)
  building_Id: Building;
}
