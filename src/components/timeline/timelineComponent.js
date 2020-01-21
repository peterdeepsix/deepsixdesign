import React, { useEffect, useState } from 'react';

import { inject, observer } from 'mobx-react';

import IndefiniteLoading from '../loading/indefiniteLoading';

import { makeStyles } from '@material-ui/core/styles';
import Link from '../Link';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
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
  chip: {
    marginLeft: theme.spacing(-0.5),
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
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

  if (isLoading) return <IndefiniteLoading message='TimelineComponent' />;

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
              // top: '22px',
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
              className="vertical-timeline-element-subtitle"
              variant={'overline'}
              gutterBottom
            >
              Step {edge.node.step}
            </Typography>
            <Typography
              className="vertical-timeline-element-title"
              variant="h4"
              gutterBottom
            >
              {edge.node.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {edge.node.definition}
            </Typography>
            <br />
            <div className={classes.chip}>
              {edge.node.synonyms.map((synonym, index) => (
                <Chip
                  key={index}
                  label={synonym}
                  variant="outlined"
                  size="small"
                />
              ))}
            </div>
            <br />
            <Button
              component={Link}
              to={`/${edge.node.slug}`}
              variant="outlined"
            >
              {edge.node.title} Details
            </Button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default inject('predictions')(observer(TimelineComponent));
