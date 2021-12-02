
export const BaseUrl = 'https://api.smartbiz.id/api';
export const ContentTypeJSON = 'application/json';
export const ContentTypeUrlEncode = 'application/x-www-form-urlencoded';
export const AcceptJSON = 'application/json';

export const HumanResourceNavigation = [
  {
    name: 'Dashboard',
    slug: 'dashboard',
    url: '/human-resource/dashboard',
    icon: null,
    child: null
  },
  {
    name: 'Commons',
    slug: 'commons',
    url: null,
    icon: null,
    child: [
      {
        name: 'Application',
        slug: 'application',
        url: '/common/application',
        icon: 'm-menu__link-icon flaticon-puzzle',
        child: null
      },
      {
        name: 'Bank',
        slug: 'bank',
        url: '/common/bank',
        icon: 'm-menu__link-icon fa fa-bank',
        child: null
      },
      {
        name: 'Company',
        slug: 'company',
        url: '/common/company',
        icon: 'm-menu__link-icon flaticon-web',
        child: null
      },
      {
        name: 'Company Category',
        slug: 'company-category',
        url: '/common/company-category',
        icon: 'm-menu__link-icon flaticon-web',
        child: null
      },
      {
        name: 'Contract Type',
        slug: 'contract-type',
        url: '/common/contract-type',
        icon: 'm-menu__link-icon flaticon-web',
        child: null
      },
      {
        name: 'Degree',
        slug: 'degree',
        url: '/common/degree',
        icon: 'm-menu__link-icon flaticon-map',
        child: null
      },
      {
        name: 'Employee Number Scale',
        slug: 'employee-number-scale',
        url: '/common/employee-number-scale',
        icon: 'm-menu__link-icon flaticon-interface-3',
        child: null
      },
      {
        name: 'Gender',
        slug: 'gender',
        url: '/common/gender',
        icon: 'm-menu__link-icon la la-intersex',
        child: null
      },
      {
        name: 'Major',
        slug: 'major',
        url: '/common/major',
        icon: 'm-menu__link-icon la la-mortar-board',
        child: null
      },
      {
        name: 'Marital Status',
        slug: 'marital-status',
        url: '/common/marital-status',
        icon: 'm-menu__link-icon fa fa-heart',
        child: null
      },
      {
        name: 'Module',
        slug: 'module',
        url: '/common/module',
        icon: 'm-menu__link-icon fa fa-list-alt',
        child: null
      },
      {
        name: 'Religion',
        slug: 'religion',
        url: '/common/religion',
        icon: 'm-menu__link-icon flaticon-star',
        child: null
      },
      {
        name: 'Group',
        slug: 'group',
        url: '/common/group',
        icon: 'm-menu__link-icon flaticon-star',
        child: null
      },
      {
        name: 'Access',
        slug: 'access',
        url: '/common/access',
        icon: 'm-menu__link-icon flaticon-star',
        child: null
      },
      {
        name: 'Permission',
        slug: 'permission',
        url: '/common/permission',
        icon: 'm-menu__link-icon flaticon-star',
        child: null
      },
      {
        name: 'Role',
        slug: 'role',
        url: '/common/role',
        icon: 'm-menu__link-icon flaticon-star',
        child: null
      }
    ]
  },
  {
    name: 'Master Data',
    slug: 'master-data',
    url: null,
    icon: null,
    child: [
      {
        name: 'Competence',
        slug: 'competence',
        url: '/human-resource/master-data/competence',
        icon: 'm-menu__link-icon flaticon-graphic-2',
        child: null
      },
      {
        name: 'Letter Type',
        slug: 'letter-type',
        url: '/human-resource/master-data/letter-type',
        icon: 'm-menu__link-icon flaticon-interface-6',
        child: null
      },
      {
        name: 'Position',
        slug: 'position',
        url: '/human-resource/master-data/position',
        icon: 'm-menu__link-icon flaticon-map',
        child: null
      },
      {
        name: 'Work Area',
        slug: 'work-area',
        url: '/human-resource/master-data/work-area',
        icon: 'm-menu__link-icon flaticon-share',
        child: null
      },
      {
        name: 'Work Unit',
        slug: 'work-unit',
        url: '/human-resource/master-data/work-unit',
        icon: 'm-menu__link-icon flaticon-refresh',
        child: null
      },
      {
        name: 'Office',
        slug: 'competence',
        url: '/human-resource/master-data/office',
        icon: 'm-menu__link-icon flaticon-refresh',
        child: null
      },
      {
        name: 'Grade',
        slug: 'grade',
        url: '/human-resource/master-data/grade',
        icon: 'm-menu__link-icon flaticon-refresh',
        child: null
      }
    ]
  },
  {
    name: 'Personal',
    slug: 'personal',
    url: null,
    icon: null,
    child: [
      {
        name: 'Employee',
        slug: 'employee',
        url: '/human-resource/personal/employee',
        icon: 'm-menu__link-icon flaticon-users',
        child: null,
        // child: [
        //   {
        //     name: 'Child',
        //     slug: 'child',
        //     url: '/human-resource/personal/employee/child',
        //     icon: 'm-menu__link-icon flaticon-user',
        //     child: null
        //   },
        //   {
        //     name: 'Formal Education History',
        //     slug: 'formal-education-history',
        //     url: '/human-resource/personal/employee/formal-education-history',
        //     icon: 'm-menu__link-icon la la-building',
        //     child: null
        //   },
        //   {
        //     name: 'Non Formal Education History',
        //     slug: 'non-formal-education-history',
        //     url: '/human-resource/personal/employee/non-formal-education-history',
        //     icon: 'm-menu__link-icon la la-home',
        //     child: null
        //   },
        //   {
        //     name: 'Organization History',
        //     slug: 'organization-history',
        //     url: '/human-resource/personal/employee/organization-history',
        //     icon: 'm-menu__link-icon la la-history',
        //     child: null
        //   },
        //   {
        //     name: 'Other Equipment',
        //     slug: 'other-equipment',
        //     url: '/human-resource/personal/employee/other-equipment',
        //     icon: 'm-menu__link-icon flaticon-tool-1',
        //     child: null
        //   },
        //   {
        //     name: 'Work Competence',
        //     slug: 'work-competence',
        //     url: '/human-resource/personal/employee/work-competence',
        //     icon: 'm-menu__link-icon flaticon-graphic-2',
        //     child: null
        //   },
        //   {
        //     name: 'Work Experience',
        //     slug: 'work-experience',
        //     url: '/human-resource/personal/employee/work-experience',
        //     icon: 'm-menu__link-icon flaticon-graphic-2',
        //     child: null
        //   },
        // ]
      },
      {
        name: 'Position Mutation',
        slug: 'position-mutation',
        url: '/human-resource/personal/position-mutation',
        icon: 'm-menu__link-icon flaticon-graphic-2',
        child: null
      },
      {
        name: 'Project Mutation',
        slug: 'project-mutation',
        url: '/human-resource/personal/project-mutation',
        icon: 'm-menu__link-icon flaticon-graphic-2',
        child: null
      },
      {
        name: 'Registration Letter',
        slug: 'registration-letter',
        url: '/human-resource/personal/registration-letter',
        icon: 'm-menu__link-icon flaticon-graphic-2',
        child: null
      },
      {
        name: 'Termination',
        slug: 'termination',
        url: '/human-resource/personal/termination',
        icon: 'm-menu__link-icon flaticon-graphic-2',
        child: null
      },
      {
        name: 'Work Agreement Letter',
        slug: 'work-agreement-letter',
        url: '/human-resource/personal/work-agreement-letter',
        icon: 'm-menu__link-icon flaticon-graphic-2',
        child: null
      },
      {
        name: 'Work Unit Mutation',
        slug: 'work-unit-mutation',
        url: '/human-resource/personal/work-unit-mutation',
        icon: 'm-menu__link-icon flaticon-graphic-2',
        child: null
      },
    ]
  },
  {
    name: 'Project',
    slug: 'project',
    url: '/human-resource/project',
    icon: 'm-menu__link-icon flaticon-graphic-2',
    child: [
      {
        name: 'Project Addendum',
        slug: 'project-addendum',
        url: '/human-resource/project/project-addendum',
        icon: 'm-menu__link-icon flaticon-graphic-2',
        child: null
      },
      {
        name: 'Project Terms',
        slug: 'project-terms',
        url: '/human-resource/project/project-terms',
        icon: 'm-menu__link-icon flaticon-graphic-2',
        child: null
      },
    ]
  },
  {
    name: 'Attendance',
    slug: 'attendance',
    url: '/human-resource/attendance',
    icon: 'm-menu__link-icon flaticon-graphic-2',
    child: [
      {
        name: 'Business Journey',
        slug: 'business-journey',
        url: '/human-resource/attendance/business-journey',
        icon: 'm-menu__link-icon flaticon-graphic-2',
        child: null
      }
    ]
  },
  {
    name: 'Payroll',
    slug: 'payroll',
    url: '/human-resource/payroll',
    icon: 'm-menu__link-icon flaticon-graphic-2',
    child: [
      {
        name: 'BPJS',
        slug: 'bpjs',
        url: '/human-resource/payroll/bpjs',
        icon: 'm-menu__link-icon flaticon-graphic-2',
        child: null
      },
      {
        name: 'Allowance',
        slug: 'allowance',
        url: '/human-resource/payroll/allowance',
        icon: 'm-menu__link-icon flaticon-graphic-2',
        child: null
      },
      {
        name: 'Severance',
        slug: 'severance',
        url: '/human-resource/payroll/severance',
        icon: 'm-menu__link-icon flaticon-graphic-2',
        child: null
      }
    ]
  },
  {
    name: 'Loan',
    slug: 'loan',
    url: '/human-resource/loan',
    icon: null,
    child: null
  },
  {
    name: 'Recruitment',
    slug: 'recruitment',
    url: '/human-resource/recruitment',
    icon: null,
    child: null
  },
];

export class Logged {
  static getUserInformation() {
    return JSON.parse(localStorage.getItem('user'));
  }

  static getAppRedirect() {
    const data = JSON.parse(localStorage.getItem('app'));
    return data ? data : false;
  }
}
