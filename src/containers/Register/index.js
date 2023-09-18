import { Form } from 'antd-mobile';
import { useState } from 'react';
import Header from '../../components/Header';
import TInput from '../../components/TInput';
import DatePickerInput from '../../components/DatePickerInput';
import style from './index.module.scss';

const ACCOUNT_TYPE = {
  TEL: 0,
  EMAIL: 1,
};
/**
 *  Create page
 */

const Register = () => {
  const [form] = Form.useForm();
  const [formData] = useState({
    name: '',
    tel: '',
    email: '',
    birthday: '10/01/2023',
  });
  const [accountType] = useState(ACCOUNT_TYPE.TEL);

  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>Create your account</div>
        <Form
          form={form}
          initialValues={formData}
          className={style.formContainer}
        >
          <Form.Item name="name" rules={[{ required: true, message: 'Please fill your name.' }]}>
            <TInput
              length={50}
              label="Name"
            />
          </Form.Item>
          {accountType === ACCOUNT_TYPE.TEL && (
          <Form.Item name="tel" rules={[{ required: true, message: 'Please fill a valid cell phone.', pattern: /^((\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/g }]}>
            <TInput
              length={10}
              label="Phone"
            />
          </Form.Item>
          )}
          {accountType === ACCOUNT_TYPE.EMAIL
              && (
              <Form.Item name="email" rules={[{ required: true, message: 'Please fill a valid email.', pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g }]}>
                <TInput
                  label="Email"
                />
              </Form.Item>
              )}
          <span
            className={style.changeTypeButton}
          >
            {accountType === ACCOUNT_TYPE.EMAIL ? 'Use cell phone instead' : 'Use email instead'}
          </span>
          <div className={style.birthdayTitle}>Date of birth</div>
          <div>
            This will not be shown publicly. Confirm your own age,
            even if this account is for a business, a pet, or something else.
          </div>
          <Form.Item name="birthday">
            <DatePickerInput />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
