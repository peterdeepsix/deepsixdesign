import React from 'react';
import Boundingbox from 'react-bounding-box';
import LinearProgress from '@material-ui/core/LinearProgress';

const DisplayObjects = ({ objects, image }) => {
  return (
    <React.Fragment>
      {objects ? (
        objects.map(
          ({ left, top, width, height, label, score }, index) => {
            const params = {
              image: { image },
              boxes: [
                [{ top }, { left }, { width }, { height }, { label }],
              ],
              options: {
                colors: {
                  normal: '#FF1654)',
                  selected: '#70C1B3',
                  unselected: 'rgba(100,100,100,1)',
                },
                style: {
                  maxWidth: '100%',
                  maxHeight: '90vh',
                },
                showLabels: true,
              },
            };
            console.log(params);
            return (
              <Boundingbox
                key={index}
                image={params.image}
                boxes={params.boxes}
                options={params.options}
              />
            );
          },
        )
      ) : (
        <LinearProgress />
      )}
    </React.Fragment>
  );
};
export default DisplayObjects;
