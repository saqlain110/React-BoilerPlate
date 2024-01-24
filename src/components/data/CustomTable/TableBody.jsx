import {
  HStack,
  Icon,
  IconButton,
  Tbody,
  Td,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { colorKeys, getColor } from "../../../constants/colors";
import { ACTIONS } from "../../../constants/enums";
import DeletePopover from "../../popovers/DeletePopover";
import APP_ICONS from "../../../constants/icons";
import TableLoading from "./TableLoading";

const TableBody = ({
  tbodyProps,
  loading,
  data,
  rowHeight,
  head,
  tableHeadTextProps,
  columnsPadding,
  tableFor,
  onDelete,
  onEdit,
  onView,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Tbody
      {...tbodyProps}
      borderTop={`1px solid ${getColor(colorKeys.whiteSmoke, colorMode)}`}
    >
      {!loading && data && data.length > 0
        ? data?.map((row, rowIndex) => {
            return (
              <Tr
                h={rowHeight}
                key={rowIndex}
                bg={getColor(colorKeys.tableBackground, colorMode)}
                borderColor="transparent"
                _hover={{
                  backgroundColor: `${getColor(
                    colorKeys.tableRowHoverBackground,
                    colorMode
                  )} !important`,
                }}
                _odd={{
                  backgroundColor: getColor(
                    colorKeys.tableStripedRowBackground,
                    colorMode
                  ),
                }}
              >
                {head &&
                  head?.map((item, index) => {
                    if (item.component) {
                      return (
                        <Td
                          key={index}
                          color={getColor(colorKeys.primaryText, colorMode)}
                          p="0px"
                          cursor="pointer"
                          textAlign={item.align ? item.align : "left"}
                          {...tableHeadTextProps}
                          px={columnsPadding}
                          fontSize={"14px"}
                        >
                          {item.component(row)}
                        </Td>
                      );
                    }
                    //  else if (item.extractor === "actions") {
                    //   return (
                    //     <Td
                    //       key={index}
                    //       color={getColor(colorKeys.primaryText, colorMode)}
                    //       p="2px 0px"
                    //       cursor="pointer"
                    //       textAlign={item.align ? item.align : "center"}
                    //       px={columnsPadding}
                    //       fontSize={"14px"}
                    //     >
                    //       <HStack spacing={1} justify={"center"}>
                    //         {row[item.extractor]?.map((action, actionIndex) => {
                    //           if (
                    //             action.isDelete ||
                    //             action.name === ACTIONS.DELETE
                    //           ) {
                    //             if (!onDelete) return null;
                    //             return (
                    //               <DeletePopover
                    //                 type={tableFor}
                    //                 popoverProps={{
                    //                   placement: "bottom-start",
                    //                 }}
                    //                 key={actionIndex}
                    //                 onConfirm={() => onDelete(row.id)}
                    //               >
                    //                 <IconButton
                    //                   variant={"ghost"}
                    //                   size="sm"
                    //                   icon={
                    //                     <Icon
                    //                       as={APP_ICONS.BIN}
                    //                       color={getColor(
                    //                         colorKeys.danger,
                    //                         colorMode
                    //                       )}
                    //                     />
                    //                   }
                    //                 >
                    //                   {action.title}
                    //                 </IconButton>
                    //               </DeletePopover>
                    //             );
                    //           }
                    //           if (
                    //             action.isEdit ||
                    //             action.name === ACTIONS.EDIT
                    //           ) {
                    //             if (!onEdit) return null;
                    //             return (
                    //               <IconButton
                    //                 variant={"ghost"}
                    //                 size="sm"
                    //                 icon={
                    //                   <Icon
                    //                     as={APP_ICONS.EDIT}
                    //                     color={getColor(
                    //                       colorKeys.success,
                    //                       colorMode
                    //                     )}
                    //                   />
                    //                 }
                    //                 key={actionIndex}
                    //                 onClick={() => onEdit(row)}
                    //                 {...editActionProps}
                    //               >
                    //                 {action.title}
                    //               </IconButton>
                    //             );
                    //           }
                    //           if (
                    //             action.isView ||
                    //             action.name === ACTIONS.VIEW
                    //           ) {
                    //             if (!onView) return null;
                    //             return (
                    //               <IconButton
                    //                 variant={"ghost"}
                    //                 size="sm"
                    //                 icon={
                    //                   <Icon
                    //                     as={APP_ICONS.EYE}
                    //                     color={getColor(
                    //                       colorKeys.lightBlue,
                    //                       colorMode
                    //                     )}
                    //                   />
                    //                 }
                    //                 key={actionIndex}
                    //                 onClick={() => onView(row)}
                    //               >
                    //                 {action.title}
                    //               </IconButton>
                    //             );
                    //           }
                    //           return (
                    //             <IconButton
                    //               variant={"ghost"}
                    //               size="sm"
                    //               icon={<Icon as={action.icon} />}
                    //               key={actionIndex}
                    //               onClick={() => action.action(row.id)}
                    //             >
                    //               {action.title}
                    //             </IconButton>
                    //           );
                    //         })}
                    //       </HStack>
                    //     </Td>
                    //   );
                    // }
                    return (
                      <Td
                        key={index}
                        color={getColor(colorKeys.primaryText, colorMode)}
                        cursor="pointer"
                        textAlign={item.align ? item.align : "left"}
                        p="unset"
                        h={rowHeight}
                        px={columnsPadding}
                        fontSize={"14px"}
                      >
                        {row[item.extractor] || item.fallBackText || "N/A"}
                      </Td>
                    );
                  })}
              </Tr>
            );
          })
        : null}
      <TableLoading head={head} loading={loading} />
    </Tbody>
  );
};

export default TableBody;
