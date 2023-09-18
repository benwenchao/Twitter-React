import { Input } from 'antd-mobile';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import style from './index.module.scss';

/**
 *  Multiple reaction Input
 * */

const TInput = ({
  label, value, length, onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    if (value) {
      setIsFocused(true);
      setIsHide(true);
    }
  }, []);

  const onFocus = () => {
    setIsFocused(true);
    setIsHide(true);
  };

  const onBlur = () => {
    if (value?.length === 0) {
      setIsFocused(false);
    }
    setIsHide(false);
    // prevent
  };

  const onChangeHandler = (val) => {
    if (length && value.length >= length) {
      return;
    }
    onChange(val);
  };

  return (
    <div className={isHide ? style.tInputFocused : style.tInput}>
      <div className={isFocused ? style.labelFocused : style.label}>
        {label}
        {isHide && length > 0 && (
        <span className={style.labelRight}>
          {value?.length}
          /
          {length}
        </span>
        )}
      </div>
      <Input
        className={isFocused ? style.inputItemFocused : style.inputItem}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

TInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  length: PropTypes.number,
  onChange: PropTypes.func,
};

TInput.defaultProps = {
  label: '',
  value: undefined,
  length: undefined,
  onChange: () => {},
};
export default TInput;
