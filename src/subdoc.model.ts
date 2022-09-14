import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { defaultSubDocSchemaOption } from './default-schema-option.tools';

export enum SubDocKind {
  Foo = 'Foo',
  Bar = 'Bar',
}

@Schema({ ...defaultSubDocSchemaOption, discriminatorKey: 'kind' })
export class ISubDoc {
  kind: SubDocKind;
}

@Schema(defaultSubDocSchemaOption)
export class FooSubDoc extends ISubDoc {
  kind = SubDocKind.Foo as const;

  @Prop({ required: true })
  fooId: string;
}

@Schema(defaultSubDocSchemaOption)
export class BarSubDoc extends ISubDoc {
  kind = SubDocKind.Bar as const;

  @Prop({ required: true })
  barId: string;
}

export const FooSchema = SchemaFactory.createForClass(FooSubDoc);
export const BarSchema = SchemaFactory.createForClass(BarSubDoc);

export const registerSubDocSchemas = (schema: MongooseSchema): void => {
  schema.discriminator(SubDocKind.Foo, FooSchema);
  schema.discriminator(SubDocKind.Bar, BarSchema);
};

export const INftSourceSchema = SchemaFactory.createForClass(ISubDoc);

export type SubDoc = FooSubDoc | BarSubDoc;
