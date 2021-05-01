import React from "react";

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function AboutDialog(props) {
  return (
    <Dialog 
      maxWidth="md" 
      fullWidth={true}
      onClose={props.handleAboutDialogClose} 
      open={props.open}
    >
      <DialogTitle>
        <div>
          <Typography align="center" variant="h5" gutterBottom>
            The Epic Greek Dictionary App
          </Typography>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <Typography align="center" gutterBottom>
          Created by <Link color="secondary" href="https://github.com/davidfdriscoll">David F. Driscoll</Link>.
        </Typography>
        <Typography align="center" gutterBottom>
          This dictionary app allows you to explore the vocabulary of epic -- i.e. Homeric -- Greek. Look up individual words from Homeric Greek or follow links to related words. Each entry has been laid out with indentation and varying typography to allow easy extraction of key information.
        </Typography>
        <Typography align="center" gutterBottom>
        The data comes from Gregory Crane's <Link color="secondary" href="https://github.com/gregorycrane/Homerica">TEI-XML digitization</Link> of Richard John Cunliffe's <Link color="secondary" href="https://archive.org/details/mdp.39015005687283">A Lexicon of the Homeric Dialect</Link>. The data has been converted by a script to a JSON of custom design for more efficient display.
        </Typography>
        <Typography align="center" gutterBottom>
          Built with <Link color="secondary" href="https://github.com/facebook/create-react-app">React</Link>, <Link color="secondary" href="https://material-ui.com">Material UI</Link>, and <Link color="secondary" href="https://reactrouter.com">React Router</Link>.
        </Typography>
      </DialogContent>
    </Dialog>
  );
}