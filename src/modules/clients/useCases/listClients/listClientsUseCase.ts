import { clients } from "@prisma/client";
import "reflect-metadata"
import { inject, injectable } from "tsyringe";
import { IClientsRepository } from "../../repositories/IClientsRepository";


@injectable()
class ListClientsUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
    ) {}
  async execute(): Promise<clients[]> {

    const clients = await this.clientsRepository.listClients()

    return clients;
  }
}

export {ListClientsUseCase};