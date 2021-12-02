export class Project {
    id: number;
    parent_id: number;
    company_id: number;
    reference_number: string;
    name: string;
    first_party: string;
    second_party: string;
    issue_date: string;
    start_date: string;
    end_date: string;
    activity: string;
    description: string;
    value: number;
    document: any;
    is_contract: number;
    contract_terms: string;
    value_by_contract_terms: number;
    project_addendum: any;
    project_terms: any;
    work_unit: any;
}
