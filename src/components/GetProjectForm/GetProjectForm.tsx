import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { scemaGetProjectForm } from '../../schemas/getProjectScema';
import styles from './GetProjectForm.module.scss';
import { IGetProjectData } from './GetProjectFormTypes';
import classNames from 'classnames';

const GetProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(scemaGetProjectForm),
    mode: 'onSubmit',
  });
  const onSubmit: SubmitHandler<IGetProjectData> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.namesInfoBlock}>
        <div className={styles.namesTitle}>
          <span className={styles.namestext}>
            Name <span className={styles.req}>*</span>
          </span>
        </div>
        <span className={styles.error}>
          {errors.firstName?.message || errors.lastName?.message}
        </span>
        <div className={styles.fieldsBlock}>
          <div className={styles.firstNameBlcok}>
            <label htmlFor="firstName">First Name</label>
            <input
              className={classNames({
                [styles.activeError]: errors.firstName,
              })}
              type="text"
              {...register('firstName')}
            />
          </div>
          <div className={styles.lastNameBlcok}>
            <label htmlFor="lastName">Last Name</label>
            <input
              className={classNames({
                [styles.activeError]: errors.lastName,
              })}
              type="text"
              {...register('lastName')}
            />
          </div>
        </div>
        <div className={styles.cusstomFieldBlock}>
          <label htmlFor="email">
            Email <span className={styles.req}>*</span>
          </label>
          <span className={styles.error}>{errors.email?.message}</span>
          <input
            className={classNames({
              [styles.activeError]: errors.email,
            })}
            type="text"
            {...register('email')}
          />
        </div>
        <div className={styles.cusstomFieldBlock}>
          <label htmlFor="phone">Phone</label>
          <input type="text" {...register('phone')} />
        </div>

        <div className={styles.cusstomFieldBlock}>
          <label htmlFor="projectBrief">
            Project Brief <span className={styles.req}>*</span>
          </label>
          <span className={styles.error}>{errors.projectBrief?.message}</span>
          <textarea
            className={classNames({
              [styles.activeError]: errors.projectBrief,
            })}
            {...register('projectBrief')}
          ></textarea>
        </div>
        <div className={styles.cusstomFieldBlock}>
          <label htmlFor="projectBudget">Project Budget</label>
          <input type="text" {...register('projectBudget')} />
        </div>
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
              <label htmlFor="other">other</label>
            </div>
          </div>
        </div>
        <div className={styles.btnSubmit}>
          <button id={styles.submitBtn} type="submit">
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  );
};

export default GetProjectForm;
