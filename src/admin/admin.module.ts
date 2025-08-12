import { Logger, Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthUserEntity } from './Entity/AuthUserEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyMasterEntity } from './Entity/CompanyMasterEntity';
import { LocationMasterEntity } from './Entity/LocationMasterEntity';
import { StateMasterEntity } from './Entity/StateMasterEntity';
import { UserPermissionMasterEntity } from './Entity/UserPermissionMasterEntity';
import { UserRoleMasterEntity } from './Entity/UserRoleMasterEntity';
import { UserRolePermissionEntity } from './Entity/UserRolePermissionEntity';
import { CounterMasterEntity } from './Entity/CounterMasterEntity';
import { LoyaltyPlanMasterEntity } from './Entity/LoyaltyPlanMasterEntity';
import { RegisterCustomerEntity } from './Entity/CustomerMasterEntity';
import { LoyaltyCardTypeEntity } from './Entity/LoyaltyCardTypeEntity';
import { RedeemPointEntity } from 'src/api/Entity/RedeemPointEntity';
import { RedeemTransactionEntity } from 'src/api/Entity/RedeemTransactionEntity';
import { CompanyTierMasterEntity } from './Entity/CompanyTierMasterEntity';
import { CompanySmsTemplateEntity } from './Entity/CompanySmsTemplateEntity';
import { BonusRecordMasterEntity } from 'src/api/Entity/BonusRecordMatserEntity';
import { LoyaltyCardTopupMasterEntity } from 'src/api/Entity/LoyaltyTopUpCardMasterEntity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      AuthUserEntity,
      CompanyMasterEntity,
      LocationMasterEntity,
      StateMasterEntity,
      UserPermissionMasterEntity,
      UserRoleMasterEntity,
      UserRolePermissionEntity,
      CounterMasterEntity,
      LoyaltyPlanMasterEntity,
      RegisterCustomerEntity,
      LoyaltyCardTypeEntity,
      RedeemPointEntity,
      RedeemTransactionEntity,
      CompanyTierMasterEntity,
      CompanySmsTemplateEntity,
      BonusRecordMasterEntity,
      LoyaltyCardTopupMasterEntity,
    ]),
  ],
  controllers: [AdminController],
  providers: [AdminService, Logger, { provide: Request, useValue: Request }],
})
export class AdminModule {}
