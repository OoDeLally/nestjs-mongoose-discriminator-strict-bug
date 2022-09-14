import { SchemaOptions } from 'mongoose';

const defaultDocSchemaOption: SchemaOptions = {
  versionKey: false,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  strictQuery: 'throw', // Do not silently remove unknown filters in our back, because this can lead to unexpected results while refactoring things.
};

export const defaultRootDocSchemaOption: SchemaOptions = {
  ...defaultDocSchemaOption,
  _id: true,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
};

export const defaultSubDocSchemaOption: SchemaOptions = {
  ...defaultDocSchemaOption,
  _id: false,
};
