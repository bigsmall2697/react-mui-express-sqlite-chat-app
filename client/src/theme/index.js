import { createMuiTheme } from '@material-ui/core';
import palette from './palette';
import typography from './typography';

const theme = createMuiTheme({
  palette,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  formButton: {
    fontSize: '13px',
    letterSpacing: '-0.05px',
    lineHeight: '22px',
    fontWeight: 500,
    textTransform: 'none',
  },
});

export default theme;
