import { test } from "./Itest";



export class dtest implements test{
    field1!: string;
    field2!: string;

    constructor(resp:test){
        this.field1 = resp.field1
        this.field2 = resp.field2
    }

}