import {
    Controller,
    Get,
    Post,
    Param,
    Body,
    Put,
    Delete,
} from '@nestjs/common';
import MenuService from '../services/menu.service';
import Menu from '../models/menu.entity';
import ParseIntPipe from '../../pipes/Parse-int.pipe';

@Controller('menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) {}

    @Get('/all')
    async getDetails(@Param('id') id): Promise<Menu[]> {
        return this.menuService.getAll();
    }

    @Get('/:id')
    getAll(@Param('id', new ParseIntPipe()) id: number): Promise<Menu> {
        return this.menuService.get({ id });
    }

    @Post()
    async create(@Body() menu) {
        return this.menuService.create(menu);
    }

    @Put()
    async edit(@Body() dish) {
        return this.menuService.update(dish);
    }

    @Delete('/:id')
    async remove(@Param('id') id: string) {
        return this.menuService.delete(+id);
    }
}
