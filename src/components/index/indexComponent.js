import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { GoPaintcan } from 'react-icons/go';

import Icon from '@material-ui/core/Icon';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Image from 'src/components/image/image';

import ColorPickerComponent from 'src/components/colorPicker/colorPickerComponent';
import DarkPickerComponent from 'src/components/darkPicker/darkPickerComponent';

const IndexComponent = ({ data }) => {
  return (
    <>
      <Container maxWidth="sm">
        <Box px={8} pt={3} mt={2} mb={1}>
          <Image />
        </Box>
        <Box mt={2} mb={1}>
          <ColorPickerComponent />
        </Box>
        <Box mt={2} mb={1}>
          <DarkPickerComponent />
        </Box>
        <Box mt={2} mb={1}>
          <Card variant="outlined">
            <CardHeader title="Process" />
            <CardContent>
              <Typography>
                Capture wordly patterns, in order to create visions,
                from which projected beauty emerges.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box mt={2} mb={1}>
          <Card variant="outlined">
            <CardHeader title=" Prior Art" />
            <CardContent>
              <Typography>
                In mainstream theories of natural language syntax,
                every syntactically-valid utterance can be extended to
                produce a new, longer one, because of recursion. If
                this process can be continued indefinitely, then there
                is no upper bound on the length of a well-formed
                utterance and the number of unique well-formed strings
                of any language is countably infinite. However, the
                books in the Library of Babel are of bounded--**/
                length ("each book is of four hundred and ten pages;
                each page, of forty lines, each line, of some eighty
                letters"), so the Library can only contain a finite
                number of distinct strings, and thus cannot contain
                all possible well-formed utterances. Borges' narrator
                notes this fact, but believes that the Library is
                nevertheless infinite; he speculates that it repeats
                itself periodically, giving an eventual "order" to the
                "disorder" of the seemingly-random arrangement of
                books.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box mt={2} mb={10}>
          <Card variant="outlined">
            <CardHeader title="Strategy" />
            <CardContent>
              <Typography>
                Taking out of scope problems beyond completion.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default IndexComponent;
