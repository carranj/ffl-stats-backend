import { Module } from '@nestjs/common';
import { YahooService } from './yahoo.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule], // Import HttpModule here
  providers: [YahooService], // Provide YahooService here
  exports: [YahooService],
})
export class YahooModule {}