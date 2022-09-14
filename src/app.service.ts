import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RootDoc } from './rootdoc.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(RootDoc.name) private model: Model<RootDoc>,
  ) {}

  async getDocsByFooId(fooId: string): Promise<RootDoc[]> {
    return await this.model.find({
      'subDoc.fooId': fooId,
    }).exec();
  }
}
