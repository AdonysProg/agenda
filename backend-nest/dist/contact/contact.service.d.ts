import { Model } from 'mongoose';
import { Contact, ContactDocument } from './contact.schema';
import { CreateContactDto, UpdateContactDto } from './contact.dto';
export declare class ContactService {
    private contactModel;
    constructor(contactModel: Model<ContactDocument>);
    create(createContactDto: CreateContactDto): Promise<Contact>;
    findAll(): Promise<Contact[]>;
    delete(contactEmail: string): Promise<void>;
    update(_id: string, contactUpdate: UpdateContactDto): Promise<Contact>;
}
