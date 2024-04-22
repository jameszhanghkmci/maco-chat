export const MIGRATE_KEY = 'migrated';
export enum UpgradeStatus {
  START,
  UPGRADING,
  UPGRADED,
  UPGRADE_FAILED,
}

export const V1DB_NAME = 'MacoHub';
export const V1DB_TABLE_NAME = 'MACO_CHAT';

export interface MigrationError {
  message: string;
  stack: string;
}
