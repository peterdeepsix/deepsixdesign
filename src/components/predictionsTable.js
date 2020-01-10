import React, {
  useEffect,
  forwardRef,
  useRef,
  useState,
} from 'react';

import { inject, observer } from 'mobx-react';
import dateFormat from 'date-format';

import Loading from './loading';
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

const PredictionsTable = ({ predictions: predictionsStore }) => {
  const classes = useStyles();

  const { predictions, firestore } = predictionsStore;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!firestore) return;
    let didCancel = false;

    const getPredictions = async () => {
      await predictionsStore.getPredictions();
      if (!didCancel) setIsLoading(false);
    };
    getPredictions();
    return () => (didCancel = true);
  }, [firestore]);

  if (isLoading) return <Loading />;
  return (
    <div className={classes.root}>
      {/* to change time use this - dateFormat('MM/dd/yyyy h:mm', new Date(dueAt))*/}
      <MaterialTable
        title="Predictions"
        components={{
          Container: props => <Card {...props} variant="outlined" />,
        }}
        icons={tableIcons}
        columns={[
          { title: 'ID', field: 'id' },
          { title: 'Title', field: 'title' },
          { title: 'Status', field: 'status' },
          { title: 'Due At', field: 'dueAt' },
        ]}
        data={predictions}
        // detailPanel={[
        //   {
        //     tooltip: 'Show Status',
        //     render: rowData => {
        //       return <PredictionsTableItem prediction={rowData} />;
        //     },
        //   },
        // ]}
      />
    </div>
  );
};

export default inject('predictions')(observer(PredictionsTable));
