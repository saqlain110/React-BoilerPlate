import React from "react";
import CustomTable from "../../../../components/data/CustomTable";
import TableActions from "../../../../components/data/CustomTable/TableActions";
import { Box } from "@chakra-ui/react";
import CompanyRuleForm from "./CompanyRuleForm";
import { useRuleList } from "../companyContainer";

const CompanyRules = ({ data }) => {
  const { disclosure, onEdit, selected } = useRuleList();

  return (
    <Box>
      <CustomTable
        tableFor={"company rules"}
        hideFilterBar={true}
        head={[
          {
            title: "Interval",
            extractor: "interval",
            isSortable: false,
            fallBackText: "0",
          },
          {
            title: "Session Count",
            extractor: "sessionCount",
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
      <CompanyRuleForm disclosure={disclosure} rowData={selected} />
    </Box>
  );
};

export default CompanyRules;
