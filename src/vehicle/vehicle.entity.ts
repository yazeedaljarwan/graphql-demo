import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehicle{

    @PrimaryGeneratedColumn() 
    id: number

    @Column({name:"company_name"})
    companyName : string
    
    @Column({name: "model_name"})
    modelName : string
    
    @Column({name: "mileage"})
    mileage : number

    @Column({name: "make_year"})
    makeYear : string
}
