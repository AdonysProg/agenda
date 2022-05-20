import { CreateContactDto } from './contact.dto';
import { ContactService } from './contact.service';
export declare class ContactController {
    private contactService;
    constructor(contactService: ContactService);
    createContact(createContactDto: CreateContactDto): Promise<import("./contact.schema").Contact>;
    getContacts(): Promise<import("./contact.schema").Contact[]>;
    deleteContact(email: string): Promise<void>;
}
