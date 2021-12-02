//import { DatePipe } from "@angular/common";

export class Child {
    id?: number;
    employee_id: number;
    full_name: string;
    nick_name: string;
    gender_id: number;
    order: number;
    birth_place: string;
    birth_date: string; //Date;
    has_bpjs_kesehatan: number;
    bpjs_kesehatan_number: string;
    bpjs_kesehatan_date: string; //Date;
    bpjs_kesehatan_class: string; //BPJSKesehatanClass;
    is_active: number;
    create_at?: string; //Date;
    update_at?: string; //Date;
    delete_at?: string; //Date;
}
