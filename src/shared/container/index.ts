import {container} from "tsyringe";
import { ClientsRepository } from "../../modules/clients/infra/repositories/ClientsRepository";
import { IClientsRepository } from "../../modules/clients/repositories/IClientsRepository";


container.register<IClientsRepository>("ClientsRepository", ClientsRepository);
