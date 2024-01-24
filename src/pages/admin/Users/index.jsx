import React from "react";
import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import CustomTable from "../../../components/data/CustomTable";
import TableHeaderOptions from "../../../components/data/CustomTable/TableHeaderOptions";
import APP_ICONS from "../../../constants/icons";
import UserForm from "./UserForm";
import TableActions from "../../../components/data/CustomTable/TableActions";
import StatusBadge from "../../../components/data/badges/StatusBadge";
import {
  STATUS,
  STATUSES,
  VERIFICATION_STATUS,
  VERIFICATION_STATUSES,
} from "../../../constants/enums";
import { useUserList } from "./userContainer";
import TableInfoPopover from "../../../components/popovers/TableInfoPopover";
import LabelValuePair from "../../../components/data/TextDisplay/LabelValuePair";
import StatusSwitch from "../../../components/forms/StatusSwitch";

const Users = () => {
  const {
    data,
    isFetching,
    isLoading,
    refetch,
    onDelete,
    onEdit,
    onView,
    onStatusChange,
    selected,
    formDisclosure,
    query,
    onQueryChange,
  } = useUserList();

  return (
    <Box>
      <TableHeaderOptions title={"Users"} />
      <CustomTable
        tableFor={"user"}
        searchPlaceholder="Search users"
        head={[
          {
            title: "Name",
            extractor: "name",
            align: "left",
            isSortable: false,
            component: (item) => (
              <TableInfoPopover
                title={`${item.firstName || "N/A"} ${item.lastName || ""}`}
                triggerText={`${item.firstName || "N/A"} ${
                  item.lastName || ""
                }`}
              >
                <LabelValuePair label={"Age"} value={item.age} />
                <LabelValuePair
                  label={"Height"}
                  value={`${item.height} ${item.heightUnit}`}
                />
                <LabelValuePair
                  label={"Height"}
                  value={`${item.weight} ${item.weightUnit}`}
                />
                <LabelValuePair label={"Birth Year"} value={item.birthYear} />
                <LabelValuePair label={"Skill Type"} value={item.skinType} />
                <LabelValuePair label={"Skill Tone"} value={item.skinTone} />
              </TableInfoPopover>
            ),
          },
          { title: "Username", extractor: "username", isSortable: false },
          { title: "Email", extractor: "email", isSortable: false },
          { title: "Gender", extractor: "gender", isSortable: false },
          {
            title: "User Type",
            extractor: "userType",
            isSortable: false,
            align: "center",
            component: (item) => item.userType,
          },
          {
            title: "Email Verified",
            extractor: "isEmailVerified",
            isSortable: false,
            align:"center",
            component: (item) => (
              <StatusBadge
                value={Number(item.isEmailVerified)}
                enumObj={VERIFICATION_STATUS}
                activeStatus={VERIFICATION_STATUSES.Verified}
              />
            ),
          },
          {
            title: "Status",
            extractor: "status",
            isSortable: false,
            component: (item) => (
              <StatusSwitch value={item.status} onChange={()=>onStatusChange(item?._id,item?.status)}/>
            ),
          },
          {
            title: "Actions",
            extractor: "actions",
            align: "center",
            component: (item) => (
              <TableActions
                item={item}
                entity="user"
                onDelete={onDelete}
                // onEdit={onEdit}
              />
            ),
          },
        ]}
        data={data?.users?.docs}
        loading={isLoading}
        onRefresh={refetch}
        query={query}
        onQueryChange={onQueryChange}
        totalPages={data?.users?.meta?.totalPages}
        totalResults={data?.users?.meta?.totalDocs}
        pageNo={query?.page}
        pageSize={query?.limit}
        isRefreshing={isFetching}
      />
      <UserForm disclosure={formDisclosure} rowData={selected} />
    </Box>
  );
};

export default Users;
