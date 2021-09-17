import { TargetBinder } from "@angular/compiler";
import { Trainer } from "./trainer.model";
import { Client } from "./client.model";

export type Course = {
    id: number,
    code: string,
    name: string,
    date: Date,
    duration: number,
    trainer: Trainer,
    client: Client
}