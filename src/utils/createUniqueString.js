/**
 * Created by jiachenpan on 17/3/8.
 */
/* eslint-disable */
export default function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}
/* 获取时间格式 */
export function dayFormat(d) {
  const time = new Date(d);
  const month = (time.getMonth() + 1 < 10) ? `0${(time.getMonth() + 1)}` : time.getMonth() + 1;
  const day = (time.getDate() < 10) ? `0${time.getDate()}` : time.getDate();
  const h = (time.getHours() < 10) ? `0${time.getHours()}` : time.getHours();
  const m = (time.getMinutes() < 10) ? `0${time.getMinutes()}` : time.getMinutes();
  const s = (time.getSeconds() < 10) ? `0${time.getSeconds()}` : time.getSeconds();
  return `${time.getFullYear()}-${month}-${day} ${h}:${m}:${s}`;
}
