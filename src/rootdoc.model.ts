import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { defaultRootDocSchemaOption } from './default-schema-option.tools';
import { ISubDoc, registerSubDocSchemas, SubDoc } from './subdoc.model';

@Schema(defaultRootDocSchemaOption)
export class RootDoc {

  @Prop({ required: true })
  name: string;

  @Prop({ type: ISubDoc, required: true })
  subDoc: SubDoc;

}

export const RootDocSchema = SchemaFactory.createForClass(RootDoc);
registerSubDocSchemas(RootDocSchema.path('subDoc') as any);
