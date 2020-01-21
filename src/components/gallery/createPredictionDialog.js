import React from 'react';
import Loadable from '@loadable/component';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

const MediaUpload = Loadable(
    () => import('src/components/gallery/mediaUpload'),
    {
        fallback: <IndefiniteLoading message='loading mediaUpload' />,
    },
);

export default function DetailDialog() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Create Prediction
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Create Prediction"}</DialogTitle>
                <DialogContent>
                    <MediaUpload />
                    <DialogContentText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan, dolor lobortis sodales laoreet, erat felis consequat turpis, eu ornare elit lectus eget dolor. Cras feugiat odio ut elementum mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum magna risus, convallis a eros pulvinar, maximus suscipit dui. Aliquam nulla odio, ultrices eget ornare et, aliquet in lectus. In facilisis elit lorem, vitae lobortis nibh consequat sed. Phasellus maximus, est eget tincidunt fermentum, metus felis pellentesque purus, at ultrices urna mauris ut felis. Suspendisse accumsan, eros feugiat mollis blandit, mi augue eleifend turpis, eu mattis dolor sem a quam. Curabitur accumsan porta mi at faucibus. Fusce ultrices massa mi, nec ultricies elit lacinia at. Sed varius nisl urna, sed cursus orci consectetur a. Proin maximus sapien vel tortor accumsan, in semper augue consequat. Vestibulum scelerisque nibh vitae risus interdum congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} color="primary" autoFocus>Create Prediction</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}