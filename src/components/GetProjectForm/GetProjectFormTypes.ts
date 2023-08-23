export interface IGetProjectData {
  email: string;
  firstName: string;
  lastName: string;
  other: boolean | undefined;
  phone?: number;
  projectBrief: string;
  support: boolean | undefined;
  web_application: boolean | undefined;
}

export interface IGetProjectDataProps {
  contactPage?: boolean;
}
