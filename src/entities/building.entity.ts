import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./room.entity";

@Entity()
export class Building {
  @PrimaryGeneratedColumn()
  building_Id: number;

  @Column()
  name: string;

  @OneToMany(() => Room, Room => Room.building_Id)
  rooms: Room[];
}
