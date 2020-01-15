import React, { useEffect, useState } from 'react';

import { inject, observer } from 'mobx-react';

import Loading from '../loading';

import { makeStyles } from '@material-ui/core/styles';
import dateFormat from 'date-format';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import WallpaperOutlinedIcon from '@material-ui/icons/WallpaperOutlined';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
  },
}));

const TimelineComponent = ({
  data,
  predictions: predictionsStore,
}) => {
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
    <Container>
      <VerticalTimeline>
        {predictions.map(prediction => (
          <VerticalTimelineElement
            key={prediction.id}
            prediction={prediction}
            className="vertical-timeline-element--work"
            date={dateFormat.asString(
              'MM/dd/yyyy h:mm',
              new Date(prediction.dueAt),
            )}
            contentStyle={{
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.12)',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgba(0, 0, 0, 0.54)',
            }}
            iconStyle={{
              background: '#fff',
              boxShadow: 'none',
              color: 'rgba(0, 0, 0, 0.54)',
              border: '1px solid rgba(0, 0, 0, 0.12)',
            }}
            icon={<WallpaperOutlinedIcon />}
          >
            <Typography
              className="vertical-timeline-element-title"
              variant="h4"
              gutterBottom
            >
              {prediction.title}
              {console.log(data)}
            </Typography>
            <Typography
              className="vertical-timeline-element-subtitle"
              variant="h6"
              gutterBottom
            >
              {prediction.id}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {prediction.status}
            </Typography>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default inject('predictions')(observer(TimelineComponent));
