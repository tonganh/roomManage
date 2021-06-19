import { Contract } from "./contract.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Room_Custormer } from "./room_custormer.entity";

@Entity()
export class Custormer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Room_Custormer, room_Customer => room_Customer.custormer)
  room_Custormer: Room_Custormer;

  @Column()
  name: string;

  @Column()
  work: string;

  @Column({ type: "timestamptz" })
  dob: Date;

  @Column()
  hometown: string;

  @OneToMany(() => Contract, contract => contract.custormerSignContract)
  contracts: Contract[];
}
