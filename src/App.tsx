/* eslint-disable */
import React from 'react';
// import { GridSelectExample } from './gridComponents/GridSelectExample';
import { ColumnGroupingExample } from './gridComponents/ColumnGroupingExample';

const App = () => {
    return (
        <div>
          {/* <GridSelectExample /> */}
          <ColumnGroupingExample />
        </div>
    );
};

export default App;



export const AgGridWizardMeta = {
    service: {
      displayType: "dropdown",
      visibilityRules: [],
      valueOptionRules: [
        {
          rule: "always",
          values: ["EC2", "EC3"],
        },
      ],
      isEditable: true,
    },
    type: {
      displayType: "dropdown",
      visibilityRules: [
        {
          rule: "dependsOnOtherColumnFilled",
          dependencies: [
              {
                targetColId: "service",
                value: true,
              },
          ],
        },
      ],
      valueOptionRules: [
        {
          rule: "dependsOnOtherColumns",
          values: [
              { label: "C4", id: "C4" },
              { label: "C5", id: "C5" },
              { label: "C6", id: "C6" },
            ], //values should be objecst { label: "c4", id: "c4"}
          dependencies: [
            {
              targetColId: "service",
              value: "EC2",
            },
          ],
        },
      ],
      isEditable: true,
    },
    size: {
      displayType: "dropdown",
      visibilityRules: [
        {
          rule: "dependsOnOtherColumnFilled",
          targetColId: ["service", "type"],
        },
      ],
      valueOptionRules: [
        {
          rule: "dependsOnOtherColumns",
          values: ["small", "big", "extra big"],
          dependencies: [
            {
              targetColId: "service",
              value: "EC2",
            },
            {
              targetColId: "type",
              value: "C4",
            },
          ],
        },
        {
          rule: "dependsOnOtherColumns",
          values: ["extra extra big", "ridiculus", "godlike"],
          dependencies: [
            {
              targetColId: "service",
              value: "EC7",
            },
            {
              targetColId: "type",
              value: "C9",
            },
          ],
        },
        {
          rule: "default",
          values: ["default 1", "default 2"],
          dependencies: [],
        },
      ],
      isEditable: true,
    },
    cost: {
      isEditable: false,
    },
  };