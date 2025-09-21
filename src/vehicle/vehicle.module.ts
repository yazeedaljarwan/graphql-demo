import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { VehicleResolver } from './Vehicle-resolver';
import { Vehicle } from './vehicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])], // <-- THIS is what wires VehicleRepository
  providers: [VehicleService, VehicleResolver],
})
export class VehicleModule {}
