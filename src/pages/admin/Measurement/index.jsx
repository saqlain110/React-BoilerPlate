import React from "react";
import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import CustomTable from "../../../components/data/CustomTable";
import TableHeaderOptions from "../../../components/data/CustomTable/TableHeaderOptions";
import MeasurementForm from "./MeasurementForm";
import { INTEGRATION_LABELS } from "../../../constants/enums";
import { getFilters } from "../../../utils/filterUtils";
import { useMeasurementList } from "./measurementContainer";
import MeasurementTabs from "./MeasurementTabs";
import RightAddons from "./RightAddons";
import LabelValuePair from "../../../components/data/TextDisplay/LabelValuePair";
import TableInfoPopover from "../../../components/popovers/TableInfoPopover";
import { formatDate, formatDateTime } from "../../../utils/dateUtils";

const Measurements = () => {
  const {
    query,
    onQueryChange,
    data,
    isLoading,
    refetch,
    isFetching,
    filters,
    formDisclosure,
  } = useMeasurementList();

  return (
    <Box>
      <TableHeaderOptions title={"Measurements"} />

      <MeasurementTabs onQueryChange={onQueryChange} query={query} />

      <CustomTable
        containerProps={{ h: "calc(100vh - 185px)" }}
        tableWrapperProps={{ h: "calc(100vh - 320px)" }}
        tableFor={"measurements"}
        searchPlaceholder="Search measurements"
        filters={getFilters(filters)}
        head={[
          {
            title: "User",
            extractor: "userId.firstName",
            align: "left",
            isSortable: false,
            component: (item) => {
              const name = `${item.userId?.firstName || "N/A"} ${
                item.userId?.lastName || ""
              }`;
              return (
                <TableInfoPopover title={name} triggerText={name}>
                  <LabelValuePair
                    label={"Username"}
                    value={item.userId?.username}
                  />
                  <LabelValuePair label={"Email"} value={item.userId?.email} />
                  <LabelValuePair
                    label={"Gender"}
                    value={item.userId?.gender}
                  />
                  <LabelValuePair
                    label={"Skill Tone"}
                    value={item.userId?.skinTone}
                  />
                  <LabelValuePair label={"Age"} value={item.userId?.age} />
                  <LabelValuePair
                    label={"Height"}
                    value={`${item.userId?.height} ${item.userId?.heightUnit}`}
                  />
                  <LabelValuePair
                    label={"Height"}
                    value={`${item.userId?.weight} ${item.userId?.weightUnit}`}
                  />
                  <LabelValuePair
                    label={"Birth Year"}
                    value={item.userId?.birthYear}
                  />
                  <LabelValuePair
                    label={"Skill Type"}
                    value={item.userId?.skinType}
                  />
                  <LabelValuePair
                    label={"Skill Tone"}
                    value={item.userId?.skinTone}
                  />
                </TableInfoPopover>
              );
            },
          },
          {
            title: "Company",
            extractor: "integration",
            isSortable: false,
            component: (item) => (
              <TableInfoPopover
                title={item.companyId?.name}
                triggerText={item.companyId?.name}
              >
                <LabelValuePair label={"Email"} value={item.companyId?.email} />
              </TableInfoPopover>
            ),
          },
          {
            title: "Integration",
            extractor: "integration",
            isSortable: false,
            component: (item) => INTEGRATION_LABELS[item.integration],
          },
          {
            title: "Heart Rate",
            extractor: "heartRate",
            isSortable: false,
            component: (item) =>
              item.sessionData?.heartRate?.value
                ? `${item.sessionData?.heartRate?.value} bpm`
                : "N/A",
          },
          {
            title: "Breathing Rate",
            extractor: "breathingRate",
            isSortable: false,
            component: (item) =>
              item.sessionData?.breathingRate?.value
                ? `${item.sessionData?.breathingRate?.value} bpm`
                : "N/A",
          },
          {
            title: "SDNN",
            extractor: "sdnn",
            isSortable: false,
            component: (item) => item.sessionData?.sdnn?.value || "N/A",
          },
          {
            title: "stressLevel",
            extractor: "stressLevel",
            isSortable: false,
            component: (item) => item.sessionData?.stressLevel?.value || "N/A",
          },
          {
            title: "stressIndex",
            extractor: "stressIndex",
            isSortable: false,
            component: (item) => item.sessionData?.stressIndex?.value || "N/A",
          },
          {
            title: "meanRri",
            extractor: "meanRri",
            isSortable: false,
            component: (item) => item.sessionData?.meanRri?.value || "N/A",
          },
          {
            title: "bloodPressure",
            extractor: "bloodPressure",
            isSortable: false,
            component: (item) =>
              `${
                item.sessionData?.bloodPressure?.value?.diastolic
                  ? item.sessionData?.bloodPressure?.value?.diastolic
                  : "Unknown"
              } / ${
                item.sessionData?.bloodPressure?.value?.systolic
                  ? item.sessionData?.bloodPressure?.value?.systolic
                  : "Unknown"
              }`,
          },
          {
            title: "wellnessLevel",
            extractor: "wellnessLevel",
            isSortable: false,
            component: (item) =>
              item.sessionData?.wellnessLevel?.value || "N/A",
          },
          {
            title: "hemoglobin",
            extractor: "hemoglobin",
            isSortable: false,
            component: (item) => item.sessionData?.hemoglobin?.value || "N/A",
          },
          {
            title: "createdAt",
            extractor: "createdAt",
            isSortable: false,
            component: (item) => formatDateTime(item.createdAt),
          },
        ]}
        rightAddons={
          <RightAddons query={query} onQueryChange={onQueryChange} />
        }
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

      <MeasurementForm disclosure={formDisclosure} />
    </Box>
  );
};

export default Measurements;
