import React from "react";
import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import CustomTable from "../../../components/data/CustomTable";
import TableHeaderOptions from "../../../components/data/CustomTable/TableHeaderOptions";
import APP_ICONS from "../../../constants/icons";
import CompanyForm from "./CompanyForm";
import TableActions from "../../../components/data/CustomTable/TableActions";
import StatusBadge from "../../../components/data/badges/StatusBadge";
import {
  STATUS,
  STATUSES,
  VERIFICATION_STATUS,
  VERIFICATION_STATUSES,
} from "../../../constants/enums";
import { useCompanyList } from "./companyContainer";

const Companies = () => {
  const {
    data,
    isFetching,
    isLoading,
    refetch,
    onDelete,
    onEdit,
    onView,
    selected,
    onQueryChange,
    query,
    formDisclosure,
    onAdd,
  } = useCompanyList();

  return (
    <Box>
      <TableHeaderOptions
        title={"Companies"}
        actionText={"New Company"}
        action={onAdd}
        icon={APP_ICONS.ADD}
        onQueryChange={onQueryChange}
      />
      <CustomTable
        tableFor={"companies"}
        searchPlaceholder="Search companies"
        head={[
          {
            title: "Name",
            extractor: "name",
            align: "left",
            isSortable: false,
            component: (item) => (
              <Text _hover={{textDecor:"underline"}} as={Link} to={`/admin/companies/${item._id}`}>
                {item.name}
              </Text>
            ),
          },
          { title: "Email", extractor: "email", isSortable: false },
          {
            title: "Status",
            extractor: "status",
            isSortable: false,
            component: (item) => (
              <StatusBadge
                value={item.status}
                enumObj={STATUS}
                activeStatus={STATUSES.Active}
              />
            ),
          },
          {
            title: "Verified",
            extractor: "isVerified",
            isSortable: false,
            component: (item) => (
              <StatusBadge
                value={item.status}
                enumObj={VERIFICATION_STATUS}
                activeStatus={VERIFICATION_STATUSES.Verified}
              />
            ),
          },
          {
            title: "Actions",
            extractor: "actions",
            align: "center",
            component: (item) => (
              <TableActions
                item={item}
                entity="company"
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ),
          },
        ]}
        data={data?.docs}
        loading={isLoading}
        onRefresh={refetch}
        query={query}
        onQueryChange={onQueryChange}
        totalPages={data?.meta?.totalPages}
        totalResults={data?.meta?.totalDocs}
        pageNo={query?.page}
        pageSize={query?.limit}
        isRefreshing={isFetching}
      />
      <CompanyForm disclosure={formDisclosure} rowData={selected} />
    </Box>
  );
};

export default Companies;
