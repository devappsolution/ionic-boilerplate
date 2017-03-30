import { Component } from "@angular/core";

export class ComponentsModel {
    name: string;
    page: any;

    constructor(name: string, page: any) {
        this.name = name;
        this.page = page;
    }
}