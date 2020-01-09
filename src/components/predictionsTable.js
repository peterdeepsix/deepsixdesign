import React, { forwardRef } from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';

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

function PredictionsTable() {
  const [predictions, setPredictions] = React.useState();

  useFirebase(firebase => {
    firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });
  }, []);

  return (
    <React.Fragment>
      {predictions && (
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            icons={tableIcons}
            columns={[
              { title: 'Adı', field: 'name' },
              { title: 'Soyadı', field: 'surname' },
              {
                title: 'Doğum Yılı',
                field: 'birthYear',
                type: 'numeric',
              },
              {
                title: 'Doğum Yeri',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
              },
            ]}
            data={[
              {
                name: 'Mehmet',
                surname: 'Baran',
                birthYear: 1987,
                birthCity: 63,
              },
            ]}
            title="Demo Title"
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default PredictionsTable;
