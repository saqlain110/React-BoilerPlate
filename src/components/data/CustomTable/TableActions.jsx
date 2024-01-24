import { HStack, Icon, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import DeletePopover from "../../popovers/DeletePopover";
import APP_ICONS from "../../../constants/icons";
import { colorKeys, getColor } from "../../../constants/colors";

const TableActions = ({ entity = "item", item, onDelete, onEdit, onView }) => {
  const { colorMode } = useColorMode();

  return (
    <HStack spacing={1} justify={"center"}>
      {onDelete && (
        <DeletePopover
          type={entity}
          popoverProps={{
            placement: "bottom-start",
          }}
          onConfirm={() => onDelete(item._id)}
        >
          <IconButton
            variant={"ghost"}
            size="sm"
            icon={
              <Icon
                as={APP_ICONS.BIN}
                color={getColor(colorKeys.danger, colorMode)}
              />
            }
          />
        </DeletePopover>
      )}
      {onEdit&&<IconButton
        variant={"ghost"}
        size="sm"
        icon={
          <Icon
            as={APP_ICONS.EDIT}
            color={getColor(colorKeys.success, colorMode)}
          />
        }
        onClick={() => onEdit(item)}
      />}
      {onView && (
        <IconButton
          variant={"ghost"}
          size="sm"
          icon={
            <Icon
              as={APP_ICONS.EYE}
              color={getColor(colorKeys.lightBlue, colorMode)}
            />
          }
          onClick={() => onView(item?._id)}
        />
      )}
    </HStack>
  );
};

export default TableActions;
