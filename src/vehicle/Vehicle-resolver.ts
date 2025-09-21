import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Vehicle } from 'src/vehicle/vehicle.entity';
import { AddVehicle } from 'src/vehicle/dto/add-vehicle.dto';
import { VehicleService } from 'src/vehicle/vehicle.service';

@Resolver('Vehicle')
export class VehicleResolver {
  constructor(private readonly vehicleService: VehicleService) {}

  @Mutation('addVehicle')
  async addVehicle(
    @Args('vehicle') vehicle: AddVehicle,
  ): Promise<Vehicle> {
    return this.vehicleService.addVehicle(vehicle);
  }

  @Query('getVehicle')
  async getVehicle(
    @Args('modelName') modelName: string
  ){
    return this.vehicleService.fetchMyVehicles(modelName)
  }

  @Query('getAllVehicles')
  async getAllVehicles(){
    return this.vehicleService.fetchAllVehicles()
  }

    @Query(() => String)
  async hello() {
    return 'Hello GraphQL!';
  }
}