import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Room_Custormer } from "./room_custormer.entity";

@Entity()
export class Custormer {
  @PrimaryGeneratedColumn()
  custormer_Id: number;

  @ManyToOne(
    () => Room_Custormer,
    room_Customer => room_Customer.room_custormer_Id
  )
  room_custormer_Id: number;

  @Column()
  name: string;

  @Column()
  work: string;

  @Column({ type: "timestamptz" })
  dob: Date;

  @Column()
  hometown: string;
}
