export interface IGetProjectData {
  email: string;
  firstName: string;
  lastName: string;
  other: boolean | undefined;
  phone?: number;
  projectBrief: string;
  chromeExtention: boolean | undefined;
  web_application: boolean | undefined;
  desktopApplication: boolean | undefined;
}

export interface IGetProjectDataProps {
  formType: string;
  closeModal?: () => void;
}

export interface IPostData {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  chromeExtention?: boolean | undefined;
  web_application?: boolean | undefined;
  desktopApplication?: boolean | undefined;
  other?: boolean | undefined;
  formType: string;
}
