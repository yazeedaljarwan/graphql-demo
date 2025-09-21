import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './vehicle.entity';
import { Repository } from 'typeorm';
import { AddVehicle } from './dto/add-vehicle.dto';

@Injectable()
export class VehicleService {
    constructor(@InjectRepository(Vehicle) private repo : Repository<Vehicle>){}

    async addVehicle(vehicle : AddVehicle){
        return this.repo.save(vehicle)
    }

    fetchAllVehicles(){
        return this.repo.find()
    }

    fetchMyVehicles(modelName : string){
        return this.repo.findBy({modelName})
    }
}
