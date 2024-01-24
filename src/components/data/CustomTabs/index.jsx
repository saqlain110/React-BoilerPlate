import { Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

const CustomTabs = ({ tabs, containerProps, tabListProps, tabItemProps, tabPanelListProps, tabPanelProps, tabEndAction, secondaryAction, middleComponent }) => {
    return (
        <Tabs isLazy {...containerProps}>
            <TabList {...tabListProps}>
                {tabs?.map((tab, index) =>
                    <Tab minW="fit-content" {...tabItemProps} key={index} isDisabled={tab.isDisabled}>{tab.head}</Tab>
                )}
                {(secondaryAction || tabEndAction) && (
                    <Flex justify={"end"} w="full" gap={3}>
                        {secondaryAction && (
                            <Button onClick={secondaryAction.action} isLoading={secondaryAction.isLoading} size="sm">{secondaryAction.label}</Button>
                        )}
                        {tabEndAction && (
                            <Button onClick={tabEndAction.action} isLoading={tabEndAction.isLoading} size="sm">{tabEndAction.label}</Button>
                        )}
                    </Flex>
                )}
            </TabList>
            {middleComponent}
            <TabPanels {...tabPanelListProps}>
                {tabs?.map((tab, index) =>
                    <TabPanel px="9" {...tabPanelProps} key={index+tab.head}>
                        {tab.body}
                    </TabPanel>
                )}

            </TabPanels>
        </Tabs>
    )
}

export default CustomTabs