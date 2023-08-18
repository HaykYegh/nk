import { MouseEvent, FocusEvent } from 'react';

export interface IAboutFormModalProps {
  showFormModal: boolean;
  setShowFormModalBlock: (
    e: MouseEvent<HTMLElement> | FocusEvent<HTMLElement>,
  ) => void;
}
