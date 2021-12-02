import { Child } from './child';
import { FormalEducationHistory } from './formal-education-history';
import { NonFormalEducationHistory } from './non-formal-education-history';
import { OrganizationHistory } from './organization-history';
import { RegistrationLetter } from './registration-letter';
import { WorkAgreementLetter } from './work-agreement-letter';
import { WorkCompetence } from './work-competence';
import { WorkExperience } from './work-experience';

// import { DatePipe } from "@angular/common";

export class Employee {
  id?: number;
  is_active?: number;
  create_at?: string; // Date;
  update_at?: string; // Date;
  delete_at?: string; // Date;

  company_id: number;
  gender_id: number;
  religion_id: number;
  marital_status_id: number;
  bank_id: number;
  work_area_id: number;
  work_unit_id: number;
  position_id: number;
  office_id: number;

  nip: string;
  full_name: string;
  nick_name: string;
  birth_place: string;
  birth_date: string; // Date;
  address: string;
  phone: string;
  mobile: string;
  email: string;
  identity_number: string;
  identity_address: string;
  has_drive_license_a: number;
  drive_license_a_number: string;
  drive_license_a_date: string; // Date;
  has_drive_license_b: number;
  drive_license_b_number: string;
  drive_license_b_date: string; // Date;
  has_drive_license_c: number;
  drive_license_c_number: string;
  drive_license_c_date: string; // Date;

  mate_as: string; // MateStatus;
  mate_full_name: string;
  mate_nick_name: string;
  mate_birth_place: string;
  mate_birth_date: string; // Date;
  mate_occupation: string;
  has_mate_bpjs_kesehatan: number;
  mate_bpjs_kesehatan_number: string;
  mate_bpjs_kesehatan_date: string; // Date;
  mate_bpjs_kesehatan_class: string; // BPJSKesehatanClass;

  has_npwp: number;
  npwp_number: string;
  npwp_date: string; // Date;
  npwp_status: string; // NPWPStatus;
  has_bpjs_tenaga_kerja: number;
  bpjs_tenaga_kerja_number: string;
  bpjs_tenaga_kerja_date: string; // Date;
  bpjs_tenaga_kerja_class: string; // BPJSTenagaKerjaClass;
  has_bpjs_kesehatan: number;
  bpjs_kesehatan_number: string;
  bpjs_kesehatan_date: string; // Date;
  bpjs_kesehatan_class: string; // BPJSKesehatanClass;
  account_number: string;
  dplk_number: string;
  collective_number: string;
  english_ability: string;
  computer_ability: string;
  other_ability: string;

  // salary tab
  base_salary: number;
  allowance: number;

  // administration tab
  join_date: string;
  work_status: number;

  childs?: Child[];
  work_experiences?: WorkExperience[];
  work_competences?: WorkCompetence[];
  formal_education_histories?: FormalEducationHistory[];
  non_formal_education_histories?: NonFormalEducationHistory[];
  organization_histories?: OrganizationHistory[];
  work_agreement_letters?: WorkAgreementLetter[];
  registration_letters?: RegistrationLetter[];

}
/*
enum MateStatus {
  "hb" = "Husband",
  "wf" = "Wife"
}

enum NPWPStatus {
  "TK/0",
  "TK/1",
  "TK/2",
  "TK/3",
  "K/0",
  "K/1",
  "K/2",
  "K/3",
  "KI/0",
  "KI/1",
  "KI/2",
  "KI/3"
}

enum BPJSTenagaKerjaClass {
  "I",
  "II",
  "III"
}

enum BPJSKesehatanClass {
  "I",
  "II",
  "III"
}
*/
