import { Request } from 'express';
export interface IGetUserAuthInfoRequest extends Request {
  userAgent: string,
  ipAddress: string
}
