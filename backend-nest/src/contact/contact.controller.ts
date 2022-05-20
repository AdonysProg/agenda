import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateContactDto } from './contact.dto';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @ApiOperation({
    summary: 'Creates a new contact',
  })
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @Post()
  async createContact(@Body() createContactDto: CreateContactDto) {
    const result = this.contactService.create(createContactDto);
    return result;
  }

  @ApiOperation({
    summary: 'Get all contacts',
  })
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @Get()
  async getContacts() {
    const result = this.contactService.findAll();
    return result;
  }

  @ApiOperation({
    summary: 'Delete contact',
  })
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @Delete()
  async deleteContact(@Query('email') email: string) {
    const result = this.contactService.delete(email);
    return result;
  }
}
