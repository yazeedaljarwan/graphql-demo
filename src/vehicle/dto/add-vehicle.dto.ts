import { IsNumber, IsString } from "class-validator";

export class AddVehicle{

    @IsString()
    modelName: string

    @IsString()
    companyName: string

    @IsNumber()
    mileage: number
    
    @IsString()
    makeYear: string
}
