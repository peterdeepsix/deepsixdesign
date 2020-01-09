import React, { useEffect, forwardRef } from 'react';

import MaterialTable from 'material-table';
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from '@material-ui/icons';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => (
    <DeleteOutline {...props} ref={ref} />
  )),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => (
    <SaveAlt {...props} ref={ref} />
  )),
  Filter: forwardRef((props, ref) => (
    <FilterList {...props} ref={ref} />
  )),
  FirstPage: forwardRef((props, ref) => (
    <FirstPage {...props} ref={ref} />
  )),
  LastPage: forwardRef((props, ref) => (
    <LastPage {...props} ref={ref} />
  )),
  NextPage: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => (
    <Clear {...props} ref={ref} />
  )),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => (
    <ArrowDownward {...props} ref={ref} />
  )),
  ThirdStateCheck: forwardRef((props, ref) => (
    <Remove {...props} ref={ref} />
  )),
  ViewColumn: forwardRef((props, ref) => (
    <ViewColumn {...props} ref={ref} />
  )),
};

function PredictionsTable(props) {
  const [predictions, setPredictions] = React.useState();
  const { storage } = props;

  useEffect(() => {
    setPredictions('yes');
    console.log('loaded predictions');
  });

  return (
    <React.Fragment>
      {predictions && (
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            icons={tableIcons}
            columns={[
              { title: 'Filename', field: 'filename' },
              {
                title: 'Width',
                field: 'width',
                type: 'numeric',
              },
              {
                title: 'Height',
                field: 'height',
                type: 'numeric',
              },
            ]}
            data={[
              {
                filename: '00000000.jpg',
                height: 1024,
                width: 1024,
              },
              {
                filename: '00000001.jpg',
                height: 2048,
                width: 2048,
              },
              {
                filename: '00000002.jpg',
                height: 512,
                width: 512,
              },
            ]}
            title="Predictions"
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default PredictionsTable;
