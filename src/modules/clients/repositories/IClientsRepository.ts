import { ICreateClientDTO } from "../dtos/ICreateClientDTO";

interface IClientsRepository {
  create({name, email, telefone, idade, linkedin, anotacoes}: ICreateClientDTO): Promise<void>
}

export {IClientsRepository};