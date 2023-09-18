import { DatePicker } from 'antd-mobile';
import { useState, forwardRef } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import style from './index.module.scss';
import datepicker from '../../assets/icons/datepicker.svg';

const DatePickerInput = forwardRef(({
  value,
  onChange,
// eslint-disable-next-line no-unused-vars
}, ref) => {
  const now = new Date();
  const minDate = new Date(1900, 0, 1);
  const [visible, setVisible] = useState(false);
  const onClickDatePicker = () => {
    setVisible(true);
  };
  return (
    <>
      <DatePicker
        title="Date Picker"
        visible={visible}
        cancelText="Cancel"
        confirmText="Confirm"
        max={now}
        min={minDate}
        onClose={() => {
          setVisible(false);
        }}
        onConfirm={(val) => {
          onChange(moment(val).format('MM/DD/YYYY'));
        }}
      />

      <div className={style.birthdayInput} onClick={onClickDatePicker}>
        <div className={style.birthdayInputLabel}>Date of birth</div>
        <div>
          <span className={style.birthdayPlaceholder}>
            {value ? moment(value).format('MM/DD/YYYY') : 'MM/DD/YYYY'}
          </span>
          <img className={style.datePickerIcon} src={datepicker} alt="datepicker" />
        </div>
      </div>
    </>
  );
});

DatePickerInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

DatePickerInput.defaultProps = {
  value: '',
  onChange: () => {},
};

export default DatePickerInput;