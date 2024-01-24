import moment from "moment/moment";
import { DEFAULT_DATETIME_FORMAT, DEFAULT_DATE_FORMAT } from "../constants/date";

export const formatDateTime = (dateTime) => {
  if (dateTime)
    return moment(dateTime).utc().local().format(DEFAULT_DATETIME_FORMAT);
  else return "N/A";
};

export const formatDate = (date) => {
  return moment(date).utc().local().format(DEFAULT_DATE_FORMAT);
};