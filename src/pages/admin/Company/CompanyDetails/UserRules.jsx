import React from "react";
import CustomTable from "../../../../components/data/CustomTable";
import TableActions from "../../../../components/data/CustomTable/TableActions";
import { Box } from "@chakra-ui/react";
import CompanyRuleForm from "./CompanyRuleForm";
import { useRuleList } from "../companyContainer";
import UserRuleForm from "./UserRuleForm";

const UserRules = ({ data }) => {
  const { disclosure, onEdit, selected } = useRuleList();

  return (
    <Box>
      <CustomTable
        tableFor={"user rules"}
        hideFilterBar={true}
        head={[
          {
            title: "Sessions Allowed Per User",
            extractor: "sessionsAllowedPerUser",
            isSortable: false,
            fallBackText: "0",
          },
          {
            title: "Integration",
            extractor: "integration",
            isSortable: false,
            fallBackText: "0",
          },
          {
            title: "Actions",
            extractor: "actions",
            align: "center",
            component: (item) => (
              <TableActions item={item} entity="company" onEdit={onEdit} />
            ),
          },
        ]}
        data={data}
      />
      <UserRuleForm disclosure={disclosure} rowData={selected} />
    </Box>
  );
};

export default UserRules;
