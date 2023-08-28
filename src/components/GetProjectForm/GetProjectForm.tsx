import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { scemaGetProjectForm } from '../../schemas/getProjectScema';
import { IGetProjectData, IGetProjectDataProps } from './GetProjectFormTypes';
import { getErrorFilds } from 'helpers/FormHelpers';
import { FC } from 'react';
import classNames from 'classnames';
import styles from './GetProjectForm.module.scss';

const GetProjectForm: FC<IGetProjectDataProps> = ({
  contactPage,
  checkBoxShow,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(scemaGetProjectForm),
    mode: 'onSubmit',
  });
  const errorMessageAlert = `Form submission failed. Review the following information:   ${getErrorFilds(
    errors,
  )}`;

  const onSubmit: SubmitHandler<IGetProjectData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!!Object.keys(errors).length && (
        <div className={styles.alertBlock}>
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className={styles.iconFont}
          />
          <p>{errorMessageAlert}</p>
        </div>
      )}
      <div className={styles.formNames_section}>
        <div className={styles.cusstomFieldBlock}>
          <label htmlFor="firstName">
            First Name<span className={styles.req}>*</span>
          </label>
          <input
            className={classNames({
              [styles.activeError]: errors.firstName,
            })}
            type="text"
            {...register('firstName')}
          />
          <span className={styles.error}>{errors.firstName?.message}</span>
        </div>
        <div className={styles.cusstomFieldBlock}>
          <label htmlFor="lastName">
            Last Name<span className={styles.req}>*</span>
          </label>
          <input
            className={classNames({
              [styles.activeError]: errors.lastName,
            })}
            type="text"
            {...register('lastName')}
          />
          <span className={styles.error}>{errors.lastName?.message}</span>
        </div>
      </div>

      <div className={styles.cusstomFieldBlock}>
        <label htmlFor="email">
          Email<span className={styles.req}>*</span>
        </label>

        <input
          className={classNames({
            [styles.activeError]: errors.email,
          })}
          type="text"
          {...register('email')}
        />
        <span className={styles.error}>{errors.email?.message}</span>
      </div>

      <div className={styles.cusstomFieldBlock}>
        <label htmlFor="phone">Phone</label>
        <input type="text" {...register('phone')} />
      </div>

      <div className={styles.cusstomFieldBlock}>
        <label htmlFor="projectBrief">
          {!contactPage ? 'Project Brief' : 'message'}
          <span className={styles.req}>*</span>
        </label>

        <textarea
          className={classNames({
            [styles.activeError]: errors.projectBrief,
          })}
          {...register('projectBrief')}
        ></textarea>
        <span className={styles.error}>{errors.projectBrief?.message}</span>
      </div>
      {!contactPage && (
        <div className={styles.cusstomFieldBlock}>
          <label htmlFor="projectBudget">Project Budget</label>
          <input type="text" {...register('projectBudget')} />
        </div>
      )}
      {checkBoxShow && (
        <div className={styles.checkbox_section}>
          <div className={styles.checkBoxs_title}>
            <span>I Need</span>
          </div>
          <div className={styles.checkBoxs_content}>
            <div className={styles.checks}>
              <input
                id="web_application"
                type="checkbox"
                {...register('web_application')}
              />
              <label htmlFor="web_application">Web Application</label>
            </div>
            <div className={styles.checks}>
              <input id="support" type="checkbox" {...register('support')} />
              <label htmlFor="support">Technical Support</label>
            </div>
            <div className={styles.checks}>
              <input id="other" type="checkbox" {...register('other')} />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
      )}

      <div
        className={classNames(styles.btnSubmit, {
          [styles.btnContact]: contactPage,
        })}
      >
        <button
          className={classNames(styles.submitBtn, {
            [styles.btnSub]: contactPage,
          })}
          type="submit"
        >
          {contactPage ? 'TALK TO US' : 'SUBMIT'}
        </button>
      </div>
    </form>
  );
};

export default GetProjectForm;
