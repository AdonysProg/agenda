import { Model } from 'mongoose';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Contact, ContactDocument } from './contact.schema';
import { CreateContactDto } from './contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
  ) {}

  async create(createContactDto: CreateContactDto): Promise<Contact> {
    const contact = new this.contactModel(createContactDto);
    try {
      const result = await contact.save();
      return result;
    } catch (err) {
      throw new ConflictException({
        message: 'This email is duplicated',
        email: contact.email,
        code: err.code,
      });
    }
  }

  async findAll(): Promise<Contact[]> {
    return this.contactModel.find().exec();
  }

  async delete(contactEmail: string): Promise<void> {
    return this.contactModel.findOneAndDelete({ email: contactEmail });
  }
}
