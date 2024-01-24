import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React from "react";

const FormFieldsSkeleton = ({
  count = 3,
  columns = { base: 1, md: 3 },
  spacing = 5,
  fieldHeight = "30px",
  loading,
  hideLabel,
  ...rest
}) => {
  if (!loading) return null;
  return (
    <SimpleGrid columns={columns} spacing={spacing} {...rest}>
      {count > 0 &&
        Array(count)
          .fill()
          .map((item, index) => (
            <Box key={index}>
              {!hideLabel && <Skeleton height="14px" maxW="120px" />}
              <Skeleton height={fieldHeight} mt={2} />
            </Box>
          ))}
    </SimpleGrid>
  );
};

export default FormFieldsSkeleton;
