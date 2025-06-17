import Button from "../../../../components/Button/Button";
import classNames from "classnames/bind";
import styles from "./Mv.module.scss";
const cx = classNames.bind(styles);

export default function Mv() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('img')}></div>
      <p>Chưa có MV trong thư viện cá nhân</p>
      <Button primary>Khám phá ngay </Button>
    </div>
  )
}
