export interface IGetProjectData {
  email: string;
  firstName: string;
  lastName: string;
  other?: boolean;
  phone?: string | null;
  projectBrief: string;
  chromeExtention?: boolean;
  web_application?: boolean;
  desktopApplication?: boolean;
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
  phone?: string | null;
}
