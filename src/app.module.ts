import { Module } from '@nestjs/common';
import { ConfigModule } from '@service/config';
import { LoggerModule } from '@service/logger';
import { EmailModule } from '@service/email';

@Module({
  imports: [ConfigModule, LoggerModule, EmailModule],
})
export class AppModule {}
