import {
  BsCheckCircle,
  BsCurrencyDollar,
  BsPlus,
  BsFillCaretDownFill,
  BsGear,
  BsTrash,
  BsArrowUpShort,
  BsArrowDownShort,
  BsCaretDown,
  BsCaretDownFill,
  BsCaretUp,
  BsCaretUpFill,
  BsGrid,
  BsClock,
  BsThreeDots,
  BsCheck2,
  BsMap,
  BsKey,
  BsArrowsAngleExpand,
} from "react-icons/bs";
import {
  AiOutlineCalendar,
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineMenuFold,
  AiOutlineUser,
  AiOutlineClose
} from "react-icons/ai";
import {
  FiUserPlus,
  FiMenu,
  FiUsers,
  FiMoon,
  FiSun,
  FiLogOut,
  FiLock,
  FiSearch,
  FiExternalLink,
} from "react-icons/fi";
import {
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
  BiChevronUp,
  BiCopyAlt,
  BiImageAdd,
  BiRefresh,
} from "react-icons/bi";
import {
  MdOutlineVerified,
  MdOutlineSaveAlt,
} from "react-icons/md";
import {
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import { GrGroup, GrUserAdmin } from "react-icons/gr";

const APP_ICONS = {
  DASHBOARD: BsGrid,
  SETTINGS: BsGear,
  EARNING_REPORTS: FaRegMoneyBillAlt,
  VERIFIED: MdOutlineVerified,
  TENANTS: GrGroup,
  ZONES: BsMap,
  ADMIN_USER: GrUserAdmin,
  ROLE: BsKey,
  EXPAND: BsArrowsAngleExpand,

  MENU: FiMenu,
  USERS: FiUsers,
  EMAILS: AiOutlineMail,
  BIN: BsTrash,
  SINGLE_USER: AiOutlineUser,
  COPY: BiCopyAlt,
  IMAGE_ADD: BiImageAdd,
  CALL: FaPhoneAlt,
  EMAIL: FaEnvelope,

  DRAWER: AiOutlineMenuFold,

  WARNING: AiOutlineInfoCircle,

  //actions
  EDIT: AiOutlineEdit,
  REFRESH: BiRefresh,
  ADD: BsPlus,
  CLOSE: AiOutlineClose,
  MORE_OPTIONS: BsThreeDots,
  SEARCH: FiSearch,
  SAVE: MdOutlineSaveAlt,

  //Navigation Icons
  LeftChevron: BiChevronLeft,
  RightChevron: BiChevronRight,
  UpChevron: BiChevronUp,
  DownChevron: BiChevronDown,
  UpArrow: BsArrowUpShort,
  DownArrow: BsArrowDownShort,
  CaretDown: BsCaretDown,
  CaretDownFill: BsCaretDownFill,
  CaretUp: BsCaretUp,
  CaretUpFill: BsCaretUpFill,
  OPEN: FiExternalLink,

  DropDownIcon: BsFillCaretDownFill,

  //Color Modes
  LighMode: FiSun,
  DarkMode: FiMoon,

  //Misc
  DOLLAR_SIGN: BsCurrencyDollar,
  CHECK_CIRCLED: BsCheckCircle,
  CHECK: BsCheck2,
  CLOCK: BsClock,
  PERSON_PLUS: FiUserPlus,
  LOCK: FaLock,
  LOCK_OUTLINE: FiLock,
  EYE_OFF: AiOutlineEyeInvisible,
  EYE: AiOutlineEye,
  CALENDAR: AiOutlineCalendar,
  LOGOUT: FiLogOut,
};

export default APP_ICONS;
