import React, {
  useEffect,
  forwardRef,
  useRef,
  useState,
} from 'react';

import dateFormat from 'date-format';

import IndefiniteLoading from '../loading/indefiniteLoading';
import PredictionsTableItem from './predictionsTableItem';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

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
  DoneOutlineOutlined,
  OpenInNewOutlined,
  AccountCircleOutlined,
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
  DoneOutlineOutlined: forwardRef((props, ref) => (
    <DoneOutlineOutlined {...props} ref={ref} />
  )),
  OpenInNewOutlined: forwardRef((props, ref) => (
    <OpenInNewOutlined {...props} ref={ref} />
  )),
  AccountCircleOutlined: forwardRef((props, ref) => (
    <AccountCircleOutlined {...props} ref={ref} />
  )),
};

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
  },
}));

const PredictionsTable = ({ predictions }) => {
  const classes = useStyles();

  const handleMarkComplete = async () => {
    // await predictionsStore.updatePrediction({
    //   ...prediction,
    //   status: 'complete',
    // });
    console.log('gang gang buzz buzz');
  };

  return (
    <div className={classes.root}>
      <MaterialTable
        title="Predictions"
        icons={tableIcons}
        components={{
          Container: props => <Card {...props} variant="outlined" />,
        }}
        columns={[
          { title: 'Title', field: 'title' },
          { title: 'Status', field: 'status' },
          { title: 'Due At', field: 'dueAt' },
          { title: 'Created At', field: 'createdAt' },
        ]}
        data={predictions}
        detailPanel={[
          {
            tooltip: 'Show Status',
            render: rowData => {
              return (
                <PredictionsTableItem
                  handleMarkComplete={handleMarkComplete}
                  rowData={rowData}
                />
              );
            },
          },
        ]}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
      />
    </div>
  );
};

export default PredictionsTable;
