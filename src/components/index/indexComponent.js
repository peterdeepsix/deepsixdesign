import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import TickerComponent from 'src/components/ticker/tickerComponent';
import Image from 'src/components/image/image';

const IndexComponent = ({ data }) => {
  return (
    <>
      <Container maxWidth="sm">
        <Box my={5}>
          <Image />
        </Box>
        <Box my={5}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Aliquam ut porttitor leo a. Quis auctor elit sed
            vulputate mi sit. Accumsan sit amet nulla facilisi morbi
            tempus iaculis urna. Dolor sit amet consectetur adipiscing
            elit ut aliquam purus sit. Justo eget magna fermentum
            iaculis eu non diam phasellus. Aliquet bibendum enim
            facilisis gravida neque convallis a cras semper. Bibendum
            at varius vel pharetra vel turpis. Vel eros donec ac odio
            tempor orci dapibus. Eget magna fermentum iaculis eu.
            Egestas erat imperdiet sed euismod. Morbi quis commodo
            odio aenean. Egestas egestas fringilla phasellus faucibus
            scelerisque. Urna nunc id cursus metus aliquam eleifend
            mi. Eget nunc scelerisque viverra mauris in aliquam sem.
            Feugiat nisl pretium fusce id velit ut tortor pretium
            viverra. Ac turpis egestas maecenas pharetra convallis
            posuere morbi. Pellentesque habitant morbi tristique
            senectus et netus. Odio pellentesque diam volutpat commodo
            sed. Diam in arcu cursus euismod quis viverra. Turpis
            egestas maecenas pharetra convallis posuere morbi leo
            urna. Volutpat maecenas volutpat blandit aliquam etiam.
            Turpis egestas pretium aenean pharetra magna ac. Nunc sed
            blandit libero volutpat sed cras ornare arcu. At tempor
            commodo ullamcorper a lacus vestibulum. Nulla malesuada
            pellentesque elit eget gravida. Fames ac turpis egestas
            maecenas. Vitae et leo duis ut diam. Orci sagittis eu
            volutpat odio facilisis mauris. Justo eget magna fermentum
            iaculis eu. Sed vulputate mi sit amet mauris. Leo duis ut
            diam quam. At elementum eu facilisis sed odio. Facilisis
            magna etiam tempor orci. Elit duis tristique sollicitudin
            nibh sit amet. Arcu felis bibendum ut tristique et egestas
            quis ipsum. Arcu non odio euismod lacinia at quis risus
            sed. Leo integer malesuada nunc vel risus commodo viverra
            maecenas accumsan. Risus in hendrerit gravida rutrum
            quisque non tellus orci. Nibh tortor id aliquet lectus
            proin. Amet risus nullam eget felis eget nunc lobortis
            mattis aliquam. Turpis massa tincidunt dui ut ornare
            lectus sit. Non blandit massa enim nec dui nunc mattis
            enim. Amet tellus cras adipiscing enim eu turpis. Auctor
            urna nunc id cursus metus aliquam eleifend mi in. Sapien
            et ligula ullamcorper malesuada proin. Viverra nam libero
            justo laoreet sit amet cursus. Quis commodo odio aenean
            sed. Fermentum iaculis eu non diam phasellus vestibulum
            lorem. Elit ut aliquam purus sit amet luctus venenatis
            lectus. Ac orci phasellus egestas tellus rutrum tellus
            pellentesque eu tincidunt. Et tortor consequat id porta
            nibh venenatis. In hac habitasse platea dictumst
            vestibulum rhoncus est. Vitae sapien pellentesque habitant
            morbi tristique senectus et netus. Egestas congue quisque
            egestas diam in arcu. Aliquam sem et tortor consequat id
            porta nibh venenatis cras. Sagittis orci a scelerisque
            purus semper eget duis. Auctor elit sed vulputate mi sit.
            Ultrices tincidunt arcu non sodales neque sodales. Ornare
            massa eget egestas purus viverra accumsan in nisl.
            Ridiculus mus mauris vitae ultricies leo integer malesuada
            nunc. Nisi porta lorem mollis aliquam ut porttitor leo a.
            Sed egestas egestas fringilla phasellus faucibus
            scelerisque eleifend. Dictumst quisque sagittis purus sit
            amet volutpat consequat mauris nunc. Nunc sed blandit
            libero volutpat sed cras. Eget duis at tellus at urna
            condimentum. Viverra aliquet eget sit amet tellus cras
            adipiscing enim. Ornare arcu dui vivamus arcu felis.
            Sapien pellentesque habitant morbi tristique senectus et.
            Sit amet venenatis urna cursus. Nullam ac tortor vitae
            purus faucibus ornare. Vulputate dignissim suspendisse in
            est ante in nibh mauris. Turpis egestas sed tempus urna et
            pharetra pharetra massa.
          </Typography>
        </Box>
      </Container>
      <TickerComponent data={data} />
    </>
  );
};

export default IndexComponent;
