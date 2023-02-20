import "reflect-metadata"
import { inject, injectable } from "tsyringe";
import { IClientsRepository } from "../../repositories/IClientsRepository";

interface IRequest {
  name: string;
  email: string;
  telefone: string;
  idade: string;
  linkedin: string;
  anotacoes: string;
}

@injectable()
class CreateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
    ) {}
  async execute({name, email, telefone, idade, linkedin, anotacoes}: IRequest): Promise<void> {

    await this.clientsRepository.create({name, email, telefone, idade, linkedin, anotacoes})
  }
}

export {CreateClientUseCase};