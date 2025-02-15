import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseService {
  create(key: string, id: string | number) {
    return {
      message: `${key} is created successfully`,
      id,
    };
  }
  findList(key: string, data) {
    return {
      message: `Find list of ${key} is successfully`,
      data: data,
    };
  }
  findOne(key: string, data) {
    return {
      message: `Find by ${key} is successfully`,
      data: data,
    };
  }
  updateOne(key: string, id: string | number) {
    return {
      message: `${key} is Updated successfully`,
      id,
    };
  }
  updateList(key: string) {
    return {
      message: `${key} is Updated successfully`,
    };
  }
  deleteOne(key: string, id: string | number) {
    return {
      message: `${key} is deleted successfully`,
      id,
    };
  }
}
