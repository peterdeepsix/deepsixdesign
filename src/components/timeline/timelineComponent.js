import React, { useEffect, useState } from 'react';

import { inject, observer } from 'mobx-react';

import Loading from '../loading';

import { makeStyles } from '@material-ui/core/styles';
import dateFormat from 'date-format';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
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
        {data.allProcesses.edges.map(edge => (
          <VerticalTimelineElement
            key={edge.node.id}
            className="vertical-timeline-element--work"
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
              {edge.node.title}
            </Typography>
            <Typography
              className="vertical-timeline-element-subtitle"
              variant="h6"
              gutterBottom
            >
              {edge.node.synonyms.map(synonym => (
                <Chip label={synonym} />
              ))}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {edge.node.definition}
            </Typography>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default inject('predictions')(observer(TimelineComponent));
