import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

/*
  create-cat.dto.ts
*/
export class CreateCatDto {
    @ApiProperty({ description: '昵称' })
    @IsNotEmpty({ message: '昵称必填' })
    readonly name: string;

    @ApiProperty({ description: '年龄' })
    @IsNotEmpty({ message: '年龄必填' })
    readonly age: number;

    @ApiProperty({ description: '品种' })
    @IsNotEmpty({ message: '品种必填' })
    readonly breed: string;
}
