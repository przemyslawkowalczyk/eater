import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export default class ParseIntPipe implements PipeTransform<string, number> {
    transform(value: string, metadata: ArgumentMetadata): number {
        const val = Number(value);
        if (isNaN(val)) {
            throw new BadRequestException('Validation failed');
        }
        return val;
    }
}