export class Computer {
    name: string;
    cpu: string;
    gpu: string;
    ram: string;
    storage: string[];
    compcase: string;
    cpucooler: string;
    purpose: object[];
    constructor(name: string,
                cpu: string,
                gpu: string,
                ram: string,
                storage: string[],
                os: string,
                compcase: string,
                cpucooler: string,
                purpose: object[]) {
        this.name = name;
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.storage = storage;
        this.compcase = compcase;
        this.cpucooler = cpucooler;
        this.purpose = purpose;
    }
}
