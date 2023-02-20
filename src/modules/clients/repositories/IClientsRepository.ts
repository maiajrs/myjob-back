import { clients } from "@prisma/client";
import { ICreateClientDTO } from "../dtos/ICreateClientDTO";

interface IClientsRepository {
  create({name, email, telefone, idade, linkedin, anotacoes}: ICreateClientDTO): Promise<void>
  listClients(): Promise<clients[]>
}

export {IClientsRepository};